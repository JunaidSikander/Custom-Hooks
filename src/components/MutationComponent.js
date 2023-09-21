// Define your mutation function here
import { useMutation } from 'hooks';


const createPostApi=async ( variables ) => {
    try {
        return await fetch ( 'https://jsonplaceholder.typicode.com/posts', {
            method :"POST",
            body :JSON.stringify ( variables ),
            headers :{
                "Content-Type" :"application/json"
            }
        } );
    } catch ( error ) {
        throw error;
    }
};

const MutationComponent=() => {
    const { data, error, isLoading, mutate }=useMutation ( createPostApi(), {
        onSuccess :( responseData ) => {
            // Handle success here, e.g., update UI or show a success message
            console.log ( 'Mutation succeeded:', responseData );
        },
        onError :( error ) => {
            // Handle error here, e.g., show an error message
            console.error ( 'Mutation error:', error );
        }
    } );
    
    const handleMutation=async () => {
        // execute Mutation with the variables needed for your mutation
        await mutate ( {
            title :'New Post Title',
            body :'New Post Body',
            userId :1 // Replace with the desired user ID
        } );
    };
    
    return (
        <div>
            <button onClick={ handleMutation }>Execute Mutation</button>
            { isLoading && <p>Loading...</p> }
            { error && <p>Error: { error.message }</p> }
            { data && <p>Data: { JSON.stringify ( data ) }</p> }
        </div>
    );
}

export default MutationComponent

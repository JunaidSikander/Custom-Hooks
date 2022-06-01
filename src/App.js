import {DebounceComponent, LocalStorageHook, TimeoutComponent, ToggleComponent} from "components";

function App() {

    return (
        <div style={styles}>
            <h1>Custom Hooks</h1>
            {/*<LocalStorageHook/>*/}
            {/*<ToggleComponent/>*/}
            {/*<TimeoutComponent/>*/}
            <DebounceComponent/>
        </div>
    );
}

const styles = {
    display: "flex", flexDirection: 'column', alignItems: 'center'
}

export default App;

import {
    DebounceComponent,
    LocalStorageHook,
    TimeoutComponent,
    ToggleComponent,
    UpdateEffectComponent,
} from "components";

function App() {

    return (
        <div style={styles}>
            <h1>Custom Hooks</h1>
            {/*<LocalStorageHook/>*/}
            {/*<ToggleComponent/>*/}
            {/*<TimeoutComponent/>*/}
            {/*<DebounceComponent/>*/}
            <UpdateEffectComponent/>
        </div>
    );
}

const styles = {
    display: "flex", flexDirection: 'column', alignItems: 'center'
}

export default App;

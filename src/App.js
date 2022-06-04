import {
    ArrayComponent, AsyncComponent,
    DebounceComponent, DeepCompareEffectComponent, EventListenerComponent, FetchComponent,
    LocalStorageHook, PreviousComponent, ScriptComponent, StateWithHistoryComponent, StorageComponent,
    TimeoutComponent,
    ToggleComponent,
    UpdateEffectComponent,
} from "components";

function App() {

    return (
        <div style={styles}>
            {/*<h1>Custom Hooks</h1>*/}
            {/*<LocalStorageHook/>*/}
            {/*<ToggleComponent/>*/}
            {/*<TimeoutComponent/>*/}
            {/*<DebounceComponent/>*/}
            {/*<UpdateEffectComponent/>*/}
            {/*<ArrayComponent/>*/}
            {/*<PreviousComponent/>*/}
            {/*<StateWithHistoryComponent/>*/}
            {/*<StorageComponent/>*/}
            {/*<AsyncComponent/>*/}
            {/*<FetchComponent/>*/}
            {/*<ScriptComponent/>*/}
            {/*<DeepCompareEffectComponent/>*/}
            <EventListenerComponent/>
        </div>
    );
}

const styles = {
    display: "flex", flexDirection: 'column', alignItems: 'center'
}

export default App;

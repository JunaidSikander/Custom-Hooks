import {
    ArrayComponent,
    AsyncComponent, ClickOutsideComponent, CookieComponent, CopyToClipboard, DarkModeComponent,
    DebounceComponent, DebugInformationComponent,
    DeepCompareEffectComponent, EffectOnceComponent,
    EventListenerComponent,
    FetchComponent, GeoLocationComponent, HoveredComponent,
    LocalStorageHook, LongPressComponent, MediaQueryComponent, OnlineStatusComponent,
    OnScreenComponent,
    PreviousComponent, RenderCountComponent,
    ScriptComponent, SizeComponent,
    StateWithHistoryComponent, StateWithValidationComponent,
    StorageComponent,
    TimeoutComponent,
    ToggleComponent, TranslationComponent,
    UpdateEffectComponent, WindowSizeComponent,
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
            {/*<EventListenerComponent/>*/}
            {/*<OnScreenComponent/>*/}
            {/*<WindowSizeComponent/>*/}
            {/*<MediaQueryComponent/>*/}
            {/*<GeoLocationComponent/>*/}
            {/*<StateWithValidationComponent/>*/}
            {/*<SizeComponent/>*/}
            {/*<EffectOnceComponent/>*/}
            {/*<ClickOutsideComponent/>*/}
            {/*<DarkModeComponent/>*/}
            {/*<CopyToClipboard/>*/}
            {/*<CookieComponent/>*/}
            {/*<TranslationComponent/>*/}
            {/*<OnlineStatusComponent/>*/}
            {/*<RenderCountComponent/>*/}
            {/*<DebugInformationComponent/>*/}
            {/*<HoveredComponent/>*/}
            <LongPressComponent/>
        </div>
    );
}

const styles = {
    display: "flex", flexDirection: 'column', alignItems: 'center'
}

export default App;

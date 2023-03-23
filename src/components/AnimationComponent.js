import {useAnimation} from "hooks";

const Ball = ({ innerStyle }) => (
    <div
        style={{
            width: 100,
            height: 100,
            marginRight: "40px",
            borderRadius: "50px",
            backgroundColor: "#4dd5fa",
            ...innerStyle,
        }}
    />
);

const AnimationComponent = () => {
    // Call hook multiple times to get animated values with different start delays
    const animation1 = useAnimation("inExpo", 600, 500);
    const animation2 = useAnimation("elastic", 600, 1000);
    const animation3 = useAnimation("linear", 600, 1500);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Ball
                innerStyle={{
                    marginTop: animation1 * 200 - 100,
                }}
            />
            <Ball
                innerStyle={{
                    marginTop: animation2 * 200 - 100,
                }}
            />
            <Ball
                innerStyle={{
                    marginTop: animation3 * 200 - 100,
                }}
            />
        </div>
    );
}

export default AnimationComponent;

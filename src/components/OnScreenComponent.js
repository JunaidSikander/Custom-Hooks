import React, {useRef} from 'react'
import {useOnScreen} from "hooks";

const OnScreenComponent = () => {
    const headerTwoRef = useRef();
    const visible = useOnScreen(headerTwoRef, "-100px");

    return (
        <>
            <h1>Header</h1>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit ipsum quia quo sed. Adipisci
                aliquid architecto beatae cumque minus necessitatibus, nisi nostrum odit possimus, rem, sequi tempora
                voluptas! Alias aliquam aut doloribus eum excepturi expedita fuga fugit libero modi, nam nihil nobis
                obcaecati odio perferendis, rem saepe sit, soluta ullam vel voluptas. Ipsum, vitae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias animi commodi
                delectus doloremque, dolorum, expedita fuga illum odio odit placeat quam repudiandae sed similique sint
                suscipit tenetur ullam vero, voluptate? Assumenda commodi dignissimos eius et expedita molestias nostrum
                nulla quos recusandae sunt? Ab aliquid commodi consequuntur deserunt dicta dignissimos dolorem, ducimus
                eligendi esse expedita harum hic, in incidunt ipsam itaque iusto labore minima molestias mollitia nemo
                nostrum obcaecati optio pariatur quas quia quo sequi tempora veniam voluptate voluptatibus. Asperiores
                distinctio facere id incidunt inventore maxime vitae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit ipsum quia quo sed. Adipisci
                aliquid architecto beatae cumque minus necessitatibus, nisi nostrum odit possimus, rem, sequi tempora
                voluptas! Alias aliquam aut doloribus eum excepturi expedita fuga fugit libero modi, nam nihil nobis
                obcaecati odio perferendis, rem saepe sit, soluta ullam vel voluptas. Ipsum, vitae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias animi commodi
                delectus doloremque, dolorum, expedita fuga illum odio odit placeat quam repudiandae sed similique sint
                suscipit tenetur ullam vero, voluptate? Assumenda commodi dignissimos eius et expedita molestias nostrum
                nulla quos recusandae sunt? Ab aliquid commodi consequuntur deserunt dicta dignissimos dolorem, ducimus
                eligendi esse expedita harum hic, in incidunt ipsam itaque iusto labore minima molestias mollitia nemo
                nostrum obcaecati optio pariatur quas quia quo sequi tempora veniam voluptate voluptatibus. Asperiores
                distinctio facere id incidunt inventore maxime vitae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit ipsum quia quo sed. Adipisci
                aliquid architecto beatae cumque minus necessitatibus, nisi nostrum odit possimus, rem, sequi tempora
                voluptas! Alias aliquam aut doloribus eum excepturi expedita fuga fugit libero modi, nam nihil nobis
                obcaecati odio perferendis, rem saepe sit, soluta ullam vel voluptas. Ipsum, vitae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias animi commodi
                delectus doloremque, dolorum, expedita fuga illum odio odit placeat quam repudiandae sed similique sint
                suscipit tenetur ullam vero, voluptate? Assumenda commodi dignissimos eius et expedita molestias nostrum
                nulla quos recusandae sunt? Ab aliquid commodi consequuntur deserunt dicta dignissimos dolorem, ducimus
                eligendi esse expedita harum hic, in incidunt ipsam itaque iusto labore minima molestias mollitia nemo
                nostrum obcaecati optio pariatur quas quia quo sequi tempora veniam voluptate voluptatibus. Asperiores
                distinctio facere id incidunt inventore maxime vitae!

            </div>
            <h1 ref={headerTwoRef}>Header 2 {visible && '(Visible)'}</h1>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit ipsum quia quo sed. Adipisci
                aliquid architecto beatae cumque minus necessitatibus, nisi nostrum odit possimus, rem, sequi tempora
                voluptas! Alias aliquam aut doloribus eum excepturi expedita fuga fugit libero modi, nam nihil nobis
                obcaecati odio perferendis, rem saepe sit, soluta ullam vel voluptas. Ipsum, vitae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias animi commodi
                delectus doloremque, dolorum, expedita fuga illum odio odit placeat quam repudiandae sed similique sint
                suscipit tenetur ullam vero, voluptate? Assumenda commodi dignissimos eius et expedita molestias nostrum
                nulla quos recusandae sunt? Ab aliquid commodi consequuntur deserunt dicta dignissimos dolorem, ducimus
                eligendi esse expedita harum hic, in incidunt ipsam itaque iusto labore minima molestias mollitia nemo
                nostrum obcaecati optio pariatur quas quia quo sequi tempora veniam voluptate voluptatibus. Asperiores
                distinctio facere id incidunt inventore maxime vitae!
            </div>
        </>
    )
}

export default OnScreenComponent

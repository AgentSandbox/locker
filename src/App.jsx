import {Environment, OrbitControls, Scroll, ScrollControls} from "@react-three/drei"

import './App.css'
import Model from "./components/Model.jsx";

function App() {

    return (
        <>
            <ambientLight intensity={0.1}/>
            <color attach="background" args={["#e6e7ff"]} />
            <ambientLight intensity={1.2}/>
            <spotLight position={[0, 5, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001}/>
            <Environment preset='warehouse'/>

            <ScrollControls pages={6} damping={0.1}>

                <Model/>

                <Scroll>

                </Scroll>
                <Scroll html style={{width: '100%'}}>
                    <h1>HELLO</h1>

                    <div className='row' style={{position: 'absolute', top: `132vh`}}>
                        <h1>Be a Man of the Future.</h1>
                        <p style={{maxWidth: '400px'}}>Featuring a sleek, metallic design inspired by advanced
                            technology, this aftershave bottle is as stylish as it is functional. But it's not just a
                            pretty face - inside, you'll find a nourishing and protective aftershave formula that will
                            leave your skin feeling refreshed and hydrated.</p>
                    </div>

                    <h1 style={{position: 'absolute', top: '264vh'}}>HELLO3</h1>
                    <h1 style={{position: 'absolute', top: '396vh'}}>HELLO3</h1>

                </Scroll>
            </ScrollControls>
        </>
    )
}

export default App

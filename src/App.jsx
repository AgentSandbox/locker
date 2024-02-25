import {Environment, OrbitControls, Scroll, ScrollControls} from "@react-three/drei"

import './App.css'
import Model from "./components/Model.jsx";
import Model2 from "./components/Model2.jsx";

function App() {

    return (
        <>
            {/*<ambientLight intensity={0.1}/>*/}
            <color attach="background" args={["#e6e7ff"]}/>
            {/*<ambientLight intensity={1.2}/>*/}
            {/*<spotLight position={[0, 5, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001}/>*/}
            <Environment preset='warehouse'/>

            <ScrollControls pages={5} damping={0.2}>

                <Model/>
                {/*<Model2/>*/}

                <Scroll>

                </Scroll>
                <Scroll html style={{width: '100%'}}>
                    <h1> BW</h1>
                    <h2  className='row'> SPECIAL OFFER</h2>

                    <div style={{position: 'absolute', top: `132vh`}}>
                        <div>
                            <h1>Be a Man of the Future.</h1>
                        </div>
                        <div className='row'>
                            <p style={{maxWidth: '400px'}}>Featuring a sleek, metallic design inspired by advanced
                                technology, this aftershave bottle is as stylish as it is functional. But it's not just
                                a
                                pretty face - inside, you'll find a nourishing and protective aftershave formula that
                                will
                                leave your skin feeling refreshed and hydrated.</p>

                        </div>

                    </div>

                    <div className='row' style={{top: `264vh`}}>
                        <div>
                            <h1>Be a Man of the Future.</h1>
                        </div>
                        <div className='row'>
                            <p style={{maxWidth: '400px'}}>Featuring a sleek, metallic design inspired
                                by advanced
                                technology, this aftershave bottle is as stylish as it is functional. But it's not just
                                a
                                pretty face - inside, you'll find a nourishing and protective aftershave formula that
                                will
                                leave your skin feeling refreshed and hydrated.</p>
                        </div>

                    </div>

                    <div className='row' style={{top: `396vh`}}>
                        <div>
                            <h1>HELLO3</h1>
                        </div>
                        <div className='row'>
                            <p style={{maxWidth: '400px'}}>Featuring a sleek, metallic design inspired
                                by advanced
                                technology, this aftershave bottle is as stylish as it is functional. But it's not just
                                a
                                pretty face - inside, you'll find a nourishing and protective aftershave formula that
                                will
                                leave your skin feeling refreshed and hydrated.</p>
                        </div>

                    </div>

                    {/*<h1 style={{position: 'absolute', top: '528vh'}}>HELLO4</h1>*/}

                </Scroll>
            </ScrollControls>
        </>
    )
}

export default App

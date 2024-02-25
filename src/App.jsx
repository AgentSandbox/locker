import {Environment, OrbitControls, Scroll, ScrollControls} from "@react-three/drei"

import './App.css'
import Model from "./components/Model.jsx";

function App() {

    return (
        <>
            <color attach="background" args={["#e6e7ff"]}/>
            <Environment preset='warehouse'/>

            <ScrollControls pages={5} damping={0.2}>

                <Model/>

                <Scroll>

                </Scroll>
                <Scroll html style={{width: '100%'}}>
                    <h1> BW</h1>
                    <h2  className='row'> SPECIAL OFFER</h2>

                    <div style={{position: 'absolute', top: `132vh`}}>
                        <div>
                            <h1>ELITE</h1>
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
                            <h1>MIDDLE</h1>
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
                            <h1>MINI</h1>
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

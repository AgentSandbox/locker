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
                    <h1 style={{ color: '#87CEEB',position: 'absolute', top: `65vh`,left: '50%', fontSize: '4em', transform: `translate(-50%,-50%)` }}>
                        Belgrade
                    </h1>
                    <h1 style={{ color: '#87CEEB',position: 'absolute', top: `75vh`,left: '50%', fontSize: '4em', transform: `translate(-50%,-50%)` }}>
                        Woterfront
                    </h1>

                    <div style={{position: 'absolute', top: `132vh`}}>
                        <div>
                            <h1>ELITE</h1>
                        </div>
                        <div className='row'>
                            <p style={{maxWidth: '400px'}}>
                                A luxury cabinet epitomizes the epitome of opulence
                                and refinement in furniture design. Crafted with the
                                utmost attention to detail and using the finest materials,
                                it stands as a statement piece in any room, exuding elegance
                                and sophistication.</p>

                        </div>

                    </div>

                    <div className='row' style={{top: `264vh`}}>
                        <div>
                            <h1>MIDDLE</h1>
                        </div>
                        <div className='row'>
                            <p style={{maxWidth: '400px'}}>A middle-class cabinet offers practicality and functionality without compromising on style. Crafted from durable materials such as engineered wood or solid hardwood veneers, it balances affordability with quality construction.

                                Typically featuring a straightforward design, a middle-class cabinet focuses on practical storage solutions. It may include adjustable shelves, drawers with smooth gliding mechanisms, and simple hardware for ease of use. While it may not boast intricate carvings or luxurious finishes, it exudes a sense of warmth and homeliness that complements a variety of interior styles.</p>
                        </div>

                    </div>

                    <div className='row' style={{top: `396vh`}}>
                        <div>
                            <h1>ECONOMY</h1>
                        </div>
                        <div className='row'>
                            <p style={{maxWidth: '400px'}}>The economy class cabinet is primarily designed for those seeking a simple and budget-friendly storage solution for clothing and other items without unnecessary frills and expensive additions.</p>
                        </div>

                    </div>

                    {/*<h1 style={{position: 'absolute', top: '528vh'}}>HELLO4</h1>*/}

                </Scroll>
            </ScrollControls>
        </>
    )
}

export default App

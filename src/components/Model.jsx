import React, {useRef} from 'react'
import {useGLTF, useScroll} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {gsap} from "gsap"
import {useLayoutEffect} from "react"

const Model = () => {
    const {nodes, materials} = useGLTF('./models/lockerGSAP.glb')
    const mod = useRef()
    const tl = useRef()
    const scroll = useScroll()
    const G1 = useRef()
    const G2 = useRef()
    const G3 = useRef()

    useFrame ((state , delta) => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

     useLayoutEffect(()=> {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})
        mod.current.rotation.y = 5
        mod.current.position.y = -0.3
        mod.current.position.z = -0.5
        tl.current
            .to(G1.current.rotation, {y: -0.8}, 0)
            .to(G2.current.rotation, {y: -1.8}, 0)
            .to(G1.current.position, {y: 8}, 3)
            .to(G2.current.position, {y: 9}, 3)
            .to(G2.current.rotation, {y: 0}, 4)
            .to(G2.current.position, {y: 17}, 7)
            .to(G3.current.position, {y: 19.5}, 7)
            .to(G3.current.rotation, {y: -0.8}, 8)
    },[])

    return (
        <>
            <group dispose={null} ref={mod}>

                <group ref={G1}>
                    <mesh geometry={nodes.G11.geometry} material={materials.G11} />
                    <mesh geometry={nodes.G12.geometry} material={materials.G12} />
                </group>

                <group ref={G2}>
                    <mesh geometry={nodes.G21.geometry} material={materials.G21} />
                    <mesh geometry={nodes.G22.geometry} material={materials.G22} />
                </group>

                <group ref={G3}>
                    <mesh geometry={nodes.G31.geometry} material={materials.G31} />
                    <mesh geometry={nodes.G32.geometry} material={materials.G32} />
                </group>

            </group>

        </>
    )
};

export default Model;
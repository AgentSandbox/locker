import React, {useRef} from 'react'
import {useGLTF, useScroll} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {gsap} from "gsap"
import {useLayoutEffect} from "react"

const Model = () => {
    const {nodes, materials} = useGLTF('./models/lockerGSAP.glb')
    // const {nodes2, materials2} = useGLTF('./models/lockerViewOne.gltf')
    const mod = useRef()
    const tl = useRef()
    const scroll = useScroll()
    const ref = useRef()
    const G1 = useRef()
    const G2 = useRef()
    const G3 = useRef()

    useFrame ((state , delta) => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(()=> {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

        tl.current
            .to(G1.current.rotation, {y: -2}, 0)
            .to(G1.current.position, {y: 0}, 1)
            .to(G1.current.position, {y: 8}, 3)
            .to(G2.current.position, {y: 10}, 4)
            .to(G2.current.rotation, {y: -3}, 5)
            // .to(G2.current.position, {y: 12}, 6)
            .to(G2.current.position, {y: 17}, 7)
            .to(G3.current.position, {y: 21}, 7)
            .to(G3.current.rotation, {y: -3}, 8)
    },[])

    return (
        <>
            <group dispose={null} ref={mod}>

                <group ref={G1}>
                    <mesh geometry={nodes.G11.geometry} material={materials.G11} />
                    <mesh geometry={nodes.G12.geometry} material={materials.G12} />
                </group>

                <group ref={G2}>
                    <mesh geometry={nodes.G2.geometry} material={materials.G2} />
                </group>

                <group ref={G3}>
                    <mesh geometry={nodes.G3.geometry} material={materials.G3} />
                </group>

            </group>

        </>
    )
};

export default Model;
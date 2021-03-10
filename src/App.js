import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import './App.css';
import LeapMotion from './leap/LeapMotion';

function HandsLeap () {

  let meshRef = useRef();
  let handsRef = useRef();
  let lineRef = useRef();

  const leapMotion = new LeapMotion();
  leapMotion.framesLength = 10;
  leapMotion.addEventListener("open", evt => {
    console.log(leapMotion, handsRef.current)
  });

  leapMotion.open();

  let positions = [];
  let colors = [];

  useFrame(() => {    
    if(leapMotion !== undefined) {
      const frame = leapMotion.frame;
      if(frame !== undefined) {        
        if(frame.hands.length > 0) {
          meshRef.current.visible = true      

          frame.hands.forEach(hand => {
            /*positions.push(...hand.elbow.toArray());
            colors.push(1, 1, 1);

            positions.push(...hand.wrist.toArray());
            colors.push(1, 1, 1);*/

            positions.push(...hand.palm.position.toArray());
            colors.push(0.5, 0.5, 0.5);

            hand.fingers.forEach((finger, idx) => {
              positions.push(...finger.carpPosition.toArray());
              colors.push(1, 1, 1);

              positions.push(...finger.mcpPosition.toArray());
              colors.push(1, 1, 102/255);

              positions.push(...finger.pipPosition.toArray());
              colors.push(51/255, 204/255, 51/255);

              positions.push(...finger.dipPosition.toArray());
              colors.push(0, 153/255, 1);

              positions.push(...finger.btipPosition.toArray());
              colors.push(1, 102/255, 102/255);
            }); // fingers
          }); // hands

          handsRef.current.geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(positions, 3)
          );

          handsRef.current.geometry.setAttribute(
            "color",
            new THREE.Float32BufferAttribute(colors, 3)
          );

          handsRef.current.geometry.attributes.position.count = positions.length / 3;
          handsRef.current.geometry.attributes.position.itemSize = 3;
          handsRef.current.geometry.attributes.color.count = colors.length / 3;
          handsRef.current.geometry.attributes.color.itemSize = 3;

          handsRef.current.geometry.computeBoundingSphere();

          lineRef.current.geometry = handsRef.current.geometry;

          positions = [];
          colors = [];

        } else {
          meshRef.current.visible = false
        }
      }
    }
  })

  return(
    <group ref={meshRef}>
      <points ref={handsRef}>
        <bufferGeometry attach="geometry"/>
        <pointsMaterial
        attach="material"
          vertexColors
          size={15}
          sizeAttenuation={false}
        />
        <lineSegments ref={lineRef}>
          <lineBasicMaterial vertexColors blending={THREE.AdditiveBlending} transparent/>
        </lineSegments>
      </points>
    </group>
  )

}

function App() {
  
  return (
    <div className="App">
      <Canvas 
        camera={{
          fov: 75,
          aspect: 2,
          near: 0.1,
          far: 1000,
          position: [0,200,200],
          rotation: [-0.5,0,0]
        }}
      >
        <color attach="background" args={["#050505"]}/>
        <mesh position={[0,0,-10]}>
          <boxGeometry args={[1,1,1]} />
          <meshBasicMaterial color="red"/>
        </mesh>
        <HandsLeap/>
      </Canvas>
    </div>
  );
}

export default App;

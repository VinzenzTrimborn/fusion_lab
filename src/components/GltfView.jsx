import * as React from "react";
import {PlasmicGltfView} from "./plasmic/fusion_lab/PlasmicGltfView";
import {Canvas} from "@react-three/fiber";
import {useLoader} from "@react-three/fiber";
import {CameraControls, Environment, Gltf, Stars} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense} from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4}/>
        </>
    );
};

function GltfView_(props, ref) {
    return (
        <PlasmicGltfView
            root={{ref}}
            viewer={{
                render: () => (
                    <Canvas>
                        <Suspense fallback={null}>
                            <Gltf src="/thor.glb" receiveShadow castShadow />
                            <CameraControls />
                            <Environment preset="sunset" background/>
                            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        </Suspense>
                    </Canvas>
                )
            }}
            {...props}
        />);
}

const GltfView = React.forwardRef(GltfView_);

export default GltfView;

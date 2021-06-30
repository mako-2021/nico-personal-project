import React from 'react'
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core'
import SceneComponent from './SceneComponent'

let box

const onSceneReady = (scene) => {
  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)

  camera.setTarget(Vector3.Zero())

  const canvas = scene.getEngine().getRenderingCanvas()
  camera.attachControl(canvas, true)

  // attaches the cameera to the canvas
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)

  light.intensity = 0.7 // average light is 1

  // pre built babylonjs builds
  box = MeshBuilder.CreateBox('box', { size: 5 }, scene)

  box.position.y = 1

  MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)
}

// spins the box 
// const onRender = (scene) => {
//   if (box !== undefined) {
//     var deltaTimeInMillis = scene.getEngine().getDeltaTime()
//     const rpm = 10
//     box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
//   }
// }
// onRender={onRender}

const SceneDisplay = () => (
  <div className="container">
    <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" className="scene" />
  </div>
)

export default SceneDisplay

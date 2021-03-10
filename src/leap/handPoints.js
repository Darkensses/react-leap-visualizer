import * as THREE from 'three';

class HandPoints {
  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.PointsMaterial({
      size: 15,
      vertexColors: THREE.VertexColors
    });
    const positions = [];
    const colors = [];
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.positions, 3)
    );
    this.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(this.colors, 3)
    );
    this.geometry.colorsNeedUpdate = true;
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    //scene.add(this.points);
  }
  setFromHands(...hands) {
    const positions = [];
    const colors = [];
    hands.forEach(hand => {
      positions.push(...hand.elbow.toArray());
      colors.push(1, 1, 1);
      positions.push(...hand.wrist.toArray());
      colors.push(1, 1, 1);
      positions.push(...hand.palm.position.toArray());
      colors.push(0.5, 0.5, 0.5);
      hand.fingers.forEach((finger, index) => {
        positions.push(...finger.carpPosition.toArray());
        colors.push(1, 1, 1);
        positions.push(...finger.mcpPosition.toArray());
        colors.push(1, 1, 102 / 255);
        positions.push(...finger.pipPosition.toArray());
        colors.push(51 / 255, 204 / 255, 51 / 255);
        positions.push(...finger.dipPosition.toArray());
        colors.push(0, 153 / 255, 1);
        positions.push(...finger.btipPosition.toArray());
        colors.push(1, 102 / 255, 102 / 255);
      });
    });
    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    this.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );
  }
}

export default HandPoints;
## LeapMotion visualizer for React

If you have a LeapMotion and love to work on React, you should check this repo :wink:

## Installation
Please install the **Leap Motion Orion 3.2.1** SDK. You can download the installer [here](https://developer.leapmotion.com/releases/leap-motion-orion-321).
<br>
Once you're done, you can move to clone the repo and install the npm dependencies:
```
git clone https://github.com/Darkensses/react-leap-visualizer.git
cd react-leap-visualizer
npm install
```
Run the React app (don't forget to plug your LeapMotion to the computer :electric_plug::computer:)
```
npm run start
```
![alt text](https://github.com/Darkensses/react-leap-visualizer/raw/master/preview.png "Preview")

## How was it built?
:sparkles: with a LeapMotion of course :sparkles:
<br>
But also with:
- **ws** :ear: *(to listen the LeapMotion events with a websocket)* [Go to repo](https://github.com/websockets/ws).
- **threeJS** :ice_cube: *(for maths and drawing 3D graphics)* [Go to repo](https://github.com/mrdoob/three.js/).
- **react-three-fiber** *(threeJS on React!)* [Go to repo](https://github.com/pmndrs/react-three-fiber).

:loudspeaker: Shout out to **Zakaton** for create an unofficial LeapMotion SDK and allows me to understan what is going behind the scenes!
- [Zakaton's Github](https://github.com/zakaton)
- Unoffical SDK [repo](https://github.com/zakaton/Leap-Motion-Web-SDK)
- Youtube [Demo](https://www.youtube.com/watch?v=Y2eo57Z4YWo) *(Check the channel, it has a lot of amazing demos with other devices!)*

Also, thanks to the [**Project North Start**](https://project-north-star.gitbook.io/project-north-star/) discord server to help me with some doubts about how to put the LeapMotion data in the screen ;)
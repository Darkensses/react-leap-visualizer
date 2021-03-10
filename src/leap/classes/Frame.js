// https://developer-archive.leapmotion.com/documentation/javascript/supplements/Leap_JSON.html


const Hand = require("./Hand");
const Pointable = require("./Pointable");

class Frame {
    constructor(frameData) {
        const {currentFrameRate, id, timestamp} = frameData;
            Object.assign(this, {currentFrameRate, id, timestamp});

        const {hands, pointables} = frameData;
            this.hands = hands.map(handData => new Hand(handData));
            this.pointables = pointables.map(pointableData => new Pointable(pointableData, this.hands));
    }
}

module.exports = Frame;
const LeapMotion = require("./LeapMotion.js");
LeapMotion.WebSocket = require("ws");
LeapMotion.CustomEvent = class {
  constructor(type, options) {
    this.type = type;
    this.detail = options.detail;
  }
};

//module.exports = LeapMotion;
export default LeapMotion;
"use strict";var lastTime=(new Date).getTime();function betterFunction(e,t){e.preventDefault();e=(new Date).getTime();t<e-lastTime&&console.log("Call The API"),lastTime=e}
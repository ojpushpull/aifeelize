"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/build";
exports.ids = ["pages/api/build"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/build.js":
/*!****************************!*\
  !*** ./pages/api/build.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const result = req.body.buyv || \"\";\n    if (result.length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please create a buying vidison first\"\n            }\n        });\n        return;\n    }\n    try {\n        const completer = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generateAds(result),\n            temperature: 0.6\n        });\n        res.status(200).json({\n            result: completer.data.choices[0].text\n        });\n    } catch (error) {\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generateAds(result) {\n    return `You are an google adwords pay per click specialist create a google ad using the companys ${result} story narrative as inspiration for the advertisements\n\n\n\nBusiness: You are an google adwords pay per click specialist create a google ad using the companys ${result} story narrative as inspiration for the advertisements\nResponse:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnVpbGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3RDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNyQyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN2Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7UUFDQTtJQUNKLENBQUM7SUFFRCxNQUFNQyxTQUFTTixJQUFJTyxJQUFJLENBQUNDLElBQUksSUFBSTtJQUM5QixJQUFJRixPQUFPRyxNQUFNLEtBQUssR0FBRztRQUN6QlIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTUssWUFBWSxNQUFNWCxPQUFPWSxnQkFBZ0IsQ0FBQztZQUM1Q0MsT0FBTztZQUNQQyxRQUFRQyxZQUFZUjtZQUNwQlMsYUFBYTtRQUVqQjtRQUNBZCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVHLFFBQVFJLFVBQVVNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUFDO0lBQ2xFLEVBQUUsT0FBT2QsT0FBTztRQUNaLElBQUlBLE1BQU1lLFFBQVEsRUFBRTtZQUNoQkMsUUFBUWhCLEtBQUssQ0FBQ0EsTUFBTWUsUUFBUSxDQUFDakIsTUFBTSxFQUFFRSxNQUFNZSxRQUFRLENBQUNILElBQUk7WUFDOURmLElBQUlDLE1BQU0sQ0FBQ0UsTUFBTWUsUUFBUSxDQUFDakIsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1lLFFBQVEsQ0FBQ0gsSUFBSTtRQUM1RCxPQUFPO1lBQ0xJLFFBQVFoQixLQUFLLENBQUMsQ0FBQywrQkFBK0IsRUFBRUEsTUFBTUMsT0FBTyxDQUFDLENBQUM7WUFDL0RKLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxPQUFPO29CQUNMQyxTQUFTO2dCQUNYO1lBQ0Y7UUFDRixDQUFDO0lBQ0Q7QUFDSixDQUFDO0FBRUQsU0FBU1MsWUFBWVIsTUFBTSxFQUFFO0lBQ3pCLE9BQU8sQ0FBQyx5RkFBeUYsRUFBRUEsT0FBTzs7OzttR0FJWCxFQUFFQSxPQUFPO1NBQ25HLENBQUM7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL2FpZmVlbGl6ZS8uL3BhZ2VzL2FwaS9idWlsZC5qcz85NzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHJlcS5ib2R5LmJ1eXYgfHwgJyc7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGNyZWF0ZSBhIGJ1eWluZyB2aWRpc29uIGZpcnN0XCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlciA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHsgXG4gICAgICAgICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgICAgICAgICBwcm9tcHQ6IGdlbmVyYXRlQWRzKHJlc3VsdCksXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogMC42LFxuICBcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0ZXIuZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2l0aCBPcGVuQUkgQVBJIHJlcXVlc3Q6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC4nLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFkcyhyZXN1bHQpIHtcbiAgICByZXR1cm4gYFlvdSBhcmUgYW4gZ29vZ2xlIGFkd29yZHMgcGF5IHBlciBjbGljayBzcGVjaWFsaXN0IGNyZWF0ZSBhIGdvb2dsZSBhZCB1c2luZyB0aGUgY29tcGFueXMgJHtyZXN1bHR9IHN0b3J5IG5hcnJhdGl2ZSBhcyBpbnNwaXJhdGlvbiBmb3IgdGhlIGFkdmVydGlzZW1lbnRzXG5cblxuXG5CdXNpbmVzczogWW91IGFyZSBhbiBnb29nbGUgYWR3b3JkcyBwYXkgcGVyIGNsaWNrIHNwZWNpYWxpc3QgY3JlYXRlIGEgZ29vZ2xlIGFkIHVzaW5nIHRoZSBjb21wYW55cyAke3Jlc3VsdH0gc3RvcnkgbmFycmF0aXZlIGFzIGluc3BpcmF0aW9uIGZvciB0aGUgYWR2ZXJ0aXNlbWVudHNcblJlc3BvbnNlOmA7XG59Il0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInJlc3VsdCIsImJvZHkiLCJidXl2IiwibGVuZ3RoIiwiY29tcGxldGVyIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwiZ2VuZXJhdGVBZHMiLCJ0ZW1wZXJhdHVyZSIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInJlc3BvbnNlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/build.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/build.js"));
module.exports = __webpack_exports__;

})();
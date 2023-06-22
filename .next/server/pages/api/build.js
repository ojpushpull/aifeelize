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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const result = req.body.buyv || \"\";\n    if (buyv.length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please create a buying vidison first\"\n            }\n        });\n        return;\n    }\n    try {\n        const completer = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generateAds(result),\n            temperature: 0.6,\n            maxTokens: 800\n        });\n        res.status(200).json({\n            result: completer.data.choices[0].text\n        });\n    } catch (error) {\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generateAds(result) {\n    return `You are an google adwords pay per click specialist create a google ad using the companys ${result} story narrative as inspiration for the advertisements\n\n\n\nBusiness: You are an google adwords pay per click specialist create a google ad using the companys ${result} story narrative as inspiration for the advertisements\nResponse:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnVpbGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3RDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNyQyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN2Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7UUFDQTtJQUNKLENBQUM7SUFFRCxNQUFNQyxTQUFTTixJQUFJTyxJQUFJLENBQUNDLElBQUksSUFBSTtJQUNoQyxJQUFJQSxLQUFLQyxNQUFNLEtBQUssR0FBRztRQUNyQlIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTUssWUFBWSxNQUFNWCxPQUFPWSxnQkFBZ0IsQ0FBQztZQUM1Q0MsT0FBTztZQUNQQyxRQUFRQyxZQUFZUjtZQUNwQlMsYUFBYTtZQUNiQyxXQUFXO1FBQ2Y7UUFDQWYsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRyxRQUFRSSxVQUFVTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFBQztJQUNsRSxFQUFFLE9BQU9mLE9BQU87UUFDWixJQUFJQSxNQUFNZ0IsUUFBUSxFQUFFO1lBQ2hCQyxRQUFRakIsS0FBSyxDQUFDQSxNQUFNZ0IsUUFBUSxDQUFDbEIsTUFBTSxFQUFFRSxNQUFNZ0IsUUFBUSxDQUFDSCxJQUFJO1lBQzlEaEIsSUFBSUMsTUFBTSxDQUFDRSxNQUFNZ0IsUUFBUSxDQUFDbEIsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1nQixRQUFRLENBQUNILElBQUk7UUFDNUQsT0FBTztZQUNMSSxRQUFRakIsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDtZQUNGO1FBQ0YsQ0FBQztJQUNEO0FBQ0osQ0FBQztBQUVELFNBQVNTLFlBQVlSLE1BQU0sRUFBRTtJQUN6QixPQUFPLENBQUMseUZBQXlGLEVBQUVBLE9BQU87Ozs7bUdBSVgsRUFBRUEsT0FBTztTQUNuRyxDQUFDO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haWZlZWxpemUvLi9wYWdlcy9hcGkvYnVpbGQuanM/OTc1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSByZXEuYm9keS5idXl2IHx8ICcnO1xuICAgIGlmIChidXl2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGNyZWF0ZSBhIGJ1eWluZyB2aWRpc29uIGZpcnN0XCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlciA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHsgXG4gICAgICAgICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgICAgICAgICBwcm9tcHQ6IGdlbmVyYXRlQWRzKHJlc3VsdCksXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogMC42LFxuICAgICAgICAgICAgbWF4VG9rZW5zOiA4MDAsIFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRlci5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LicsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQWRzKHJlc3VsdCkge1xuICAgIHJldHVybiBgWW91IGFyZSBhbiBnb29nbGUgYWR3b3JkcyBwYXkgcGVyIGNsaWNrIHNwZWNpYWxpc3QgY3JlYXRlIGEgZ29vZ2xlIGFkIHVzaW5nIHRoZSBjb21wYW55cyAke3Jlc3VsdH0gc3RvcnkgbmFycmF0aXZlIGFzIGluc3BpcmF0aW9uIGZvciB0aGUgYWR2ZXJ0aXNlbWVudHNcblxuXG5cbkJ1c2luZXNzOiBZb3UgYXJlIGFuIGdvb2dsZSBhZHdvcmRzIHBheSBwZXIgY2xpY2sgc3BlY2lhbGlzdCBjcmVhdGUgYSBnb29nbGUgYWQgdXNpbmcgdGhlIGNvbXBhbnlzICR7cmVzdWx0fSBzdG9yeSBuYXJyYXRpdmUgYXMgaW5zcGlyYXRpb24gZm9yIHRoZSBhZHZlcnRpc2VtZW50c1xuUmVzcG9uc2U6YDtcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwicmVzdWx0IiwiYm9keSIsImJ1eXYiLCJsZW5ndGgiLCJjb21wbGV0ZXIiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJnZW5lcmF0ZUFkcyIsInRlbXBlcmF0dXJlIiwibWF4VG9rZW5zIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwicmVzcG9uc2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/build.js\n");

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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(6);
var Component_1 = __webpack_require__(12);
var AjaxCall_1 = __webpack_require__(13);
var CSCallback_1 = __webpack_require__(14);
var LearnRouter_1 = __webpack_require__(15);
function Demo() {
    console.log(this);
    return (React.createElement("div", null,
        React.createElement("span", null, "lalala")));
}
var render = function (id, obj) {
    console.log(obj);
    var vdom = (React.createElement("div", null,
        React.createElement("h1", null, obj.name)));
    ReactDOM.render(vdom, document.getElementById(id));
};
window['Render'] = function (id) {
    ReactDOM.render(Demo(), document.getElementById(id));
};
window['RenderReact'] = render;
window['RenderHW'] = function (id, cb, nameInput) {
    ReactDOM.render(React.createElement(Component_1.HW, __assign({}, { name: (nameInput ? nameInput : "world"), callback: function (b, f) { return CSCallback_1.CSCallback(cb)(b).then(f); } })), document.getElementById(id));
};
window['RenderBase'] = function (id, cb, nameInput) {
    ReactDOM.render(React.createElement(LearnRouter_1.Base, null), document.getElementById(id));
};
function FindReact(dom, traverseUp) {
    if (traverseUp === void 0) { traverseUp = 0; }
    var key = Object.keys(dom).find(function (key) { return key.startsWith("__reactInternalInstance$"); });
    var domFiber = dom[key];
    if (domFiber == null)
        return null;
    // react <16
    if (domFiber._currentElement) {
        var compFiber_1 = domFiber._currentElement._owner;
        for (var i = 0; i < traverseUp; i++) {
            compFiber_1 = compFiber_1._currentElement._owner;
        }
        return compFiber_1._instance;
    }
    // react 16+
    var GetCompFiber = function (fiber) {
        //return fiber._debugOwner; // this also works, but is __DEV__ only
        var parentFiber = fiber.return;
        while (typeof parentFiber.type == "string") {
            parentFiber = parentFiber.return;
        }
        return parentFiber;
    };
    var compFiber = GetCompFiber(domFiber);
    for (var i = 0; i < traverseUp; i++) {
        compFiber = GetCompFiber(compFiber);
    }
    return compFiber.stateNode;
}
window['Ajax'] = AjaxCall_1.Ajax;
window['CheckElement'] = function (element) {
    console.log(element);
    var myComp = FindReact(document.getElementById(element.id));
    console.log(document.getElementById(element.id));
    //var componentsArray = React.addons.TestUtils.findAllInRenderedTree(window.searchRoot, function () { return true; });
    console.log(myComp);
};
// 重写方法
var _wr = function (type) {
    var origin = history[type];
    return function () {
        var event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        return origin.apply(this, arguments);
    };
};
//重写方法
history.pushState = _wr('pushState');
history.replaceState = _wr('replaceState');
//实现监听
//window.addEventListener('replaceState', function (e) {
//  console.log('THEY DID IT AGAIN! replaceState 111111')
//})


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Names = exports.HW = void 0;
var React = __webpack_require__(1);
var Names = /** @class */ (function () {
    function Names() {
    }
    return Names;
}());
exports.Names = Names;
var HW = /** @class */ (function (_super) {
    __extends(HW, _super);
    function HW(props) {
        var _this = _super.call(this, props) || this;
        _this.calll = function () {
            _this.setState({ click: _this.state['click'] + 1 });
            _this.props.callback(Number(_this.state['click']), function (c) { return console.log(c); });
        };
        _this.state = { click: 0 };
        console.log(_this.state);
        return _this;
    }
    HW.prototype.UNSAFE_componentWillMount = function () {
        console.log('will_mount');
    };
    HW.prototype.UNSAFE_componentWillUpdate = function () {
        console.log('will_update');
    };
    HW.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                "Hello ",
                this.props.name,
                " ",
                this.state['click']),
            React.createElement("div", { onClick: this.calll }, "click")));
    };
    return HW;
}(React.PureComponent));
exports.HW = HW;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ajax = void 0;
function Ajax() {
    var promise = new Promise(function (res, reject) {
        window.DotNet.invokeMethodAsync('LearnReact', 'ReturnArrayAsync')
            .then(function (b) { return res(b); });
    });
    return promise;
}
exports.Ajax = Ajax;


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CSCallback = void 0;
var CSCallback = function (callbackRef) {
    return function (input) {
        var promise = new Promise(function (res, rej) {
            if (!!callbackRef.invokeMethodAsync) {
                var csCallback = callbackRef;
                csCallback.invokeMethodAsync("Callback", input)
                    .then(function (b) { return res(b); })
                    .catch(function (e) { return rej(e); });
                return;
            }
            if (!!callbackRef) {
                try {
                    var cb = callbackRef;
                    cb(input)
                        .then(function (b) { return res(b); })
                        .catch(function (e) { return rej(e); });
                    return;
                }
                catch (ex) {
                    rej(ex);
                    return;
                }
            }
            if (!callbackRef) {
                rej("No callbakref");
                return;
            }
        });
        return promise;
    };
};
exports.CSCallback = CSCallback;
function aa(callbacl) {
}


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
var React = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(16);
var connected_react_router_1 = __webpack_require__(36);
var reactstrap_1 = __webpack_require__(71);
var history_1 = __webpack_require__(24);
var react_redux_1 = __webpack_require__(38);
var configureStore_1 = __webpack_require__(220);
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("h1", null, "Home"));
    };
    return Home;
}(React.Component));
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (React.createElement("h1", null, "About"));
    };
    return About;
}(React.Component));
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = history_1.createBrowserHistory({ basename: baseUrl });
var store = configureStore_1.default(history);
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base(props) {
        var _this = _super.call(this, props) || this;
        console.log(history);
        var logPush = function (e) {
            console.log(e);
            var path = e['arguments']['2'].replace(window.location.origin, '');
            if (!e['arguments']['0']) {
                console.log('pathname', history.location.pathname);
                console.log('change', path);
                history.push(path);
            }
        };
        window['addEventListener']('pushState', function (e) { return logPush(e); });
        return _this;
    }
    Base.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(connected_react_router_1.ConnectedRouter, { history: history },
                React.createElement(React.Fragment, null,
                    React.createElement("div", null,
                        React.createElement("h1", null, "router"),
                        React.createElement(reactstrap_1.Container, null,
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/about" }, "About")),
                                React.createElement("li", null,
                                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/home" }, "Home")))),
                        React.createElement("div", null,
                            React.createElement("p", null, "-----------"),
                            React.createElement(reactstrap_1.Container, null,
                                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home }),
                                React.createElement(react_router_dom_1.Route, { exact: true, path: '/home', component: Home }),
                                React.createElement(react_router_dom_1.Route, { exact: true, path: '/about', component: About }),
                                React.createElement(react_router_dom_1.Route, { exact: true, path: '/LearnReact', component: Home }),
                                React.createElement(react_router_dom_1.Route, { exact: true, path: '/LearnReact/home', component: Home }),
                                React.createElement(react_router_dom_1.Route, { exact: true, path: '/LearnReact/about', component: About }))))))));
    };
    return Base;
}(React.Component));
exports.Base = Base;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(48);
//import thunk from 'redux-thunk';
var connected_react_router_1 = __webpack_require__(36);
//import { ApplicationState, reducers } from './';
//initialState ?: ApplicationState
function configureStore(history) {
    var middleware = [
        //thunk,
        connected_react_router_1.routerMiddleware(history)
    ];
    var rootReducer = redux_1.combineReducers({
        //...reducers,
        router: connected_react_router_1.connectRouter(history)
    });
    var enhancers = [];
    var windowIfDefined = typeof window === 'undefined' ? null : window; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }
    return redux_1.createStore(rootReducer, redux_1.compose.apply(void 0, __spreadArray([redux_1.applyMiddleware.apply(void 0, middleware)], enhancers)));
}
exports.default = configureStore;


/***/ })

/******/ });
//# sourceMappingURL=app.js.map
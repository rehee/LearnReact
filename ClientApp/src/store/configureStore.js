"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
//import thunk from 'redux-thunk';
var connected_react_router_1 = require("connected-react-router");
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
    return redux_1.createStore(rootReducer, redux_1.compose.apply(void 0, __spreadArrays([redux_1.applyMiddleware.apply(void 0, middleware)], enhancers)));
}
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map
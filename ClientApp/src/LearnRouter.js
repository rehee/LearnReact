"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var connected_react_router_1 = require("connected-react-router");
var reactstrap_1 = require("reactstrap");
var history_1 = require("history");
var react_redux_1 = require("react-redux");
var configureStore_1 = require("./store/configureStore");
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
//# sourceMappingURL=LearnRouter.js.map
"use strict";
exports.__esModule = true;
var React = require("react");
var hyperscript = require("hyperscript");
var Hello = function (props) {
    return hyperscript("h1", null,
        "Hello, ",
        props.place,
        "!");
};
React.DOM.render(hyperscript(Hello, { place: "World" }), document.getElementById('example'));

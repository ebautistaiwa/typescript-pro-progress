import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as hyperscript from 'hyperscript'

const Hello = (props) =>
    <h1>Hello, {props.place}!</h1>

React.DOM.render(
    <Hello place="World" />,
    document.getElementById('example')
)
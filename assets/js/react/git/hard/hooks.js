/*

What are hooks?
    Hooks is a new feature(React 16.8) that lets you use state and other React features without writing a class.

    Let's see an example of useState hook:

    import { useState } from 'react';

    function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
    }

Do Hooks replace render props and higher order components?

    - Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.

What rules need to be followed for hooks?
    You need to follow two rules in order to use hooks,

    Call Hooks only at the top level of your react functions. i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple useState and useEffect calls.
    Call Hooks from React Functions only. i.e, You shouldn’t call Hooks from regular JavaScript functions.

What are the sources used for introducing hooks?
    Hooks got the ideas from several different sources. Below are some of them,

    Previous experiments with functional APIs in the react-future repository
    Community experiments with render prop APIs such as Reactions Component
    State variables and state cells in DisplayScript.
    Subscriptions in Rx.
    Reducer components in ReasonReact.

*/
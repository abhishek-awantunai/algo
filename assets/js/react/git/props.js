/*

What are props in React?
    - Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

    Pass custom data to your component.
    Trigger state changes.
    Use via this.props.reactProp inside component's render() method.
    For example, let us create an element with reactProp property:

    <Element reactProp={'1'} />
    This reactProp (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

    props.reactProp

Why you can't update props in React?
    - The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props.

When component props defaults to true?
    If you pass no value for a prop, it defaults to true. This behavior is available so that it matches the behavior of HTML.

    For example, below expressions are equivalent,

    <MyInput autocomplete />

    <MyInput autocomplete={true} />
    Note: It is not recommended to use this approach because it can be confused with the ES6 object shorthand (example, {name} which is short for {name: name})

How do you say that props are readonly?
    When you declare a component as a function or a class, it must never modify its own props.

    Let us take a below capital function,

    function capital(amount, interest) {
    return amount + interest;
    }
The above function is called “pure” because it does not attempt to change their inputs, and always return the same result for the same inputs. Hence, React has a single rule saying "All React components must act like pure functions with respect to their props."

*/
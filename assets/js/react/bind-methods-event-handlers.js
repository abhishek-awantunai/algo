/*

How to bind methods or event handlers in JSX callbacks?

There are 3 possible ways to achieve this:

Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

    class Foo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
    }
    Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.

    handleClick = () => {
    console.log('this is:', this)
    }
    <button onClick={this.handleClick}>
    {'Click me'}
    </button>
    Arrow functions in callbacks: You can use arrow functions directly in the callbacks.

    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <button onClick={() => this.handleClick()}>Click Me</button>;
    }
    Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.

*/
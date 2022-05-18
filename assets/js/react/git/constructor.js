/*

What is the main purpose of constructor?
    The constructor is mainly used for two purposes,
        To initialize local state by assigning object to this.state
        For binding event handler methods to the instance For example, the below code covers both the above cases,
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

What is the purpose of default value in context?
    The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

    Below code snippet provides default theme value as Luna.

    const MyContext = React.createContext(defaultValue);

Is it mandatory to define constructor for React component?
    No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

How do you use contextType?
    ContextType is used to consume the context object. The contextType property can be used in two ways,

    contextType as property of class: The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

    Lets assign contextType property on MyClass as below,

    class MyClass extends React.Component {
        componentDidMount() {
            let value = this.context;
            perform a side-effect at mount using the value of MyContext
        }
        componentDidUpdate() {
        let value = this.context;
            ...
        }
        componentWillUnmount() {
        let value = this.context;
            ...
        }
        render() {
        let value = this.context;
            render something based on the value of MyContext
        }
        }
        MyClass.contextType = MyContext;
        Static field You can use a static class field to initialize your contextType using public class field syntax.

        class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
        let value = this.context;
            render something based on the value
        }
    }

*/
/*

What is state in React?

    State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

    Let's create a user component with message state,

    class User extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
            message: 'Welcome to React world'
            }
        }

        render() {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
                )
            }
    }

    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

Why should we not update the state directly?
    If you try to update the state directly then it won't re-render the component.

    //Wrong
    this.state.message = 'Hello world'
    Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

    //Correct
    this.setState({ message: 'Hello World' })
    Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.

What is the purpose of callback function as an argument of setState()?
    The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

    Note: It is recommended to use lifecycle method rather than this callback function.

    setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))

*/
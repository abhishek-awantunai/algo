/*

What is React Router?
    - React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

How React Router is different from history library?
    - React Router is a wrapper around the history library which handles interaction with the browser's window.history with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node.

What is the purpose of push() and replace() methods of history?
    A history instance has two methods for navigation purpose.
    push()
    replace()

    If you think of the history as an array of visited locations, push() will add a new location to the array and replace() will replace the current location in the array with the new one.

How do you programmatically navigate using React Router v4?
    There are three different ways to achieve programmatic routing/navigation within components.

    Using the withRouter() higher-order function:

        The withRouter() higher-order function will inject the history object as a prop of the component. This object provides push() and replace() methods to avoid the usage of context.

        import { withRouter } from 'react-router-dom' // this also works with 'react-router-native'

        const Button = withRouter(({ history }) => (
            <button
                type='button'
                onClick={() => { history.push('/new-location') }}
            >
                {'Click Me!'}
            </button>
        ))
    
    Using <Route> component and render props pattern:

        The <Route> component passes the same props as withRouter(), so you will be able to access the history methods through the history prop.

        import { Route } from 'react-router-dom'

        const Button = () => (
            <Route render={({ history }) => (
                <button
                type='button'
                onClick={() => { history.push('/new-location') }}
                >
                {'Click Me!'}
                </button>
            )} />
        )
    
    Using context:

        This option is not recommended and treated as unstable API.

        const Button = (props, context) => (
        <button
            type='button'
            onClick={() => {
            context.history.push('/new-location')
            }}
        >
            {'Click Me!'}
        </button>
        )

        Button.contextTypes = {
            history: React.PropTypes.shape({
                push: React.PropTypes.func.isRequired
            })
        }



*/
/*

What is context?
    Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

    const {Provider, Consumer} = React.createContext(defaultValue)

Give an example on How to use context?
    Context is designed to share data that can be considered global for a tree of React components.

    For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

    //Lets create a context with a default theme value "luna"
    const ThemeContext = React.createContext('luna');
    // Create App component where it uses provider to pass theme value in the tree
    class App extends React.Component {
    render() {
        return (
        <ThemeContext.Provider value="nova">
            <Toolbar />
        </ThemeContext.Provider>
        );
    }
    }
    // A middle component where you don't need to pass theme prop anymore
    function Toolbar(props) {
    return (
        <div>
        <ThemedButton />
        </div>
    );
    }
    // Lets read theme value in the button component to use
    class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
    }

*/
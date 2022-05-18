/*

What is the difference between constructor and getInitialState?
    You should initialize state in the constructor when using ES6 classes, and getInitialState() method when using React.createClass().

    Using ES6 classes:

    class MyComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = { ... }
        }
    }
    
    Using React.createClass():

        const MyComponent = React.createClass({
            getInitialState() {
                return { ... }
            }
        })
    Note: React.createClass() is deprecated and removed in React v16. Use plain JavaScript classes instead.

*/
/*

When is it important to pass props to super(), and why?

    The only one reason when one needs to pass props to super() is when you want to access this.props in constructor:

    class MyComponent extends React.Component {    
        constructor(props) {
            super(props)

            console.log(this.props)
            // -> { icon: 'home', … }
        }
    }
    Not passing:

    class MyComponent extends React.Component {    
        constructor(props) {
            super()

            console.log(this.props)
            // -> undefined

            // Props parameter is still available
            console.log(props)
            // -> { icon: 'home', … }
        }

        render() {
            // No difference outside constructor
            console.log(this.props)
            // -> { icon: 'home', … }
        }
    }
    Note that passing or not passing props to super has no effect on later uses of this.props outside constructor.

What is the purpose of using super constructor with props argument?

    A child class constructor cannot make use of this reference until the super() method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to super() call is to access this.props in your child constructors.

    Passing props:

    class MyComponent extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props) // prints { name: 'John', age: 42 }
    }
    }
    Not passing props:

    class MyComponent extends React.Component {
    constructor(props) {
        super()

        console.log(this.props) // prints undefined

        // but props parameter is still available
        console.log(props) // prints { name: 'John', age: 42 }
    }

    render() {
        // no difference outside constructor
        console.log(this.props) // prints { name: 'John', age: 42 }
    }
    }
    The above code snippets reveals that this.props is different only within the constructor. It would be the same outside the constructor.


*/
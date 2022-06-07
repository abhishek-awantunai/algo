/*

What is the use of refs?
    - The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

What are forward refs?
    Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

    const ButtonElement = React.forwardRef((props, ref) => (
        <button ref={ref} className="CustomButton">
            {props.children}
        </button>
    ));

    // Create ref to the DOM button:
    const ref = React.createRef();
    <ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>

How to create refs?
    There are two approaches

    This is a recently added approach. Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.

    class MyComponent extends React.Component {
        constructor(props) {
            super(props)
            this.myRef = React.createRef()
        }
        render() {
            return <div ref={this.myRef} />
        }
    }
    
    You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,

    class SearchBar extends Component {
        constructor(props) {
            super(props);
            this.txtSearch = null;
            this.state = { term: '' };
            this.setInputSearchRef = e => {
                this.txtSearch = e;
            }
        }
        onInputChange(event) {
            this.setState({ term: this.txtSearch.value });
        }
        render() {
            return (
                <input
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                    ref={this.setInputSearchRef} />
            );
        }
    }
    You can also use refs in function components using closures. Note: You can also use inline ref callbacks even though it is not a recommended approach.

*/
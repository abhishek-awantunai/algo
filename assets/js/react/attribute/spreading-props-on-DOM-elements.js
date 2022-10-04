/*

Why we need to be careful when spreading props on DOM elements?
    - When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with ...rest operator, so it will add only required props.

    For example,

    const ComponentA = () =>
    <ComponentB isDisplay={true} className={'componentStyle'} />

    const ComponentB = ({ isDisplay, ...domProps }) =>
    <div {...domProps}>{'ComponentB'}</div>

*/
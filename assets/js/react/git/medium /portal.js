/*

What are portals in React?
    - Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

    ReactDOM.createPortal(child, container)
    The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.


What is the typical use case of portals?
    React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context (e.g. z-index, position, opacity) and you need to visually “break out” of its container.

    For example, dialogs, global message notifications, hovercards, and tooltips.

*/
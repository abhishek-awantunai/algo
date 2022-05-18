/*

Can you describe about componentDidCatch lifecycle method signature?
    The componentDidCatch lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,

    error: - The error object which was thrown
    info: - An object with a componentStack key contains the information about which component threw the error.
    The method structure would be as follows

    componentDidCatch(error, info)

*/
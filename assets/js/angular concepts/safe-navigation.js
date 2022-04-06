/**

What is safe navigation operator?

The safe navigation operator(?)(or known as Elvis Operator) is used to guard against null and undefined values in property paths when you are not aware whether a path exists or not. i.e. It returns value of the object path if it exists, else it returns the null value.

For example, you can access nested properties of a user profile easily without null reference errors as below,

<p>The user firstName is: {{user?.fullName.firstName}}</p>
Using this safe navigation operator, Angular framework stops evaluating the expression when it hits the first null value and renders the view without any errors.



*/
/*

What is Redux?
    Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.

What are the core principles of Redux?
    Redux follows three fundamental principles:

    - Single source of truth: The state of your whole application is stored in an object tree within a single store. The - single state tree makes it easier to keep track of changes over time and debug or inspect the application.
    - State is read-only: The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
    - Changes are made with pure functions: To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

What are the downsides of Redux compared to Flux?
    Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:

    - You will need to learn to avoid mutations: Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like redux-immutable-state-invariant, Immutable.js, or instructing your team to write non-mutating code.
    - You're going to have to carefully pick your packages: While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.
    - There is no nice Flow integration yet: Flux currently lets you do very impressive static type checks which Redux doesn't support yet.

*/
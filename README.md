This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [Redux Form](https://redux-form.com) Showcase

### Why ?

Forms are hard to handle in any framework & extra complicated in React, because of its unidirectional data flow.

### What ?

Redux Form is making all the implementation easier by handling everything, so its main strength is wiring up all the different event handlers for watching changes to the inpus. What is Redux Form composed of:

- a single reducer (formReducer) - given to Redux to manage the state of all the forms in the app
- higher order component - function that decorates the form component and injects useful props, callbacks & form state
- Field component - manages the state for each individual field in the app / form, gives values + callbacks in order to mutate its state
- other components & Redux selectors - help manage a lot of things such as arrays etc

### When ?

Redux & Redux Form work very well together, but Redux Form should be used for complex forms (such as wizzard forms), otherwise it may be an overkill for just a simple form. :)

## If you are a big form & Material-UI fan check out these

- [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui) - A set of wrapper components to facilitate using Material UI with Redux Form.
- [formik-material-ui](https://github.com/stackworx/formik-material-ui) - Bindings for using Material-UI with formik.
- [final-form-material-ui](https://github.com/Deadly0/final-form-material-ui) - A set of wrapper components to facilitate using Material UI with Final Form.
- [uniforms-material](https://github.com/vazco/uniforms/tree/master/packages/uniforms-material) - Material-UI wrapper components for Uniforms, a set of React libraries for building forms.

## Happy Coding :D

# Function composition

Function composition is a technique where you can organize the application of functions in a more readable way.

Instead of writting this

```js
f(g(1))
```

Which could be hard to read depending of the arguments and the name of the functions; into something like that:

```js
const h = pipe(f, g)
```

Pipeline is a way of composing functions, it is a way of thinking in the form of the *data flow*. Arguments should from from left to right or from right to left? You can use the version that reads better.

## pipe

It is a function that accepts a list of other functions and compose them, returning a new function that accepts the argument and apply it to the first function, the more in the left side. Then grab the result and apply into the second function and so on.

This such type of composition is called *composition from left-to-right*.

To run the tests:

```
$ npm run test -- pipe.spec
```

## compose

## pipeWith


## composeWith
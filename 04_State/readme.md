Statein React 
The sate is a build-in React Object that is used to contain data or information about the component. A componeet state can change over time; whenever it changes, the component re-renders.


Hooks:
Hooks were a new addition in React 16.8
They let you use state and other React feature without writing a class

useState()
useState is a React Hook that lets you add a state variable to your component.


Closure:
A clouser is a feature in JavaScript where an inner function hs access to the outer (enclosing) function's variable,
function outer() { 
    let a= 10;
    function inner() {
        let b =20
        console.log(a+b)
    }
    return inner;
    
}
let inner = outer()
console.log(inner)



CallBack in Updater Function
 HOw to change state when it depends on the current values
 
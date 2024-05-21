/* import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        alert('You clicked me!');
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>
            clicked {count} times
        </button>
    )
}
export default function MyApp() {
    return (
        <div>
            <h1>welcome to my app</h1>
            <MyButton />
            <MyButton />
        </div>
    )
}; */
/* import { useState } from "react";


export default function MyApp() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>welcome to my app</h1>
            <MyButton count={ count } onClick={ handleClick } />
            <MyButton count={ count } onClick={ handleClick } />
        </div>
    )
};

function MyButton( {count, onClick } ) {
    return (
        <button onClick={ onClick } >
            clicked { count } times
        </button>
    )
} */
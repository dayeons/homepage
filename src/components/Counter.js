import { useReducer } from "react";

function reducer(state, action) {
    if( action.type === 'incremented_age' ) {
        return {
            age: state.age + 1
        }
    };
    throw Error('unKnown action.')

}

/* function Counter() {
    const [ state, dispatch ] = useReducer( reducer, { age: 42 });
} */

export default function Counter() {
    const [ state, dispatch ] = useReducer(reducer, { age: 42 });

    return (
        <div>
            <h2> useReducer </h2>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                increment Age
            </button>
            <p>Hello! You are { state.age } </p>
        </div>
    )
}
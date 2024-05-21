// Writing the reducer function 
import { useReducer } from "react";

function reducer (state, action) {
    swtich (action.type) {
        case 'incremented_age' : {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name' : {
            return {
                name: action.nextName,
                age: state.age
            };
        }
        throw Error('unknown action: ' + action.type);
    }
}
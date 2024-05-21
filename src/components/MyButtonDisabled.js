import React from "react"

/* function MyButton( { title }: { title: string } ) {
    return (
        <button>{title}</button>
    )
}
export default function MyApp() {
    return (
        <div>
            <h1>welcome to my app</h1>
            <MyButton title="I`m a button" />
            
        </div>
    )
}  */

interface MyButtonProps {
    title: string;
    disabled: Boolean;
}

function MyButton2( { title, disabled }: MyButtonProps ) {
    return (
        <button disabled={disabled}> {title} </button>
    )
}

export default function MyApp() {
    return (
        <>
            <h1>welcome to my app</h1>
            <MyButton2 title="I`am a disabled button" disabled={true} />
        </>
    )
}


// const [ enabled, setEnabled ] = useState(false);
// const [ enabled, setEnabled] = useState<boolean>(false);

/* type Status = "idle" | "loading" | "success" | "error";
const [ status, setStatus ] = useState<Status>("idle"); */

/* type RequestState =
    | {status: 'idle' }
    | {status: 'loading' }
    | {status: 'success', data: any }
    | {status: 'error', error: Error };

const [ requestState, setRequestState ] = useState<RequestState>({ status: 'idle' }); */
import Counter from '../components/Counter'
import MyButton from '../components/MyButton'
import MyButtonDisabled from '../components/MyButtonDisabled'

export default function Home() {
    return (
        <>
            <MyButton />
            <MyButtonDisabled />
            <Counter />
        </>
    )
}
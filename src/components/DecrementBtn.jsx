import MyContext from '../context/MyContext'
import { useContext } from 'react'

function DecrementBtn() {

    const { decrement } = useContext(MyContext)

    return <button onClick={decrement}>DECREMENT</button>
}
export default DecrementBtn;

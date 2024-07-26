import MyContext from '../context/MyContext'
import { useContext } from 'react'

function IncrementBtn() {

    const { increment } = useContext(MyContext)

    return <button onClick={increment}>INCREMENT</button>
}
export default IncrementBtn;

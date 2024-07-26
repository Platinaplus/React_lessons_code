import MyContext from '../context/MyContext'
import { useContext } from 'react'

function Counter(){

    const {count} = useContext(MyContext)

    return <h1>{count}</h1>
}
export default Counter;


import DataContext from '../context/DataContext'
import { useContext } from 'react'

function Component() {

    const data = useContext(DataContext)

    return <div style={{margin: "40px", display: "flex", flexDirection: "column", gap: "16px", textAlign: "left", border: "1px solid #ccc", padding: "50px"}}>
        {data ? data.map(post =>
            <div key={post.id}>{post.title} <div>_______________</div> </div>) : 'Loading...'}
    </div>
}
export default Component;

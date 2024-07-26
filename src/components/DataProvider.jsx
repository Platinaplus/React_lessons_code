import { useEffect, useState } from 'react'

import DataContext from '../context/DataContext';
import axios from 'axios';

function DataProvider({children}) {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(r => setData(r.data.splice(20)))
            .catch(e => console.log(e))
    }, [])

    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;

import React,{useState,useEffect} from 'react'
import LogItems from './LogItems'
export const Logs = () => {
    const[logs,setLogs] =useState([])
    const [loading,setLoading] =useState(false)

    useEffect(()=> {
        getLogs()
        //eslint-disable-next-line
    },[])

    const getLogs = async() => {
        setLoading(true);
        const res= await fetch('/logs');
        const data =  await res.json();

        setLogs(data);
        setLoading(false)
    }

    if(loading) {
        return (<h4>Loading ...</h4>)}
    return (
        <ul className="collection">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
         </li> 
          {!loading && logs.length === 0 ? (<p className="center"> NO logs to show </p>):(
              logs.map(log =><LogItems log={log} key= {log.id}/>)
          )}
        </ul>
    )
}

export default Logs
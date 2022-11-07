import { useEffect, useState } from "react"

export const SearchPanel=()=>{
    const [param,setParam]=useState({
        name:'',
        personId:''
    })
    const [users,setUsers]=useState([])
    const [list,setList]=useState([])
    useEffect(()=>{
        fetch('').then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param])
    return <form action="">
        <input type="text" value={param.name} onChange={e=>setParam({
            ...param,
            name:e.target.value
        })} />
        <select value={param.personId} onChange={e=>setParam({
            ...param,
            personId:e.target.value
        })}>
            <option value={''}>Responser</option>
            {
                users.map(user=><option value={user.id}>{user.name}</option>)
            }
        </select>
    </form>
}
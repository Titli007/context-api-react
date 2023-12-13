import React, { useContext } from 'react'
import { UserContext } from './context'

const NameEdit = () => {
    const {data, setData} = useContext(UserContext)

  return (
    <>
        <div>{data.name}</div>
        <button onClick={()=> setData({type:"set_name", payload:"Ananya"})}></button>
    </>
  )
}

export default NameEdit
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/slices/usersSice';

export default function Userdelete() {
  const dispatch=useDispatch();
  const delUser=()=>{
    dispatch(deleteUser())
  }
  return (
      <div className="flex justify-end">
        <button className="p-1 my-2 rounded-md  bg-red-300" 
        onClick={()=>delUser()}>
          Clear all user
        </button>
      </div>
  )
}

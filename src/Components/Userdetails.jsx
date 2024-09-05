import React, { useState } from "react";
import Userdelete from "../Components/Userdelete";
import { fakeUserData } from "../Apis/Chance";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/usersSice";
import UserList from "./userList";
export default function Userdetails() {
  const dispatch = useDispatch();

  const han = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <div className="flex justify-around my-5">
        <p>List of user Details</p>
        <button
          className=" rounded-md bg-green-300 p-1"
          onClick={() => han(fakeUserData())}
        >
          Add Nedw User
        </button>
      </div>
      <div className="text-center list-none">
        <ul>
          <UserList />
        </ul>
      </div>
      <hr />
      <Userdelete />
    </div>
  );
}

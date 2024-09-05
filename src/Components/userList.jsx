import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/usersSice";

import React from "react";

export default function UserList() {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const delUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <div>
      {data.map((u, id) => {
        return (
          <div className="flex justify-between w-[80%] mx-auto" key={id}>
            {" "}
            <li>{u}</li>
            <button
              className="text-2xl text-red-500"
              onClick={() => delUser(id)}
            >
              <MdDeleteForever />
            </button>
          </div>
        );
      })}
    </div>
  );
}

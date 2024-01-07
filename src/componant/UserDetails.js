import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import "./Navbar.css";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/Slices/UsersSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button className="addbtn" onClick={() => addNewUser(fakeUserData())}>
          Add New Users
        </button>
      </div>
      <ul className="user">
        <DisplayUsers />
      </ul>
      <hr />
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;

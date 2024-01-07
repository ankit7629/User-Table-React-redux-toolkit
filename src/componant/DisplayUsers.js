import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeUser } from "../store/Slices/UsersSlice";
import styled from "styled-components";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {data.map((user, id) => {
        return (
          <UL key={id}>
            <p>{user}</p>
            <Button className="delete" onClick={() => deleteUser(id)}>
              {/* <FaRegTrashAlt className="delete-icon" /> */}
              <Icon />
            </Button>
          </UL>
        );
      })}
    </div>
  );
};

export default DisplayUsers;

const UL = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
`;

const Icon = styled(FaRegTrashAlt)`
  background-color: red;
  font-size: 20px;
`;

const Button = styled.button`
  outline: none;
  border: none;
`;

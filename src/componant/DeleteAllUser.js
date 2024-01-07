import React from "react";
// import "./Navbar.css";
import styled from "styled-components";
import { deleteUsers } from "../store/Slices/UsersSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUser = () => {
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <Button className="btn" onClick={clearUser}>
        clear user
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10px;
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: blue;
`;

export { DeleteAllUser };

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Logo, FormRow } from "../components";
import { loginUser, registerUser } from "../features/User/userSlice"; // actions

export const Register = () => {
  const [isMember, setIsMember] = useState(false);
  const initialState = {
    name: "",
    password: "",
    email: "",
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    if (userData) {
      console.log(userData);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [userData]);
  const dispatch = useDispatch();
  const toggleMember = () => {
    setIsMember(() => !isMember);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("entered credentials");

    // console.log(nameRef.current.value); //
    if (isMember) {
      console.log("login invoked", isMember);
      dispatch(
        loginUser({
          email: values.email,
          password: values.password,
        })
      );
    } else {
      console.log("register invoked", isMember);
      dispatch(
        registerUser({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    }
  };
  return (
    <Wrapper>
      <div className="form-holder">
        <div className="strip"></div>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <Logo></Logo>
          <h1>{isMember ? "Login" : "Register"}</h1>
          {!isMember && (
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            ></FormRow>
          )}

          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          ></FormRow>

          <button type="submit" className="hero-btn">
            submit
          </button>
          <button
            type="button"
            onClick={() =>
              dispatch(
                loginUser({
                  email: "testUser@test.com",
                  password: "secret",
                })
              )
            }
            className="hero-btn"
          >
            Demo App
          </button>
        </form>
        <p>
          {isMember ? (
            <>
              not a member ?<Link onClick={toggleMember}>Signup</Link>
            </>
          ) : (
            <>
              already a member ?<Link onClick={toggleMember}>login</Link>
            </>
          )}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-holder {
    border: 1px solid grey;
    border-radius: 5px;
    width: 300px;
    p {
      text-align: center;
    }
    .strip {
      height: 0.3rem;
      background-color: blue;
      border-radius: px 2px;
    }
  }
  form {
    padding: 2rem 1.5rem;
    h1 {
      text-align: center;
    }
    .form-row {
      margin-bottom: 0.9rem;
    }
    input {
      display: block;
      width: 98%;
    }
    label {
      display: block;
      padding-bottom: 0.3rem;
    }
    button {
      margin-top: 10px;
      padding: 3px;
      width: 100%;
    }
  }
`;
export default Register;

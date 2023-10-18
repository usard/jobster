import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Logo, FormRow } from "../components";
import { loginUser, registerUser } from "../features/User/userSlice"; // actions

export const Register = () => {
  const [isMember, setIsMember] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
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
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("entered credentials");
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    // console.log(nameRef.current.value); //
    if (isMember) {
      console.log("login invoked", isMember);
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    } else {
      console.log("register invoked", isMember);
      dispatch(
        registerUser({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
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
            <FormRow type="text" name="name" iref={nameRef}></FormRow>
          )}

          <FormRow type="email" name="email" iref={emailRef}></FormRow>
          <FormRow type="password" name="password" iref={passwordRef}></FormRow>

          <button type="submit" className="hero-btn">
            submit
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

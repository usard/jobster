import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import styled from "styled-components";
const Register = () => {
  const [credentials, setCredentials] = useState();
  const [isMember, setIsMember] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const toggleMember = () => {
    setIsMember(() => !isMember);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "submitted values :",
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  };
  return (
    <Wrapper>
      <div className="form-holder">
        <div className="strip"></div>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <Logo></Logo>
          <h1>{isMember ? "Login" : "Register"}</h1>
          {!isMember && (
            <FormRow type="text" name="name" ref={nameRef}></FormRow>
          )}

          <FormRow type="email" name="email" ref={emailRef}></FormRow>
          <FormRow type="password" name="password" ref={passwordRef}></FormRow>

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

import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormRow } from "../../components";
import styled from "styled-components";
import { updateUser } from "../../features/User/userSlice";

const Profile = () => {
  const { isLoading, userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    location: userData?.location || "",
    lastName: userData?.lastName || "",
  });
  const handleChange = (name, event) => {
    setUpdateData({ ...updateData, [name]: event.target.value });
  };
  const data = [
    { id: 1, type: "text", label: "name", value: updateData.name },
    { id: 2, type: "text", label: "lastName", value: updateData.lastName },
    { id: 3, type: "text", label: "location", value: updateData.location },
    { id: 4, type: "text", label: "email", value: updateData.email },
  ];
  return (
    <Wrapper className="profile-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            updateUser(updateData)
            // {
            // name: nameRef.current.value,
            // email: emailRef.current.value,
            // location: locationRef.current.value,
            // lastName: lastNameRef.current.value,
            // }
          );
        }}
      >
        <header> Profile </header>
        <div className="form-rows-container">
          {data.map((item) => {
            const { id, type, label, value } = item;
            return (
              <FormRow
                key={id}
                type={type}
                name={label}
                value={value}
                handleChange={handleChange}
              ></FormRow>
            );
          })}
          <button disabled={isLoading} className="act-btn" type="submit">
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  form {
    .form-rows-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 2rem;
      row-gap: 1rem;
    }
    .form-row {
      padding: 1rem 0 rem;
      min-width: 30%;
      // width: 30%; -- dont use this form input will not expand and contract
    }
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
    }
    .form-input {
      width: 100%;
    }
    .act-btn {
      align-self: flex-end;
      margin-top: 1rem;
      width: 30%;
      // padding: 0 rem 1rem;
    }
  }
  @media (max-width: 799px) {
    .form-row {
      width: 100%;
    }
  }
`;

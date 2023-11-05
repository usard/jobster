import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/Search/searchJobSlice";
import styled from "styled-components";

const PageBtnContainer = () => {
  const dispatch = useDispatch();
  const { numOfPages: pages, page } = useSelector((store) => store.search);
  const arr = Array.from({ length: pages }, (_, index) => {
    return index + 1;
  });
  console.log(" arr :", arr);
  const prevPage = (page) => {
    if (page > 1) {
      dispatch(changePage({ name: "page", value: page - 1 }));
    }
  };
  const nextPage = (page) => {
    if (page < pages) {
      dispatch(changePage({ name: "page", value: page + 1 }));
    }
  };
  return (
    <Wrapper>
      <button type="button" onClick={() => prevPage(page)}>
        {`<< `}Prev
      </button>
      <span>
        {arr.map((page) => {
          console.log(page);
          return (
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "white", color: "black" }}
              onClick={() =>
                dispatch(changePage({ name: "page", value: page }))
              }
            >
              {page}
            </button>
          );
        })}
      </span>
      <button type="button" onClick={() => nextPage(page)}>
        Next {` >>`}
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;

const Wrapper = styled.div`
  .active-btn {
    background: blue;
  }
`;

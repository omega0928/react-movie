import { useState } from "react";
import styled from "styled-components";

const MovieWrapper = styled.div`
  margin-bottom: -9px;
  height: 52px;
  :hover {
    background-color: ${(props) => props.color && "#cfd9e8"};
  }
`;
const MovieImg = styled.img`
  width: 32px;
  height: 45px;
  float: left;
  margin-right: 13px;
  margin-top: 3px;
  margin-left: 5px;
`;
const MovieTitle = styled.p`
  line-height: 1;
  margin-bottom: -5px;
  font-size: 16px;
  font-weight: 400;
  color: gray;
  cursor: pointer;
`;
const MovieYear = styled.p`
  font-size: 12px;
  color: gray;
`;
type IProps = {
  title?: string;
  year?: string;
  poster?: string;
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function Movie({ title, year, poster, handleClick }: IProps) {

  return (
    <MovieWrapper color="#cfd9e8">
      <MovieImg src={poster} />
      <MovieTitle onClick={handleClick}>{title}</MovieTitle>
      <MovieYear>{year}</MovieYear>
    </MovieWrapper>
  );
}

export default Movie;

import React, { useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import { MoviesInfoArr } from "../App";

const RootMovieListWrapper = styled.div`
  box-shadow: 0px 2px 9px -2px gray;
  width: 248px;
  height: 375px;
  border-radius: 10px;
  background-color: white;
  display: inline-block;
`;
const MovieListWrapper = styled.div`
  padding: 12px;
`;
const SearchText = styled.p`
  color: gray;
  font-weight: 650;
  margin: auto;
`;
const MovieListInput = styled.input`
  padding-left: 8px;
  width: 206px;
  height: 25px;
  margin-top: 8px;
  border: 0.8px solid;
  border-radius: 3px;
  border-color: #e2dcdc;
  color: #807b7b;
  outline-style: none;
`;
const List = styled.div`
  height: 304px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5f5f5f;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    margin-top: 15px;
  }
`;

type IProps = {
  movies?: MoviesInfoArr[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function MovieList({
  movies,
  handleInputChange,
  handleScroll,
  handleClick,
}: IProps) {
  return (
    <RootMovieListWrapper>
      <MovieListWrapper>
        <SearchText>Search</SearchText>
        <MovieListInput onChange={handleInputChange} />
        <List onScroll={handleScroll}>
          {movies?.map(({ poster, title, year, imdbID }) => (
            <Movie
              key={imdbID}
              handleClick={handleClick}
              title={title}
              year={year}
              poster={poster}
            />
          ))}
        </List>
      </MovieListWrapper>
    </RootMovieListWrapper>
  );
}

export default MovieList;

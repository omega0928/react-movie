import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieList from "./components/MovieList";
import SelectdMovie from "./components/SelectedMovie";
import api from "./api/movieApis";

const RootWrapper = styled.div`
  background-color: #f0f2f3;
  height: 720px;
  position: relative;
`;

const MovieWrapper = styled.div`
  position: absolute;
  top: 17%;
  left: 25%;
`;
const Title = styled.h1`
  color: gray;
`;

export type MoviesInfoArr = { poster?: string; title?: string; year?: string; imdbID?: string };
export type SelectMovieInfo = {
  title?: string;
  poster?: string;
  year?: string;
  plot?: string;
  director?: string;
  writer?: string;
  actors?: string;
  imdbRating?: string;
  genreRuntime?: string;
};

function App() {
  const [page, setPage] = useState<number>(1);
  const [selectMovie, setSelectMovie] = useState<string>("");
  const [selectData, setSelectData] = useState<SelectMovieInfo[]>([]);
  const [movies, setMovies] = useState<MoviesInfoArr[]>([]);
  const [inputData, setInputData] = useState<string>("");

  useEffect(() => {
    selectedMovie();
  }, [selectMovie]);

  useEffect(() => {
    movieList();
  }, [inputData, page]);

  const movieList = async () => {
    const data = await api.fetchMovieList(page, inputData);
    const movieData: [{ Poster?: string; Title?: string; Year?: string; imdbID?: string; }] =
      data?.Search || [];

    const MoviesInfoArr: MoviesInfoArr[] = movieData.map((movie) => ({
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID
    }));
    if (MoviesInfoArr) {
      setMovies((prev) => [...prev, ...MoviesInfoArr]);
    }
  };

  const selectedMovie = async () => {
    const data = await api.fetchMovieSelect(selectMovie);
    const selectData: [
      {
        Title?: string;
        Poster?: string;
        Year?: string;
        Plot?: string;
        Director?: string;
        Writer?: string;
        Actors?: string;
        ImdbRating?: string;
        GenreRuntime?: string;
      }
    ] = data || [];

    let parsingData: any = Object.fromEntries(
      Object.entries(selectData).map(([key, value]) => [
        key.toLowerCase(),
        value,
      ])
    );
    const SelectMovieInfo: SelectMovieInfo[] = parsingData;
    setSelectData(SelectMovieInfo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovies([]);
    setInputData(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const textContent = e.currentTarget.textContent;
    if (textContent) {
      setSelectMovie(textContent);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - Math.floor(scrollTop) === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <RootWrapper>
      <MovieWrapper>
        <Title>OMDB Frontend</Title>
        <MovieList
          movies={movies}
          handleClick={handleClick}
          handleInputChange={handleInputChange}
          handleScroll={handleScroll}
        />
        {selectMovie && <SelectdMovie selectData={selectData} />}
      </MovieWrapper>
    </RootWrapper>
  );
}

export default App;

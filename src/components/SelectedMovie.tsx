import styled from "styled-components";

const SelectdMovieRootWrapper = styled.div`
  overflow: auto;
  clear: both;
  box-shadow: 0px 2px 9px -2px gray;
  width: 550px;
  height: 375px;
  border-radius: 10px;
  background-color: white;
  display: inline-block;
  margin-left: 20px;
  position: absolute;
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
  ::after {
    clear: both;
  }
`;
const PosterWrapper = styled.div`
  float: left;
  width: 222px;
  height: 285px;
`;
const PosterImg = styled.img`
  width: 182px;
  height: 250px;
  padding: 20px;
`;
const GenreText = styled.p`
  margin-top: -9px;
  margin-left: 23px;
  color: gray;
  font-size: 11px;
`;
const RuntimeText = styled.p`
  margin-top: -3px;
  margin-left: 23px;
  color: gray;
  font-size: 11px;
`;
const Content = styled.div`
  float: right;
  width: 310px;
  height: 370px;
  margin-right: 10px;
`;
const Title = styled.h1`
  color: gray;
  width: 230px;
  margin-top: 14px;
  margin-bottom: -18px;
`;
const YearText = styled.p`
  color: gray;
`;
const PlotText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: gray;
  margin-top: 35px;
`;
const DirectorWrapper = styled.p`
  font-size: 11px;
  color: gray;
`;
const DirectorText = styled.span`
  font-weight: bold;
`;
const WriterWrapper = styled.p`
  font-size: 11px;
  color: gray;
`;
const WriterText = styled.span`
  font-weight: bold;
`;
const ActorsWrapper = styled.p`
  font-size: 11px;
  color: gray;
`;
const ActorsText = styled.span`
  font-weight: bold;
`;
const Rating = styled.div`
  width: 45px;
  height: 45px;
  background-color: #63c974;
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 25px;
  display: flex;
`;
const RatingText = styled.span`
  font-size: 19px;
  color: white;
  margin: auto;
`;

type Iprops = {
  selectData?: any;
};

function SelectedMovie({ selectData }: Iprops) {
  return (
    <SelectdMovieRootWrapper>
      <PosterWrapper>
        <PosterImg src={selectData?.poster} />
        <GenreText>{selectData?.genre}</GenreText>
        <RuntimeText>{selectData?.runtime}</RuntimeText>
      </PosterWrapper>
      <Content>
        <Title>{selectData?.title}</Title>
        <Rating>
          <RatingText>{selectData?.imdbrating}</RatingText>
        </Rating>
        <YearText>{selectData?.year}</YearText>
        <PlotText>{selectData?.plot}</PlotText>
        <DirectorWrapper>
          <DirectorText>DIRECTOR:</DirectorText> {selectData?.director}
        </DirectorWrapper>
        <WriterWrapper>
          <WriterText>WRITER:</WriterText> {selectData?.writer}
        </WriterWrapper>
        <ActorsWrapper>
          <ActorsText>ACTORS:</ActorsText> {selectData?.actors}
        </ActorsWrapper>
      </Content>
    </SelectdMovieRootWrapper>
  );
}

export default SelectedMovie;

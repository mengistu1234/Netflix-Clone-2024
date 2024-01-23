import React from 'react'
import Row from '../Row/Row';
import Request from '../../../utils/Request';


const RowList = () => {
  return (
    <>
      <Row title={"NetflixOrginals"} fetchUrl={Request.fetchNetflixOrginals} />
      <Row title={"Trending"} fetchUrl={Request.fetchTrending} />
      <Row title={"RatedMovies"} fetchUrl={Request.fetchTopRatedMovies} />
      <Row title={"ActionMovies"} fetchUrl={Request.fetchActionMovies} />
      <Row title={"ComedyMovies"} fetchUrl={Request.fetchComedyMovies} />
      <Row title={"HorrorMovies"} fetchUrl={Request.fetchHorrorMovies} />
      <Row title={"RomanceMovies"} fetchUrl={Request.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={Request.fetchDocumentaries} />
      <Row title={"TvShows"} fetchUrl={Request.fetchTvShow} />
      isLargeRow={true}
    </>
  );
}

export default RowList;
import React from "react";
import "./App.css";

import request from "./request";

//import Components
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default App;

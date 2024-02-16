import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { setCurrentSong, addToFavorites } from "../redux/actions";

const MainContent = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [gothicSongs, setGothicSongs] = useState([]);
  const dispatch = useDispatch();

  const fetchMusicData = async (artistName, setterFunction) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const { data } = await response.json();
        setterFunction(
          data.slice(0, 4).map((song) => ({ ...song, favorite: false }))
        );
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchMusicData("queen", setRockSongs);
    fetchMusicData("guns n roses", setPopSongs);
    fetchMusicData("kamelot", setGothicSongs);
  }, []);

  const handleCardClick = (song) => {
    dispatch(setCurrentSong(song));
  };

  const handleAddToFavorites = (song) => {
    const updatedSongs = rockSongs.map((s) => {
      if (s.id === song.id) {
        return { ...s, favorite: !s.favorite };
      }
      return s;
    });
    setRockSongs(updatedSongs);
    dispatch(addToFavorites(song));
  };

  const renderSongCards = (songs) => {
    return songs.map((song) => (
      <Col key={song.id} className="text-center">
        <Card className="bg-transparent border-0">
          <Card.Img
            src={song.album.cover_medium}
            alt="track"
            onClick={() => handleCardClick(song)}
          />
          <Card.Body>
            <Card.Title
              className="text-white"
              onClick={() => handleCardClick(song)}
            >
              {song.title}
            </Card.Title>
            <button
              className={song.favorite ? "heart-icon active" : "heart-icon"}
              onClick={() => handleAddToFavorites(song)}
            >
              <i
                className="bi bi-heart-fill"
                style={{ background: "none" }}
              ></i>
            </button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage mt-3 mb-5">
      <Container>
        <Row>
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="rock">
              <h2>Rock Classics</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {renderSongCards(rockSongs)}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="pop">
              <h2>Preferiti</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {renderSongCards(popSongs)}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="gothic">
              <h2>Gothic</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {renderSongCards(gothicSongs)}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;

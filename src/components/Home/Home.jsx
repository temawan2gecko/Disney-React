import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import "./Home.css";
import Viewers from "../Viewers/Viewers";
import Recommends from "../Recommends/Recommends";
import Disney from "../Disney/Disney";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { setMovies } from "../../features/movies/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { collection, onSnapshot } from 'firebase/firestore';
import Trending from "../Trending/Trending";
import Originals from "../Originals/Originals";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    if (userName) {
      const colRef = collection(db, "movies");
      onSnapshot(colRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    }
  }, [userName, dispatch]);

  return (
    <div className="home__container">
      <Slider />
      <Viewers />
      <Recommends />
      <Disney />
      <Originals />
      <Trending />
    </div>
  );
};

export default Home;

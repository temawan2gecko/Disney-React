import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut } from "../../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetail,
  setSignOutState,
} from "../../features/user/userSlice";

const Header = () => {
  const [btn, setBtn] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName, navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Ошибка при входе:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setSignOutState());
      navigate("/");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetail({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const signOutBtn = () => {
    setBtn((prevBtn) => !prevBtn);
  };

  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      {!userName ? (
        <button className="header__btn" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <>
          <div className="header__menu">
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="header__signOut">
            <img
              src={userPhoto}
              alt="UserImage"
              className="header__userImg"
            />
            <button className="signOut__btn" onClick={handleLogout}>Sign Out</button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

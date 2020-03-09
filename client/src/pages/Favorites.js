import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import FavoriteCard from "../components/FavoriteCard/favouritecard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";

const Favorites = () => {

  const { isLoggedIn, user } = useContext(UserContext);
  console.log({ isLoggedIn })
  console.log({user: user})

  // const [favorite, setFavorite] = useState({});
  const [favorites, setFavorites] = useState([]);
  // const [favoriteIndex, setfavoriteIndex] = useState(0);

  useEffect(() => {
    loadFavorites();
    console.log({ FavoritesPage: isLoggedIn });
  }, []);

  function loadFavorites() {
    API.fetchFavorites()
      .then(favorites => {
        setFavorites(favorites);
        return favorites;
      })
      .catch(err => console.log(err));
  }

  function deleteFavorites(id) {
    return axios
      .delete(`/api/delete/favorite/${id}`)
      .then(res => {
        console.log(res.data.response);
        if (res.data.response === 1) {
          loadFavorites();
        }
      })
      .catch(error => {
        throw error.res.data.response;
      });
  }

  return (
    <Wrapper>
      <Title>Favorites</Title>
      {favorites.map(favorite => (
        <FavoriteCard
          deleteFavorites={deleteFavorites}
          id={favorite.id}
          name={favorite.name}
          image={favorite.image}
          rating={favorite.rating}
          price={favorite.price}
          display_phone={favorite.display_phone}
          distance={favorite.distance}
          key={favorite.id}
          link={favorite.link}
        />
      ))}
    </Wrapper>
  );
};

export default Favorites;

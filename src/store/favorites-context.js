import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  numFavorites: 0,
  addFavorite: (favMeetup)=>{},//adding the function here enables intellisense
  removeFavorite: (meetupId)=>{},
  itemIsFavorite: (meetupId)=>{},
});

//wrapper function that gets wrapped around any component that needs access to the context
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favMeetup) {
    //setUserFavorites(userFavorites.concat(favMeetup));//this may work but because the state does not alweays get updated immediately, there is a better way to call the state updating function
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    numFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
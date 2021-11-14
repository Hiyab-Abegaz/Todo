import { useState, createContext } from 'react';

const FavoritesContext =  createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

function FavoritesContextProvider(props){
    const [UserFavorites,setUserFavorites] = uesState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavortiteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return UserFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: UserFavorites,
        totalFavorites: UserFavorites.length,
        addFavorites: addFavoriteHandler,
        removeFavorites: removeFavortiteHandler,
        itmeFavorites: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context} >
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;
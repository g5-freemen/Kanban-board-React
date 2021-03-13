import './style/scss/main.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardModal from "./components/CardModal";
import LoadUsersService from './components/services/LoadUsersService';
import React, { useState, useEffect, useCallback } from 'react';

export const CardsContext = React.createContext();

export default function App() {
  const [ cards, setCards ] = useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [ users, setUsers ] = useState(null);
  const [ modalState, setModalState ] = useState(null);

  const getUsers = useCallback(async () => {
    const usersList = await LoadUsersService.getUsers();
    setUsers(usersList);
  }, []);

  useEffect( () => getUsers(), [] );

  return (
    <CardsContext.Provider value={{users, cards, setCards, modalState, setModalState}}>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
        {modalState && <CardModal/> }
      </div>
    </CardsContext.Provider>
  );
}
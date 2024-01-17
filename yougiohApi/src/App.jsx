import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios, { isCancel, AxiosError } from 'axios';





function App() {

  // const [allCards, setAllCards] = useState('');

  const [cards, setCards] = useState('')

  const getCards = () => {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
     .then(response => {
      console.log(response.data.data);

      setCards(response.data.data)
     }).catch(error=>{
      console.log(error);
     })
  }

  // useEffect(() => {
  //   axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((response) => {
  //     console.log(response.data.data);

  //     setAllCards(response.data.data)


      
  //     console.log(allCards);
  //   });

  // }, []);
  // if (!allCards) return null;
  return (
    <>
      <button onClick={getCards}>cliccami</button>
      {cards ? <p>{cards}</p> : null}
    </>
  )
}

export default App

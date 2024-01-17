import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios, {isCancel, AxiosError} from 'axios';

// https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0

function App() {
  axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  

  return (
    <>
      <h1>ciao</h1>
    </>
  )
}

export default App

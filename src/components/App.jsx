//imports dependencias, imagenes, componentes, stylos
import Header from './Header';
import Footer from './Footer';
//import MovieSceneList from './MovieScenes/MovieSceneList';

import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import callToApi from '../services/api';
import objectToExport from '../services/localStorage';
import '../styles/App.scss'


function App() {

  // Variables de estado

  const [data, setData] = useState([]);
  //const [search, setSearch] = useState('');
  //const [character, setCharacter] = useState('Todos');

  useEffect(() => {
    callToApi().then((dataApi) => {
      setData(dataApi);
      console.log(dataApi);


    });
  }, []);


  return (
    <>
      <Header />
      <main>
        {/*<MovieSceneList data={data}/>*/}
      </main>
      <Footer />
    </>
  )
}

export default App

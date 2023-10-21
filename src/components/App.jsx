//imports dependencias, imagenes, componentes, stylos
import Header from './Header';
import Footer from './Footer';
import MovieSceneList from './MovieScenes/MovieSceneList';
import Form from './Form/Form';

import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import '../styles/App.scss'


function App() {

  // Variables de estado

  const [data, setData] = useState(ls.get("movies", []));
  const [titleFilter, setTitleFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('Todos');

  useEffect(() => {
    if (ls.get("movies", null) === null) {
      callToApi().then((dataApi) => {
        setData(dataApi);
        ls.set("movies", dataApi);
        console.log(dataApi)
      });
    }
  }, []);

  const handleChangeInput = (value) => {
    setTitleFilter(value);
  };

  const filteredTitle = data.filter(title => title.movie.toLowerCase().includes(titleFilter));


  return (
    <>
      <Header />
      <main>
        <Form titleFilter={titleFilter} handleChangeInput={handleChangeInput} yearFilter={yearFilter} />
        <MovieSceneList data={filteredTitle} titleFilter={titleFilter} />
      </main>
      <Footer />
    </>
  )
}

export default App

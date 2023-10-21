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
  const [titleFilter, setTitleFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    if (ls.get("movies", null) === null) {
      callToApi().then((dataApi) => {
        const dataApiSort = dataApi.sort((x, y) => x.movie.localeCompare(y.movie)); //localeCompare retorna un número indicando si una cadena de carateres de referencia va antes, después o si es la misma que la cadena dada en orden alfabético.
        console.log(dataApiSort);
        setData(dataApi);
        ls.set("movies", dataApi);
      });
    }
  }, []);

  const handleChangeInput = (value) => {
    setTitleFilter(value);
  };

  const handleChangeSelect = (value) => {
    setYearFilter(value);
  };

  const filteredTitle = data
    .filter((title) => title.movie.toLowerCase().includes(titleFilter))
    .filter((title) => {
      if (yearFilter === "") {
        return true;
      } else {
        return yearFilter === title.year
      }
    })

  const getYears = () => {
    const years = data.map((title) => title.year)
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    const sortArray = uniquesArray.sort((function (a, b) { return a - b })); // sort ordena alfabeticamentem pero convierte los int en strings, por ello usamos esa funcion entre parentesis.
    return sortArray;
  };

  return (
    <>
      <Header />
      <main>
        <Form titleFilter={titleFilter} handleChangeInput={handleChangeInput} yearFilter={yearFilter} handleChangeSelect={handleChangeSelect} years={getYears()} />
        <MovieSceneList data={filteredTitle} titleFilter={titleFilter} />

      </main>
      <Footer />
    </>
  )
}

export default App

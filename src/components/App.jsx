//imports dependencias, imagenes, componentes, stylos
import { useEffect, useState } from 'react';
import { Route, Routes, Link, matchPath } from 'react-router-dom';
import { useLocation } from 'react-router';

import callToApi from '../services/api';
import ls from '../services/localStorage';

import '../styles/App.scss'

import Header from './Header';
import Footer from './Footer';
import MovieSceneList from './MovieScenes/MovieSceneList';
import MovieSceneDetails from './MovieScenes/MovieSceneDetails';
import Form from './Form/Form';
import NotFound from './NotFound';

function App() {

  // Variables de estado

  const [data, setData] = useState(ls.get("movies", []));
  const [titleFilter, setTitleFilter] = useState(ls.get("search", ""));
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    if (ls.get("movies", null) === null) {
      callToApi().then((dataApi) => {
        const dataApiSort = dataApi.sort((x, y) => x.movie.localeCompare(y.movie)); //localeCompare retorna un número indicando si una cadena de carateres de referencia va antes, después o si es la misma que la cadena dada en orden alfabético.
        setData(dataApiSort);
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
    .filter((title) => title.movie.toLowerCase().includes(titleFilter.toLowerCase()));

  const filteredYear = filteredTitle.filter((title) => yearFilter ? title.year === parseInt(yearFilter) : true); //el dato año esta en int, con el método Number o parseInt cambiamos de string a int para cumplir la igualdad estricta.

  const getYears = () => {
    const years = data.map((title) => title.year)
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    const sortArray = uniquesArray.sort((function (a, b) { return a - b })); // sort ordena alfabeticamentem pero convierte los int en strings, por ello usamos esa funcion entre parentesis.
    return sortArray;
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/details/:id', pathname);
  const movieId = routeData !== null ? routeData.params.id : "";
  const movieData = data.find((movie) => movie.id === parseInt(movieId)); //tengo que pasarlo a int, porque si no, no se da la igualdad estricta

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form titleFilter={titleFilter} handleChangeInput={handleChangeInput} yearFilter={yearFilter} handleChangeSelect={handleChangeSelect} years={getYears()} />
                <MovieSceneList filteredYear={filteredYear} titleFilter={titleFilter} />
              </>
            }
          />
          <Route
            path="/details/:idMovie"
            element={
              <>
                <MovieSceneDetails data={movieData} />
                <Link to="/">Volver</Link>
              </>
            }
          />
          <Route
            path={"*"}
            element={
              <NotFound />
            }
          />
        </Routes>
      </main >
      <Footer />
    </>
  )
}

export default App

import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'components/Loader/Loader';
import s from './App.module.css';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink className={s.NavLink} to="/">
            Home
          </NavLink>
          <NavLink className={s.NavLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getCast } from 'services/API';

import s from './Cast.module.css';
import { Loader } from 'components/Loader/Loader';

function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async id => {
      try {
        setIsLoading(true);
        const receivedTrends = await getCast(id);
        setMovieCast(receivedTrends);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);
  
  return (
    <>
      {isLoading && <Loader />}
      {Array.isArray(movieCast) &&
        movieCast?.map(({ id, name, photo }) => {
          return (
            <li key={id} className={s.item}>
              <img src={photo} alt={name} />
            </li>
          );
        })}
    </>
  );
}

export default Cast;

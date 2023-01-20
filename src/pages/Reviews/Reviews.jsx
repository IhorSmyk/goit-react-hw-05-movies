import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Notify } from 'notiflix';
import { getReviews } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import s from './Reviews.module.css';




function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async id => {
      try {
        setIsLoading(true);
        const receivedTrends = await getReviews(id);
        setMovieReviews(receivedTrends);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;

    Notify.failure(`some error occured ${error}`);
  }, [error]);

  console.log(movieReviews);

  return (
    <>
      {isLoading && <Loader />}

      {Array.isArray(movieReviews) &&
        movieReviews?.map(el => {
          return (
            <li key={el.id}>
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          );
        })}
    </>
  );
}

export default Reviews;

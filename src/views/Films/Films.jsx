import './Films.css';
import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';
import FilmList from '../../components/FilmList';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Films in the Series</h1>
      <div className="Films">
        {films.map((film) => {
          return <FilmList key={film.id} {...film} />;
        })}
      </div>
    </>
  );
}

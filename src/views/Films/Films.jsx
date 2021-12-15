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
    <div className="Films">
      {films.map((film) => {
        return <FilmList key={film.id} {...film} />;
      })}
    </div>
  );
}

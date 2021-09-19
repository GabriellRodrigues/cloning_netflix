import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await tmdb.getHomelist();
      setMovieList(list);
      console.log(list);
    }

    loadAll();
  }, []);
  return (
    <div className="page">

      {featuredData &&
        <FeaturedMovie item={featuredData} />  
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
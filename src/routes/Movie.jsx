import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useFetch } from '../hooks/useFetch';

const Movie = () => {
	const params = useParams();

	const { data, error, loading } = useFetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=2e3e8c32d7e1e659740c5dfb8580b732&language=es-AR`
	);

	if (loading) {
		return <Loading />;
	}

	const { title } = data;

	console.log(data);

	return <div className="container mx-auto my-5">Pelicula: {title} </div>;
};

export default Movie;

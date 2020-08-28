import { MovieDb } from 'moviedb-promise';

if (!process.env.REACT_APP_API_KEY) throw new Error('No API key provided');

const moviedb = new MovieDb(process.env.REACT_APP_API_KEY);

export default moviedb;

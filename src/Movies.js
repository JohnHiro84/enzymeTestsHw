import React from 'react';
import {movies} from './helper/movies';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {
      movies: movies,
      movieId: 0,
      currentMovie: ""
    };
    this.viewNextMovieTitle = this.viewNextMovieTitle.bind(this);
    this.currentMovie = this.currentMovie.bind(this);

  }

  viewNextMovieTitle(e){
    // e.preventDefault();
    const {movies, movieId} = this.state;
    let movieKeys = Object.keys(movies);
    (movieId < movieKeys.length -1) ? this.setState({movieId: movieId+1}) : this.setState({movieId: 0});
    this.setState({currentMovie: movies[movieId]})
  }

  componentDidMount(){
    this.setState({movies: movies, currentMovie: movies[this.state.movieId]})
  }

  currentMovie(){
    let {currentMovie} = this.state;
    // let currentMovie = movies[movieId];

    if(currentMovie){
      return (
        <ul className="current-movie">
          <li>{currentMovie.title}</li>
          <li>{currentMovie.year}</li>
          <li>{currentMovie.description}</li>
          <li>{currentMovie.genre}</li>
        </ul>
      )
    }

  }


  render() {

  // console.log(this.state);
  // console.log(this.state.movieId)
   return (
     <div>
        <h2>Movies</h2>
        <button onClick={this.viewNextMovieTitle}>View Next Movie</button>
        {this.currentMovie()}
     </div>
   );
 }
}

export default Movies;

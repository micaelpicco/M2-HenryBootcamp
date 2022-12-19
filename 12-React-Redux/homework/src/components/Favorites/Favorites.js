import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map((movie) => (
            <div>
              <Link to={`/movie/${movie.id}`}>
                <li>{movie.title}</li>
              </Link>
              <button
                onClick={() => {
                  this.props.removeMovieFavorite(movie);
                }}
              >
                X
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
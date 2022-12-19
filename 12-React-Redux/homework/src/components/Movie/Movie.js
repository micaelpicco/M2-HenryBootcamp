import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    console.log(this.props.movies);
    return (
      <div className="movie-card">
        <div className="container">
          <div className="details">
            <p className="title">{this.props.movies.Title}</p>
            <p className="title-span">{this.props.movies.Year}</p>
            <p className="description">{this.props.movies.Plot}</p>
            <div className="container2">
              <img className="img" src={this.props.movies.Poster} />
              <ul className="column">
                <li>Director: {this.props.movies.Director}</li>
                <li>BoxOffice: {this.props.movies.BoxOffice}</li>
                <li>imdbRating: {this.props.movies.imdbRating}</li>
                <li>Genre: {this.props.movies.Genre}</li>
                <li>Awards: {this.props.movies.Awards}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movieDetail,
  };
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);

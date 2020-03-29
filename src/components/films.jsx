import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
class Film extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handelDelete(id: number) {
    deleteMovie(id);
    // console.log(movies);
    this.setState({ movies: getMovies() });
  }
  renderTable() {
    const { length: count } = this.state.movies;
    return (
      <React.Fragment>
        <h3>Showing {count} movies in the database.</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie["title"]}</td>
                <td>{movie["genre"]["name"]}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handelDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.movies.length ? (
          this.renderTable()
        ) : (
          <span className="alert alert-warning p-3 m-3">
            There are no movies in database
          </span>
        )}
      </React.Fragment>
    );
  }
}

export default Film;

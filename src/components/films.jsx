import React, { Component } from 'react';
import * as API from '../services/fakeMovieService';
class Film extends Component {
    state = {
        movies: [],
    }
    componentDidMount() {
        const movies = API.getMovies();
        this.setState({movies});
    }

    delete(id: number) {
        API.deleteMovie(id);
        // console.log(movies);
        this.setState({movies: API.getMovies()});
    }
    renderTable() {
        return (
            <React.Fragment>
                    <h3>Showing {this.state.movies.length} movies in the database.</h3>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(
                            movie => 
                                <tr key={movie._id}>
                                    <td>{movie['title']}</td>
                                    <td>{movie['genre']['name']}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => this.delete(movie._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                        )}
                    </tbody>
                    </table>
            </React.Fragment>
        );
    }
    render() { 
        return (
            <React.Fragment>
                {this.state.movies.length ? this.renderTable() : <span className="alert alert-warning">There are no movies in database</span>}
            </React.Fragment>
        );
    }
}
 
export default Film;
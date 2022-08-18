import PropTypes from "prop-types";
import Like from "./like";
import Pagination from "./pagination";

const MoviesTable = ({
  movies = [],
  onLike,
  pageSize,
  onPageChange,
  currentPage,
  onDeleteMovie,
  total,
}) => {
  return (
    <>
      <table className='table table-stripped table-hovered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  isLiked={Boolean(movie.isLiked)}
                  onLike={() => onLike(movie._id)}
                />
                <button className='btn btn-info btn-sm ms-2'>Edit</button>
                <button
                  className='btn btn-danger btn-sm ms-2'
                  onClick={() => onDeleteMovie(movie._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageSize={pageSize}
        itemsCount={total}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};
export default MoviesTable;

const Total = ({ total }) => {
  return (
    <b>
      Showing
      <span className='badge bg-dark text-light mx-2'>{total}</span>
      movies on the database
    </b>
  );
};

export default Total;

const Input = ({ name, error, ...args }) => {
  return (
    <div className="form-group my-2">
      <input className="form-control" id={name} name={name} {...args} />
      {error && <div className="alert alert-sm alert-danger ">{error}</div>}
    </div>
  );
};

export default Input;

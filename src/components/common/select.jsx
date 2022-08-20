const Select = ({ placeholder, name, label, error, options = [], ...args }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <select
        placeholder={placeholder}
        className='form-select'
        name={name}
        required
        {...args}>
        <option value='' disabled hidden>
          Select Genre
        </option>
        {options.map(({ _id, name }) => (
          <option value={_id} key={_id}>
            {name}
          </option>
        ))}
      </select>
      {error && <div className='alert alert-sm alert-danger'>{error}</div>}
    </div>
  );
};

export default Select;

const Filters = ({ handleConditionChange }) => {
  return (
    <div className='filters-container'>
      <div>
        <label htmlFor='filter-condition'>Filter by Weather Condition: </label>
        <select id='filter-condition' onChange={handleConditionChange}>
          <option value='all'>All</option>
          <option value='clear'>Clear</option>
          <option value='rain'>Rain</option>
          <option value='clouds'>Clouds</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

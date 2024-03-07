import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState("");
  const handleChange = ({target}) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    setinputValue("")
  }

  return (
    <div>
      <form onSubmit={onSubmit} aria-label="form">
        <input
          type="text"
          placeholder="buscar gifs"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
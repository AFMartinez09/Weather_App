import React from 'react';
import { Button} from './Buttons';
const SearchWeather = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} 
        onChange={onChange} placeholder='Search city'/>      
      <Button >Search</Button>
    </form>
  )
}

export default SearchWeather;
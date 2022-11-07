import { useEffect, useState } from "react";

// !value will return true if value is 0
export const isFalsy = (value) => (value === 0 ? false : !value);
// in a function, changing the object passed in to the function is bad.
// js pass by reference, by that the original object might be changes.
export const cleanObject = (object) => {
  // assign a new objec the same value
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
// const debounce=(func,delay)=>{
//   let timeout;
//   return (...param)=>{
//     if(timeout){
//       clearTimeout(timeout);
//     }
//     timeout=setTimeout(function(){
//       func(...param);
//     },delay);
//   }
// }

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

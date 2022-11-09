import { useEffect, useState } from "react";
// !value will return true if value is 0
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// in a function, changing th e object passed in to the function is bad.
// js pass by reference, by that the original object might be changes.
export const cleanObject = (object: object) => {
  // assign a new objec the same value
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    // 0
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // 0
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
//type: function with no param and return nothing
export const useMount = (callback: () => void) => {
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

//delay?:number type:number or get nothing
export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

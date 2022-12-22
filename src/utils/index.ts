import { useEffect, useRef, useState } from "react";
// !value will return true if value is 0
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";
// in a function, changing th e object passed in to the function is bad.
// js pass by reference, by that the original object might be changes.
export const cleanObject = (object: { [key: string]: unknown }) => {
  // assign a new objec the same value
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    const value = result[key];
    if (isVoid(value)) {
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
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

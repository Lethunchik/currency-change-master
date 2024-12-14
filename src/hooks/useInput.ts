import { useState, ChangeEvent } from "react";
import useValidation from "./useValidation";

const useInput = (initialVal: any, validations: any) => {
  const [val, setVal] = useState(initialVal);
  const valid = useValidation(val, validations);
  const [isDirty, setIsDirty] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };
  return { val, onChange, onBlur, isDirty, valid };
};

export default useInput;

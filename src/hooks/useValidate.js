import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

export const useValidate = (data, config) => {
  const [errors, setErros] = useState({});

  const validate = () => {
    const errors = validator(data, config);
    setErros(errors);
  };

  useEffect(() => {
    validate();
  }, [data]);

  return errors;
};

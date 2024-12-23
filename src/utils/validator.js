export const validator = (data, config) => {
  const errors = {};
  const validate = (validateMethod, data, config) => {
    let statusValidate = null;
    switch (validateMethod) {
      case "isRequired": {
        statusValidate = data.trim() === "";
        break;
      }
      case "isRus": {
        const rusRegExp = /^[а-яА-ЯёЁ\s]+$/g;
        statusValidate = !rusRegExp.test(data);
        break;
      }
      case "isLength": {
        statusValidate = !(data.trim().length > 1);
        break;
      }
      case "isEmail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isNumber": {
        const phoneRegExp = /^[0-9]+$/g;
        statusValidate = !phoneRegExp.test(data);
        break;
      }
      case "isLengthPhone": {
        statusValidate = data.length !== 11;
        break;
      }
      default:
        break;
    }
    if (statusValidate) {
      return config.message;
    }
  };

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !error[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};

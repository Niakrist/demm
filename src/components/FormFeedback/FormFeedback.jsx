import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import styles from "./FormFeedback.module.css";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../constats/validatorConfig";
import { useValidate } from "../../hooks/useValidate";
import { clsx } from "../../utils/clsx";
import InputLine from "../../ui/InputLine/InputLine";
import InputField from "../../ui/InputField/InputField";

const FormFeedback = () => {
  const [person, setPerson] = useState({ name: "", phone: "", check: false });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const errors = useValidate(person, validatorConfig);

  useEffect(() => {
    if (isFormSubmitted) {
      setValidationErrors(errors);
    }
  }, [isFormSubmitted, person, errors]);

  const isError = Object.keys(errors).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!isError) {
      closeModal();
      console.log("person: ", person);
    }
  };

  const handleChange = ({ target }) => {
    setPerson((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleCheck = () => {
    setPerson((prev) => ({ ...prev, check: !prev.check }));
  };
  return (
    <form id="formFeedBack" onSubmit={handleSubmit}>
      <div className={styles.inputsGroup}>
        <InputField
          className={clsx(
            styles.input,
            validationErrors.name && styles.inputErrorLine
          )}
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={person.name}
          onChange={handleChange}
          error={validationErrors.name}
        />

        <InputLine
          className={clsx(
            styles.input,
            validationErrors.phone && styles.inputErrorLine
          )}
          type="tel"
          name="phone"
          placeholder="Номер телефона"
          value={person.phone}
          onChange={handleChange}
          error={validationErrors.phone}
        />
      </div>
      <PrivacyPolicy
        className={styles.color}
        privacyPolicy={person}
        onChange={handleCheck}
        errors={validationErrors}
        id="feedback"
      />

      <Button form="formFeedBack" type="submit" className={styles.btn}>
        Оставить заявку
      </Button>
    </form>
  );
};

export default FormFeedback;

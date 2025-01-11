import React from "react";
import { useSearchParams } from "react-router-dom";
import { useResetFilter } from "../../hooks/useResetFilter";

import { clsx } from "../../utils/clsx";

import styles from "./ResetFilter.module.css";

const ResetFilter = () => {
  const [searchParams] = useSearchParams();
  const handleReset = useResetFilter();

  return (
    <button
      onClick={handleReset}
      className={clsx(styles.resetFilter, !!searchParams.size && styles.show)}>
      Сбросить фильтры
    </button>
  );
};

export default ResetFilter;

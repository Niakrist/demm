import { useEffect } from "react";

export const useKeypress = (key, callBack) => {
  const handleKeypress = (e) => {
    if (e.key === key) {
      callBack();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, []);
};

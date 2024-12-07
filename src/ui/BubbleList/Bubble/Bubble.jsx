import styles from "./Bubble.module.css";

const Bubble = ({ onClick, currentIndex, index }) => {
  return (
    <span
      className={currentIndex === index ? styles.roundActive : styles.round}
      onClick={() => onClick(index)}
    />
  );
};

export default Bubble;

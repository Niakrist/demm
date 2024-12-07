import Bubble from "./Bubble/Bubble";
import styles from "./BubbleList.module.css";

const BubbleList = ({ list, onClick, currentIndex }) => {
  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li key={item.id}>
          <Bubble onClick={onClick} currentIndex={currentIndex} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default BubbleList;

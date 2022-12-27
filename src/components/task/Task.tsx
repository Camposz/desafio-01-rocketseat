import { CheckCircle, Circle, Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { TaskType } from "../../App";

import styles from "./Task.module.css";

interface TaskProps extends TaskType {
  onCheckClicked: () => void;
  onTrashClicked: () => void;
}

const Task = ({
  text,
  isFinished,
  onCheckClicked,
  onTrashClicked,
}: TaskProps) => {
  return (
    <div className={styles.taskContainer}>
      <button className={styles.checkButton} onClick={onCheckClicked}>
        {isFinished ? (
          <CheckCircle
            size={20}
            weight="fill"
            className={styles.checkedButton}
          />
        ) : (
          <Circle size={20} weight="bold" className={styles.uncheckedButton} />
        )}
      </button>
      <div className={styles.pContainer}>
        <p className={styles.text}>{text}</p>
      </div>

      <button className={styles.trashButton} onClick={onTrashClicked}>
        <Trash size={20} weight="bold" className={styles.trash} />
      </button>
    </div>
  );
};

export default Task;

import { v4 as uuidv4 } from "uuid";

import { Dispatch, SetStateAction, useState } from "react";
import { TaskListType } from "../../App";
import Button from "../button";
import SearchInput from "../searchInput";

import styles from "./TaskCreator.module.css";

interface TaskCreatorProps {
  setTaskList: Dispatch<SetStateAction<TaskListType>>;
}

const TaskCreator = ({ setTaskList }: TaskCreatorProps) => {
  const [taskTittle, setTaskTittle] = useState("");

  return (
    <div className={styles.taskCreator}>
      <SearchInput
        value={taskTittle}
        onChange={(e) => setTaskTittle(e.target.value)}
      />
      <Button
        onClick={() => {
          setTaskList((prevState) => [
            { text: taskTittle, isFinished: false, id: uuidv4() },
            ...prevState,
          ]);
          setTaskTittle("");
        }}
      />
    </div>
  );
};

export default TaskCreator;

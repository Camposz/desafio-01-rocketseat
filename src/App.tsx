import Header from "./components/header";
import styles from "./App.module.css";
import TaskCreator from "./components/taskCreator";
import CounterBadge from "./components/counterBadge";
import EmptyList from "./components/emptyList";
import ProgressBadge from "./components/progressBadge";
import { useState } from "react";
import Task from "./components/task";

import "./global.css";

export type TaskType = {
  id: string;
  text: string;
  isFinished: boolean;
};

export type TaskListType = TaskType[];

function App() {
  const [taskList, setTaskList] = useState<TaskListType>([]);

  const createdTasks = taskList.length;
  const finishedTasks = taskList.filter(
    (task) => task.isFinished === true
  ).length;

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.content}>
        <TaskCreator setTaskList={setTaskList} />

        <div className={styles.taskHeader}>
          <span>
            Tarefas criadas <CounterBadge number={createdTasks} />
          </span>
          <span className={styles.spanFinished}>
            Concluídas{" "}
            <ProgressBadge finished={finishedTasks} total={createdTasks} />
          </span>
        </div>

        <div className={styles.taskList}>
          {createdTasks <= 0 ? (
            <EmptyList />
          ) : (
            taskList.map((taskSelected) => {
              return (
                <Task
                  key={taskSelected.id}
                  id={taskSelected.id}
                  isFinished={taskSelected.isFinished}
                  text={taskSelected.text}
                  onCheckClicked={() => {
                    const editedTaskList = taskList.map((task) => {
                      if (task.id === taskSelected.id) {
                        return { ...task, isFinished: !task.isFinished };
                      }
                      return task;
                    });

                    setTaskList(editedTaskList);
                  }}
                  onTrashClicked={() => {
                    const taskListWithoutItem = taskList.filter(
                      (task) => task.id !== taskSelected.id
                    );
                    setTaskList(taskListWithoutItem);
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

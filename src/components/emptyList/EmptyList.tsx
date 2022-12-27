import { ClipboardText } from "phosphor-react";

import styles from "./EmptyList.module.css";

const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      <ClipboardText size={80} className={styles.clipBoard} />
      <p className={styles.pBold}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};

export default EmptyList;

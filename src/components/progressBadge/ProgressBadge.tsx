import styles from "./ProgressBadge.module.css";

interface ProgressBadgeProps {
  total: number;
  finished: number;
}

const ProgressBadge = ({ total, finished }: ProgressBadgeProps) => {
  return (
    <span className={styles.span}>
      {total > 0 ? `${finished} de ${total}` : "0"}
    </span>
  );
};

export default ProgressBadge;

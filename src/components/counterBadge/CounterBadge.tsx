import styles from "./CounterBadge.module.css";

interface CounterBadgeProps {
  number: number;
}

const CounterBadge = ({ number }: CounterBadgeProps) => {
  return <span className={styles.span}>{number}</span>;
};

export default CounterBadge;

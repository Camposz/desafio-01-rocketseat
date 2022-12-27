import { InputHTMLAttributes } from "react";
import styles from "./SearchIpunt.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...rest }: InputProps) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
};

export default SearchInput;

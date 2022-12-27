import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      Criar <PlusCircle size={20} weight="bold" />
    </button>
  );
};

export default Button;

import styles from "./Logo.module.css";

import Rocket from "../../assets/rocket.svg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.rocket} src={Rocket} alt="Logotipo do Todo" />
      <span>
        to
        <span className={styles.purpleTitle}>do</span>
      </span>
    </div>
  );
};

export default Logo;

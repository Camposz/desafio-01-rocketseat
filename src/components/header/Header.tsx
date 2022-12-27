import styles from "./Header.module.css";

import Logo from "../logo";
import SearchInput from "../searchInput";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
export default Header;

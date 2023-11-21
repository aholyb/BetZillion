import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Logo />
          <Menu />
        </div>
        <Settings />
      </div>
    </header>
  );
};

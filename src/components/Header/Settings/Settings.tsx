import styles from './Settings.module.scss';

// temporary solution
const languages = [
  {
    lang: 'ENG',
    choosen: true,
  },
  {
    lang: 'RUS',
    choosen: false,
  },
];

const Settings = () => {
  return (
    <div className={styles.wrapper}>
      {/* temporary solution */}
      <div className={styles.language}>{languages[0].lang}</div>
      <div className={styles.login}>Log in / Sign up</div>
    </div>
  );
};

export default Settings;

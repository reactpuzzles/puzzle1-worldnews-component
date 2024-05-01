import styles from '../styles/components/Header.module.scss';

const Header = () => {

  return (
    <div className={styles.header}>
        <img src='./images/GlobeLogo.png' alt='World News' className={styles.logo} />
        <h3 className={styles.title}>World News</h3>
    </div>
  );
};

export default Header;
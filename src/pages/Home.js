import styles from '../styles/pages/Home.module.scss';
import Newspaper from '../components/Newspaper.js';

const Home = () => {

  return (
    <>
        <div className={styles.home}>
            <h2 className={styles.title}>Breaking World News...</h2>
            <br />
            <Newspaper />
        </div>
    </>
  );
};

export default Home;
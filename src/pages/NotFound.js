import styles from '../styles/pages/NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>404 Page Not Found</h2>
      <img src='./images/404.png' alt="404"/>
      <p>Well, that's disappointing.</p>
      <p>
        <Link to="/">Visit Our Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
import styles from '../styles/pages/Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.js';

const Layout = () => {

  return (
    <div className={styles.layout}>
      <Header />
      {/* The Outlet will do the routing for all of our other pages Home, NotFound etc */}
      <Outlet />
    </div>
  );
};

export default Layout;
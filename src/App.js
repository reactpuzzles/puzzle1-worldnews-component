import { Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
// import styles from './styles/App.module.scss';

import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;

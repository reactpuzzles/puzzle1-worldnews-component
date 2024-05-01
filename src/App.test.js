import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// We use the Router in this component so we have to mock it.
const MockApp = () => {
  return(
    <Router>
      <App />
    </Router>
  )
}

it('Should render component', () => {
  render(<MockApp />);
});
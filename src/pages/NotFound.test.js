import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound.js';

describe(NotFound, () => {

    // We use the Router in this component so we have to mock it.
    const MockNotFound = () => {
        return(
            <Router>
                <NotFound />
            </Router>
        )
    }

    it('Should render component', () => {
        render(<MockNotFound />);
    });

    it('Should display title text', () => {
        const {getByText} = render(<MockNotFound />);
        const title = getByText(/Page Not Found/i);

        expect(title).toBeInTheDocument();
    });

    it('Should display Globe Logo image', () => {
        const {getByAltText} = render(<MockNotFound />);
        const image = getByAltText('404');

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', './images/404.png');
    });

});
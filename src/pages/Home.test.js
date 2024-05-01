import { render } from "@testing-library/react";
import Home from './Home.js';

describe(Home, () => {

    it('Should render component', () => {
        render(<Home />);
    });

    it('Should display title text', () => {
        const {getByText} = render(<Home />);
        const title = getByText(/Breaking World News/i);

        expect(title).toBeInTheDocument();
    });

});
import { render } from "@testing-library/react";
import Header from './Header.js';

describe(Header, () => {

    it('Should render component', () => {
        render(<Header />);
    });

    it('Should display title text', () => {
        const {getByText} = render(<Header />);
        const title = getByText(/World News/i);

        expect(title).toBeInTheDocument();
    });

    it('Should display Globe Logo image', () => {
        const {getByAltText} = render(<Header />);
        const image = getByAltText('World News');

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', './images/GlobeLogo.png');
    });

});
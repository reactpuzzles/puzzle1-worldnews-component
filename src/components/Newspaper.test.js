import { render } from "@testing-library/react";
import Newspaper from './Newspaper.js';

describe(Newspaper, () => {

    it('Should render component', () => {
        render(<Newspaper />);
    });

    it('Should display newspaper header image', () => {
        const {getByAltText} = render(<Newspaper />);
        const image = getByAltText('NewsHeader');

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', './images/newspaper-header.png');
    });

    it('Should display headline text', () => {
        const {getByText} = render(<Newspaper />);
        const headline = getByText(/Safety Meeting Ends In Accident/i);

        expect(headline).toBeInTheDocument();
    });

    it('Should display story image', () => {
        const {getByAltText} = render(<Newspaper />);
        const image = getByAltText('Accident');

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', './images/accident.jpg');
    });

    it('Should display story text', () => {
        const {getByText} = render(<Newspaper />);
        const text = getByText(/The day started with a safety meeting/i);

        expect(text).toBeInTheDocument();
    });

});
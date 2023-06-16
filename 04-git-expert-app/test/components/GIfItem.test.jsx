import { render } from "@testing-library/react";
import { Gifitem } from "../../src/components/GIfItem";

describe('pruebas en <GIfItem/>', () => {

    const title = 'Goku';
    const url = 'http://goku.com/';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<Gifitem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });
});
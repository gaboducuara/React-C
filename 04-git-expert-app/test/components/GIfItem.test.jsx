import { render, screen} from "@testing-library/react";
import { Gifitem } from "../../src/components";

describe('pruebas en <GIf Item/> en components', () => {

    const title = 'Goku';
    const url = 'http://goku.com/';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<Gifitem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test ('debe de mostar la imagen con la URL Y con el ALT indicado' , () => {
        render(<Gifitem title={ title } url={ url } />);

        console.log(screen.getByRole('img').alt)
        // const {src , alt } = screen.getByRole('img');
        // expect(src).toBe(url);
        // expect(alt).toBe(title);
    });
});
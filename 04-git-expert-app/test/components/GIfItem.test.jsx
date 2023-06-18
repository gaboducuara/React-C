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
        //screen.debug();
        const {src , alt } = screen.getByRole('presentation');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test ('debe de mostrar el titulo en el componente' , () => {
        render(<Gifitem title={ title } url={ url } />);
        expect(screen.getByText( title )).toBeTruthy();
    })


});
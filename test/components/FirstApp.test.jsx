import { render, screen, fireEvent } from "@testing-library/react";
import FirstApp from "../../src/components/FirstApp";

describe('Test suit First App', () => {

    test('Debe hacer match con el snapshot estado default', () => {
        const { container } = render(<FirstApp />)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el contador inicial en 100', () => {
        render(<FirstApp value={100} />);
        // screen.debug(); // --> console log del render
        expect(screen.getByTestId('counter')).toBeTruthy();
        expect(screen.getByTestId('counter').innerHTML).toBe("100");
    });

    test('Debe de mostrar el contador en un h2 con su props pasado', () => {
        const value = 10;
        const { /*container,*/ getByText, getByTestId } = render(<FirstApp value={value} />);
        expect(getByText(value)).toBeTruthy();
        // const h2 = container.querySelector("h2");
        // expect(h2.innerHTML).toContain(JSON.stringify(value));
        expect(getByTestId('counter').innerHTML).toBe(JSON.stringify(value));
    });

    test('Debe de mostrar el contador en un h2', () => {
        render(<FirstApp value={250} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe("250");
    });

    test('Debe incrementar con el botón +1', () => {
        render(<FirstApp value={250} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByTestId('counter').innerHTML).toBe("251");
    });

    test('Debe decrementar con el botón -1', () => {
        render(<FirstApp value={250} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByTestId('counter').innerHTML).toBe("249");
    });

    test('Debe reseter su valor por el valor del prop pasado', () => {
        render(<FirstApp value={250} />);
        for (let index = 0; index < 10; index++) {
            fireEvent.click(screen.getByText('+1'));
        }
        // screen.getByRole('button', {name: 'elotes'}); // find elements with role button and name elotes
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByTestId('counter').innerHTML).toBe("250");
    });

});
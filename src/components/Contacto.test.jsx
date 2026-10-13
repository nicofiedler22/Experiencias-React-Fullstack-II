import { render,screen,fireEvent } from "@testing-library/react";
import { describe,it,expect } from "vitest";
import Contacto from './Contacto';

describe('Contacto',()=>{
    it('Debe aceptar el texto "Pepito" en el campo Nombre',()=>{

        render(<Contacto/>);

        const inputNombre=screen.getByLabelText(/Nombre/i);

        fireEvent.change(inputNombre, {target:{value:'Pepito'}});

        expect(inputNombre.value).toBe('Pepito');

    });
});
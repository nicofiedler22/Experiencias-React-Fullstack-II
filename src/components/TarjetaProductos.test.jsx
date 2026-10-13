import { render,screen,fireEvent } from "@testing-library/react";
import { describe,it,expect } from "vitest";
import TarjetaProductos from './TarjetaProductos';
import vista from '../assets/img/vista.jpg'

describe('TarjetaProductos',() => {
    it('Debe cambiar el texto del boton a "Probado"',()=>{
        //1- Preparacion (Arrange)
        const productoMock={
            imagen:vista,
            nombre:'Experiencia',
            descripcion:'Experiencia prototipo'
        };

        //2- Ejecucion (Act)
        render(<TarjetaProductos{...productoMock}/>);

        const boton=screen.getByRole('button');

        fireEvent.click(boton);

        //3- Evaluar Resultado (Assert)
        expect(boton.textContent).equals('Probado');

    });
});
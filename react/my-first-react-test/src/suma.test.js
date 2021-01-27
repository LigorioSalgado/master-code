// ESTE ES UN UNIT TEST
import suma from './suma';

describe('Probando la funcion suma', () => {
    it('La suma de 5 + 5 = 10', () => {
        const resultado = suma(5,5);
        expect(resultado).toBe(10);
    })

    it('La suma de 3 + 8 = 11', () => {
        const resultado = suma(3,8);
        expect(resultado).toBe(11);
    })

    it('La suma de "3" + "8" = 11', () => {
        const resultado = suma("3", "8");
        expect(resultado).toBe(undefined);
    })

    it('La suma de [3] + "8" = 11', () => {
        const resultado = suma([3], "8");
        expect(resultado).toBe(undefined);
    })
});

// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores I', () => {
  it('Las variables numeroA y numeroB existen y valen 5 y 7', () => {
    expect(numeroA).to.equal(5);
    expect(numeroB).to.equal(7);
  });

   it('La variable sumaTotal es la suma de numeroA y numeroB', () => {
    expect(sumaTotal).to.equal(12);
  });

  it('La variable restaTotal es la resta de numeroB menos numeroA', () => {
    expect(restaTotal).to.equal(2);
  });

  it('La variable multiTotal es la multiplicación de sumaTotal por restaTotal', () => {
    expect(multiTotal).to.equal(24);
  });

  it('La variable divisionTotal es la división multiTotal entre restaTotal', () => {
    expect(divisionTotal).to.equal(12);
  });
});

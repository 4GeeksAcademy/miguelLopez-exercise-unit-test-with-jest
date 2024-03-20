

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { euroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = euroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(euroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 150.84 yen", function() {
    const { dollarToYen } = require('./app.js');

    const yen = dollarToYen(3.5);

    const expected = 3.5 * 150.84;

    expect(dollarToYen(3.5)).toBe(527.94); 
})

test("One yen should be 00.0052 pound", function() {
    const { yenToPound } = require('./app.js');

    const pound = yenToPound(3.5);

    const expected = 3.5 * 0.0052;

    expect(yenToPound(3.5)).toBe(0.0182); 
})
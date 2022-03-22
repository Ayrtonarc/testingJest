const  text  = "Hola Mundo";
const fruits = ['manzana','melon','banana'];

test('debe contener un texto',() => {
    expect(text).toMatch(/Mundo/);
});

test('debe contener Banana', () =>{
    expect(fruits).toContain('banana');
});
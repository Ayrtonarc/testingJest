const  text  = "Hola Mundo";

test('debe contener un texto',() => {
    expect(text).toMatch(/Mundo/);
});
const  text  = "Hola Mundo";
const fruits = ['manzana','melon','banana'];

test('debe contener un texto',() => {
    expect(text).toMatch(/Mundo/);
});

test('debe contener Banana', () =>{
    expect(fruits).toContain('banana');
});

test('Mayor que', () => {
 expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
    expect(true).toBeTruthy(); 
    //no se le pasa valor por que va a validar que lo que se le pasa es un boleano
});

const reverseString = (str, callback) => { //callback
    callback(str.split("").reverse().join(""))
};

test('Probar un callback', ()=> {
    reverseString('Hola', (str)=> {
        expect(str).toBe('aloH');
    });
});

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""));
    });
};

test('Probar una promesa',() =>{
    return reverseString2('Hola')
    .then(string =>{
        expect(string).toBe('aloH')
    })
});


test('Probar async/await', async ()=> {
 const string = await reverseString2('hola');
 expect(string).toBe('aloh');
});
const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar("", 2);
  expect(resultado).toBe("Erro");
});

/*test("nome do teste", callbackFunction);

function callbackFunction() {
  console.log("esta funcao esta sendo chamada ?");
}

const idade = 20;
test(idade, () => {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});*/

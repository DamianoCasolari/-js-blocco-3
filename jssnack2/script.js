const nameClass = ["marco","GiorGio", "LucIA"];

const formattedStrings = nameClass.map((string) => {
  const lowerCaseString = string.toLowerCase();
  const firstChar = lowerCaseString.slice(0, 1).toUpperCase();
  const restOfString = lowerCaseString.slice(1);
//   return `${firstChar}${restOfString}`;
  return firstChar + restOfString
});

console.log(formattedStrings);

// Snack 2

// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

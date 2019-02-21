const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let seventiesEntrepreneurs = []
entrepreneurs.forEach(function(element){
  if (element.year >= 1970 && element.year <= 1979){
  seventiesEntrepreneurs.push(element)}
});
console.log(seventiesEntrepreneurs);

let entrepreneursNames = []
entrepreneurs.forEach(function(element){
  entrepreneursNames.push(element.first + " " + element.last)
});
console.log(entrepreneursNames);

let entrepreneursAge = []
entrepreneurs.forEach(function(element){
  entrepreneursAge.push(2019 - element.year)
});
console.log(entrepreneursAge);


let sortedEntrepreneurs = entrepreneurs.sort(function(a, b){
                              var lastA=a.last.toLowerCase(), lastB=b.last.toLowerCase()
                              if (lastA < lastB)
                                  return -1
                              if (lastA > lastB)
                                  return 1
                              return 0
                          })  

console.log(sortedEntrepreneurs);

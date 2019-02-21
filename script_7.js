const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

books.forEach(function(element){
  if (element.rented > 0) {
    console.log(element.title + " a bien été emprunté");
  }
})

let m
let n = 0
books.forEach(function(element){
  if (element.rented > n) {
    n = element.rented
    m = element
  };
});
console.log(m);

let y
let x = 100
books.forEach(function(element){
  if (element.rented < x) {
    x = element.rented
    y = element
  };
});
console.log(y);

books.forEach(function(element){
  if (element.id == 873495) {
    console.log(element);
  }
})

let bookcopy = books.slice()
let deletedBook = bookcopy

deletedBook.forEach(function(element){
  if (element.id == 133712) {
    delete deletedBook[deletedBook.indexOf(element)]
  }
})
console.log(deletedBook);

let sortedBook = books.sort(function(a, b){
                              var lastA=a.title.toLowerCase(), lastB=b.title.toLowerCase()
                              if (lastA < lastB)
                                  return -1
                              if (lastA > lastB)
                                  return 1
                              return 0
                          })

console.log(sortedBook);

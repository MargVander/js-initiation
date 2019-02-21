let number = ""
let numberArray = []
number = Number(prompt("De quel nombre veut tu calculer la factorielle ?"))
if (number == 0) {
   console.log("Le résultat est : 1");
} else  {
  while (number>=1) {
    numberArray.push(number)
    number = number - 1
  }
  let result = numberArray.reduce( (a,b) => a * b )
  console.log("Le résultat est : " + result);
}

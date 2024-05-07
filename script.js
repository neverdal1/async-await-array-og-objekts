// [] square brackets = ARRAY
// {} curly brakets   = objects

const myApi = [
  // data 0
  { fruit: 'apple', good: 'yes' },
  // data 1
  { fruit: 'banana', good: 'no' },
  // data 2
  { fruit: 'orange', good: 'yes' },
  // osv
];

console.log(myApi[1].fruit);
console.log(myApi[1].good);

const catFact = [
  { fact: 'cats are the best', length: '17' },
  { fact: 'cats have four legs', length: '21' },
];
// feched catFact variables

console.log(catFact[1].fact);
// if(fact === true)
// {  return fact}
// else (fact === false)
// dont return facts

//

//
async function catFactGenerator() {
  // hent

  const response = await fetch('https://catfact.ninja/facts');
  console.log(response);
  //  modifiser
  const catFactData = await response.json();

  // send
  console.log(catFactData.data[0]);
}
catFactGenerator();

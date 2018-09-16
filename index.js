var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}



function johnLennonFacts(facts) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  let i = 0
  while (i<facts.length) {
    facts.push("${facts[i]}!!!")
    i++
  }
  return facts
}

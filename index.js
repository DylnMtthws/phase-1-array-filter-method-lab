function findMatching(names, string) {
    return names.filter(
        (parameter) => parameter.toLowerCase() === string.toLowerCase()
    )
}

//I didn't understand how to write the function to ignore cases
//but it makes sense to use .toLowerCase on both sides of strict equality

function fuzzyMatch(names, string) {
    return names.filter(
        (parameter) => parameter.charAt() === string.charAt()
    )
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, string) {
    return array.filter(
        (parameter) => parameter.name === string
    )
}

console.log(matchName(drivers, 'Bobby'))

//i had originally typed (parameter) => parameter.name === string.name
//BUT! string.name doesn't exist
//parameter.name needs to equal the string that we pass through
//so we call matchName with the argument of the array drivers
//and the string "Bobby"
//Bobby.name doesn't exist
//but drivers.name (parameter.name) does have two objects that equal 'Bobby'!
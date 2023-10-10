// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby','Tiberius', 'Zacharia']

const findMatching=(driver, nameToBeChecked)=>
{
    return driver.filter(
        driver => driver.toLowerCase()===nameToBeChecked.toLowerCase()//Checking if the name provided as the argument exists in the drivers array
    )
}
console.log(findMatching(drivers, "Susan"))

const fuzzyMatch=(driversArray, letters)=>
{
    return driversArray.filter
    (
        driversArray => driversArray.toLowerCase().charAt(0)===letters.toLowerCase().charAt(0)//Checking if the first letter of the name provided as the argument exists in the drivers array
    )
}
console.log(fuzzyMatch(drivers,"y"))

const driversObject = 
[
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' 
    },
    {
      name: 'Sammy',
      hometown: 'New York' 
    } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' 
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles' 
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' 
    }
]

const matchName=(driversObject, string)=>
{
    return driversObject.filter
    (
        driversObject => driversObject.name.toLowerCase()===string.toLowerCase()//Checking if the name provided as the argument exists in the drivers object and logging the matching object
    )
}
console.log(matchName(driversObject,"Bobby"))
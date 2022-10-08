var personOne = {
    name: 'Ram',
    age: '25',
    power: 2500,
    yuga: 'Treta',
  }
  
  var personTwo = {
    name: 'Krishna',
    age: '31',
    power: 2325,
    yuga: 'Dwapar',
  }
  
  function checkPowers(personOne, personTwo) {
    namePowerPersonOne = personOne.name.length 
    // console.log(namePowerPersonOne)
    namePowerPersonTwo = personTwo.name.length 
    // console.log(namePowerPersonTwo)
  
    // 17th -  Checking Name Power
    if (namePowerPersonOne > namePowerPersonTwo) {
      console.log(`${personOne.name} has more name power than ${personTwo.name}.`)
    } else if (namePowerPersonOne < namePowerPersonTwo) {
      console.log(`${personTwo.name} has more name power than ${personOne.name}.`)
    } else {
      console.log(`${personOne.name} & ${personTwo.name} have equal name powers.`)
    }
  }
  checkPowers(personOne, personTwo)
  
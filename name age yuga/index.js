var personOne = {
    name: 'Ram',
    age: '25',
    yuga: 'Treta',
  }
  
  var personTwo = {
    name: 'Krishna',
    age: '31',
    yuga: 'Dwapar',
  }
  
  
  function checkAge(personOneName, personOneAge, personTwoName, personTwoAge) {
    if (personOneAge > personTwoAge) {
      console.log(`${personOneName} is older than ${personTwoName}.`)
    } else if (personOneAge < personTwoAge) {
      console.log(`${personTwoName} is older than ${personOneName}.`)
    } else {
      console.log(`${personOneName} & ${personTwoName} are of same age.`)
    }
  }
  
  checkAge(personOne.name, personOne.age, personTwo.name, personTwo.age)
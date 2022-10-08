// fake news det

var readlineSync = require('readline-sync')

readlineSync.question('Please enter the news: ')
var source = readlineSync.question(
  'Please enter the source (Facebook, WhatsApp, Telegram, Others): '
)

function checkNews() {
  var sourceUpperCase = source.toUpperCase()

  if (
    sourceUpperCase === 'FACEBOOK' ||
    sourceUpperCase === 'WHATSAPP' ||
    sourceUpperCase === 'TELEGRAM' ||
    sourceUpperCase === 'FB' ||
    sourceUpperCase === 'TG'
  ) {
    console.log("Don't belive things on FB, WhatsApp or Telegram!")
  } else {
    console.log('Legit NEWS!!!')
  }
}

checkNews()
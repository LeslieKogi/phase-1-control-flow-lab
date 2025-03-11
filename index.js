function scuberGreetingForFeet(someValue){
  let result
  if(someValue<=400){
    result=`This one is on me!`
  }
  else if(someValue<2000){
    result=`That will be twenty bucks.`
  }
  else if (someValue>2000 && someValue <=2500){
    result= `I will gladly take your thirty bucks.`
  }
  else{
    result=`No can do.`
  }
  return result
}
console.log(scuberGreetingForFeet(230))
console.log (scuberGreetingForFeet(9300))


function ternaryCheckCity(city){
return city==="NYC"? "Ok, sounds good.": "No go."
}

console.log(ternaryCheckCity(null))

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return `Thank you so much.`;
  
      case "not as generous":
        return`Thank you.`;
      
        default:
          return `Bye.`;
  }
}

console.log(switchOnCharmFromTip("generous"))
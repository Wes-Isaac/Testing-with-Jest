function stringLength(string) {
  let  length = string.length
  if (length === 0 || length > 10){
    throw new Error('String should be more than 1 character and less than 10')
  }
  else{
    let result =  length
    return result
  }
}

function reverseString(string){
  var sptitted = string.split("")
  var reversed = sptitted.reverse()
  var joined = reversed.join("")
  return joined
}

function capitalize(string){
  return string.charAt(0).toUpperCase()+ string.slice(1)
}



module.exports = { stringLength, reverseString, capitalize }; 

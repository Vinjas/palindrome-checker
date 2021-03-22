function palindrome(str) {
    var filteredStr = str
    .replace(/[_]|\W+/gi, "")
    .toLowerCase()
    var arrStr = [] 
  
    for(let i = filteredStr.length - 1; i >= 0; i--) {
      arrStr.push(filteredStr.split("")[i])
    }
  
    var inverseStr = arrStr.join("")
  
    if(filteredStr === inverseStr) {
      return "This is a Palindrome!"
    } else {
      return "This is not a Palindrome..."
    }
  }
var bottles = function(input) {
  if (input >= 2) {
    return "99 bottles of beer on the wall, 99 bottles of beer.";
  }   else if (input === 1) {
    return "1 bottle of beer on the wall, 1 bottle of beer.";
  }   else if (input === 0) {
    return "No more bottles of beer on the wall, no more bottles of beer.";
  }   else {
    return "Please enter a valid number.";
  }
}

// else {
//     return "Please enter a valid number.")
//   }
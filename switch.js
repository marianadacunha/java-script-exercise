function switchOfStuff(val) {
  var answer = "";

switch(val) {
  case "a":
    return "apple";
    break;
  case "b":
    return "bird";
    break;
  case "c":
    return "car";
    break;
  default:
    return "stuff";
    break;
}

  return answer;
}

switchOfStuff(1);

// If you have multiple inputs with the same output, you can represent them in a switch statement like this
// Cases for 1, 2, and 3 will all produce the same result

function sequentialSizes(val) {
    var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
    return answer;
  }
  
  sequentialSizes(1);
  
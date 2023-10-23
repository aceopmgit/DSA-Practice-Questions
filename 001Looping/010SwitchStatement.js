//switch statement
/*
it is used when we do not have to check for range
it is used when we are checking for equality
*/
const day="Monday"

switch(day){
  case "Monday":
    console.log("7 am");
    break
    case "Tuesday":
      case "Wednesday":
        case "Thursday":
          console.log("4 am");
          break;
          case "Friday":
            console.log("9 am");
            break;
            case "Saturday":
              case "sunday":
                console.log("8 am");
                break;
                default:
                console.log("This is a holiday")
}
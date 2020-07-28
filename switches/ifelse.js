//func dayType (day: String) -> String {
    var daysOfWeek ;
    var typeOfDay  = "";
    for (var i = 0; i < daysOfWeek; i++) {
        if(day == daysOfWeek[i]){
          // process the array index
        switch (i) {
            case 0:
                     typeOfDay = "It's a weekday"
                     break;
            case 1:
                    typeOfDay = "It's a weekday"
                     break;
            case 2:
                     typeOfDay = "It's a weekday"
                     break;
            case 3:
                     typeOfDay = "It's a weekday"
                     break;
            case 4:
                     typeOfDay = "It's a weekday"
                     break;
            case 5: 
                     typeOfDay = "It's weekend!"
                     break;
            case 6: 
                     typeOfDay = "It's weekend!"
            default: 
                typeOfDay = "Unlikely to be a day"
            } // end switch
        } else {
            typeOfDay = "Not a day"
        } // end if
    }// end for
    return typeOfDay
 // end func
 console.log(typeOfDay)
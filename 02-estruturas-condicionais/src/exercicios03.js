import leia from 'readline-sync';

var ud = leia.question("TYPE THE LAST NUMBER DA SUA PLACA: ");

if(ud === "0" || ud === "1"){
    console.log("YOU CANNOT RODAR IN MONDAY");
}else if(ud === "2" || ud === "3"){
    console.log("YOU CANNOT RODAR IN TUESDAY")
}else if(ud === "4" || ud === "5"){
    console.log("YOU CANNOT RODAR IN WEDNESDAY")
}else if(ud === "6" || ud === "7"){
    console.log("YOU CANNOT RODAR IN THURSDAY")
}else if(ud === "8" || ud === "9"){
    console.log("YOU CANNOT RODAR IN FRIDAY")
}else{
    console.log("INVALID!")
}


switch(ud){
    case "0":
        case "1":
        console.log("YOU CANNOT RODAR IN MONDAY");
        break;
    case "2":
        case "3":
        console.log("YOU CANNOT RODAR IN TUESDAY");
        break;
    case "4":
        case "5":
        console.log("YOU CANNOT RODAR IN WEDNESDAY");
        break;
    case "6":
        case "7":
        console.log("YOU CANNOT RODAR IN THURSDAY")
        break;
    case "8":
        case "9":
        console.log("YOU CANNOT RODAR IN FRIDAY")
        break;
    default:
        console.log("INVALID!")
}
//##########################
// Boolean Logic with Switch
//##########################

// Define enum Seasons using Symbols to ensure that they are not duplicated.
const Seasons = {
    SUMMER: Symbol("summer"),
    AUTUMN: Symbol("autumn"),
    WINTER: Symbol("winter"),
    SPRING: Symbol("spring")
}

const season = Seasons.SUMMER;

switch (season) {

    case Seasons.SUMMER:
        console.log(" :D ");
        break;

    case Seasons.WINTER:
    console.log(" :'( ");
    break;
    
    default:
        console.log(" :/ ");
        break;
}

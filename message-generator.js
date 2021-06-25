let name = "Don Draper"
const greeting = (name) =>{
    console.log(`Hello ${name}! Your horoscope for today will cover 3 aspects of your day. Mood, Work and Love.`);
}

const mood =  (num) => {
    console.log("Mood Horoscope: ")
    switch (num){
        case 0:
            console.log("Pleasant mood. Plan a short trip with family, if free.");
        case 1:
            console.log("Angry mood ThunderClouds lurking. Meditate and try to stay calm in situations.");
        case 2:
            console.log("Horny mood. control your dick/pussy. Don't let it affect work.");
        default:
            console.log("Unpredicatable mood.")
    }
    console.log("");
}



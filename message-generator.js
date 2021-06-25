let name = "Don Draper"
const greeting = (name) =>{
    console.log(`Hello ${name}! Your horoscope for today will cover 3 aspects of your day. Mood, Work and Love.`);
    console.log("");
}

const mood =  (num) => {
    console.log("Mood Horoscope: ")
    switch (num){
        case 0:
            console.log("Pleasant mood. Plan a short trip with family, if free.");
            break;
        case 1:
            console.log("Angry mood ThunderClouds lurking. Meditate and try to stay calm in situations.");
            break;
        case 2:
            console.log("Horny mood. control your dick/pussy. Don't let it affect work.");
            break;
        default:
            console.log("Unpredicatable mood.")
            break;
    }
    console.log("");
}

const work = (num) =>{
    console.log("Work Horoscope: ")
    switch (num){
        case 0:
            console.log("Eventful work day. Chances of promotion for working personnel low. Will get interesting business opportunities");
            break;
        case 1:
            console.log("Think twice before investing in any venture. Boss will be unhappy. Colleagues will stand up for you.");
            break;
        case 2:
            console.log("Will have a chance to lead a project which will be important for the future of your career. Business will be boomin.");
            break;
        default:
            console.log("Normal work day.")
            break;
    }
    console.log("");
}

const love = (num) =>{
    console.log("Love Horoscope: ")
    switch (num){
        case 0:
            console.log("Multiple Orgasms destined. Try new positions.");
            break;
        case 1:
            console.log("Don't be too passionate while fucking, it might break your heart in the future. Make sure you use a condom.");
            break;
        case 2:
            console.log("Chances of a threesome are high. Keep lookin around. Shave your pubes and groom your dick/pussy. YOU GETTIN LAID TONIGHT!!!!");
            break;
        default:
            console.log("VIRGIN!!!!!!");
            break;
    }
    console.log("");  
}

greeting(name);
mood(Math.floor(Math.random()*4));
work(Math.floor(Math.random()*4));
love(Math.floor(Math.random()*4));



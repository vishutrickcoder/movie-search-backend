// Define an object to store actor names and their associated movies
const movieAndActorNames = {
    "SUSHANT SINGH RAJPUT":["chhichhore " , "pk " , "m.s. dhoni " ,"kedarnath " ,"raabta "],
    "Ranbir Kapoor" : ["animal " , "brahmastra " , "ae dil hai mushkil " , "sanju " , "tamasha "],
    "Kartik Aaryan" : ["bhool bhulaiya 2 ","sonu ke titu ki sweety " , "luka chuppi " , "pati patni aur woh " , "freddy "],
    "Hrithik Roshan" : ["super 30 " , "krrish " , "koi mil gya " , "kaho na pyaar hai " ,"kabil "]
}

// Method to find actor/actress names based on the given movie name
const findActorByMoviesName = (movieName) => {
    try {
           let nameOfMovie = movieName.toLowerCase()
           for(let actor in movieAndActorNames){
            if(movieAndActorNames.hasOwnProperty(actor)){
                if(movieAndActorNames[actor].includes(nameOfMovie)){
                    return `Name of Actor is ${actor}`;
                }
            }
           }

           if(movieName.length === 0){
                return "Please enter movie name"
           }
           return "No actors found for the given movie."
    } catch (error) {
        console.log(error)
        return("Some Thing went Wrong")
    }
    }

// Method to find Movie by based on the given actor name

const findMoviesByActorName = (ActorName) => {
    const moviesName = movieAndActorNames[ActorName]
    
    res = []
    for(let nameOfMovie of moviesName){
        var ans = nameOfMovie[0].toUpperCase() + nameOfMovie.slice(1);
        res.push(ans)
        
    }
    return `Name of movies of ${ActorName} is ${res}`
}
console.log(findActorByMoviesName("pk"))
console.log(findMoviesByActorName("SUSHANT SINGH RAJPUT"))
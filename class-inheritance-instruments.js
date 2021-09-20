class Instrument{
    constructor(weight, year, money, isBeingPlayed=false, maker ){
        this.isBeingPlayed = isBeingPlayed
        this.isInTune = false
        this.weight = weight
        this.maker = maker
        this.year = year
        this.cost = money
    }
    tuneTheInstrument(){
        this.isInTune = true
    }
}

class Guitar extends Instrument{
    constructor(weight, year, money, maker, isBeingPlayed=false, strings=6){
        super(weight, year, money, maker, isBeingPlayed)
        this.strings = strings
    }
    strumTheStrings(){
        console.log("YOu play a loud familar noise")
    }
    pickAString(num){
        if(this.isInTune == true){
            if( num == 1){  
                console.log("E");
             }
             else if (num == 2){
                console.log("A");
             }
             else if (num == 3){
                console.log("D");
            }
            else if (num == 4){
                console.log("G");
            }
            else if (num == 5){
                console.log("B");
            }else if (num == 6){
                console.log("E");
            } else{
                console.log("you missed the string");
            }
        } else {
            "tune it first"
        }
    }
}

var eletricGuitar = new Guitar("10 lbs", 1969, "$5.10", "fender", true)


class Saxaphone extends Instrument{
    constructor(weight, year, money, maker, isBeingPlayed){
        super(weight, year, money, maker, isBeingPlayed)
        
    }
    playTheSax(){
        this.isInTune? "you play a beautiful rendition of George Michael's 'Careless Whisper'" : "Grab a reed for the sax"
    }
}
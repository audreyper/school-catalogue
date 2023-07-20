class School {
    constructor(name, level, numberOfStudents) {
        this._name = name; 
        this._level = level; 
        this._numberOfStudents = numberOfStudents; 
    }

    get name() {
        return this._name; 
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents; 
    }

    set numberOfStudents(number) {
        if (typeof number === 'number') {
            this._numberOfStudents = number; 
        } else {
            return `Invalid input. Please enter a number.`
        }
        
    }

    funFacts() {
        const funSchoolFacts = [
            "The oldest existing school in the world is believed to be the University of al-Qarawiyyin in Morocco, founded in 859 AD.",
            "The largest school in the world by the number of students is the City Montessori School in Lucknow, India, with over 55,000 students.",
            "The highest school in the world is located in the Himalayas at an altitude of 5,373 meters (17,600 feet) above sea level.",
            "The shortest school year is in Germany, with only 187 days, while the longest is in Japan, with 243 days.",
            "In Finland, students have little to no homework, and shorter school days are the norm, yet Finland's education system is consistently ranked among the best in the world.",
            "The first known public school in the United States, the Boston Latin School, was established in 1635 and is still operational today.",
            "The school with the most Nobel Prize laureates among its alumni is Harvard University, with over 150 Nobel laureates.",
            "The word 'school' comes from the Greek word 'skholḗ,' which originally meant 'leisure' or 'spare time.'",
            "The world's largest high school football stadium is the Allen Eagle Stadium in Texas, USA, with a seating capacity of over 18,000 spectators.",
            "Some schools around the world have unique architectural designs, such as the Mushroom-shaped school in Bali, Indonesia, and the Egg-shaped kindergarten in Beijing, China."
          ];

          let randomNumber = Math.floor(Math.random() * 10)
          return funSchoolFacts[randomNumber]; 
    }

    quickFact() {
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    }

    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy; 
    
    }

    get pickupPolicy() {
        return this.pickupPolicy; 
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'Middle School', numberOfStudents)
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, 'High School', numberOfStudents, sportsTeam)
        this._sportsTeam = sportsTeam; 
    }
}

let rainbowPrimarySchool = new Primary('rainbow', 200, true);
console.log(rainbowPrimarySchool)
console.log(rainbowPrimarySchool.quickFact()); 
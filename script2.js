class Person{
    constructor(name, age, gender, state, country){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

let person = new Person("Prabu", 35, "Male", "Tamil nadu", "India");
console.log(`3.Write a “person” class to hold all the details.
${person.name}
${person.age}
${person.gender}
${person.state}
${person.country}
`)

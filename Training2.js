const methodName  ="iswriting";

let person = {
    'firstname' : 'Mehrshad',
    '': 'IEEE',
    lastName: 'Peyman',
    age: 32,
    isAlive: true,
    book:{
        title:'C#',
        pages: 2000,
        language: ''
    },
    [methodName] (value){
        console.log("Writing " + value);
    },
    //Method Get
    get fullName(){
        return `${this.firstname} ${this.lastName}`;
    },
//Method Set
set lang(value){
    this.book.language = value.toUpperCase();
}

};

person.iswriting("Mehrshad");
// person.lang = 'fa'
// console.log(person.book.language);

//Copy Object value with new value
// let _person = {firstname: 'mohammad'}
// Object.assign(_person, person)
// _person.firstname = 'Hessam'


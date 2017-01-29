class Student {
  constructor(name, age, gender, date, studentId, hobbies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.date = date;
    this.studentId = studentId;
    this.hobbies = hobbies;
  }

  setName(name){
    this.name = name;
  }

  setAge(age){
    this.age = age;
  }

  setDateOfBirth(date){
    this.date = date;
  }

  setGender(gender){
    if(gender == 'Male'){
      this.gender = gender;
    } else if(gender == 'Female') {
      this.gender = gender;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  removeHobby(hobby){
    for (var i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  getName(){
    return this.name;
  }

  getData(){
    return  'Name : ' + this.name +
            ' Age : ' + this.age +
            ' Date of birth ' + this.date +
            ' Student ID : ' + this.studentId +
            ' Hobbies : ' + this.hobbies;
  }
}

let saya = new Student('Bambang Rahmadi Kurniawan Payu', 23, 'Male', '10-12-1993', 'Id.2016.2901', ['Coding', 'Browsing']);
// saya.setName("Bambang Rahmadi");
console.log(saya.name);
// saya.addHobby('Browsing')
// saya.removeHobby('Coding');
console.log(saya.getData());

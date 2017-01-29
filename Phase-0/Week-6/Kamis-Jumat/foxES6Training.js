/*
Fox's ES6 Training

Buat class bernama Rocket
Rocket memiliki 3 attribute dan 2 function

output :
"Rocket Name: Apollo Eleven, Version 11, Astronauts: 0 person".
"Rocket Name: Apollo Eleven Update X, Version 12, Astronauts: 0 person"
"Rocket Name: Apollo Eleven Update X, Version 12, Astronauts: 2 persons".
"Neil, James"
*/

class Rocket {

  constructor(name, version){
  	this.name = name;
    this.version = version;
    this.astronauts = [];
  }

  getRocketInfo(){
  	return `Rocket Name: ${this.name}, Version: ${this.version}, Astronauts: ${this.astronauts.length} person`
  }

  getAstronautsNames(){
    return this.astronauts.join(', ')
  }

  setRocketName(rocketName){
    this.name = rocketName;
  }

  setRocketVersion(rocketVersion){
    this.version = rocketVersion;
  }

  addRocketCrew(astronautsName){
    this.astronauts.push(astronautsName)
  }
}

const apolloEleven = new Rocket('Apollo Eleven', 11);
console.log(apolloEleven.getRocketInfo()); // "Rocket Name: Apollo Eleven, Version 11, Astronauts: 0 person".

apolloEleven.setRocketName('Apollo Eleven Update X');
apolloEleven.setRocketVersion(12);
console.log(apolloEleven.getRocketInfo()); // "Rocket Name: Apollo Eleven Update X, Version 12, Astronauts: 0 person".

apolloEleven.addRocketCrew("Neil");
apolloEleven.addRocketCrew("James");
console.log(apolloEleven.getRocketInfo()); // "Rocket Name: Apollo Eleven Update X, Version 12, Astronauts: 2 persons".
console.log(apolloEleven.getAstronautsNames()); // "Neil, James"

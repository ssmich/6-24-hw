//  1. Data types
//  Refresher
//  So far we have seen: Strings, Numbers, Booleans, Arrays, Objects
//  When these datatypes are combined, we get a data structure, for 
//  example, an array that contains objects that each contain booleans.
//  Suppose you are tasked with creating some software, and it is up to 
//  you to determine which datatypes and what data structure to use. For 
//  each of the following, write which data types you would use to 
//  represent the data, and then give a small example of the data 
//  structure:

//  A light switch that can be either on or off.

//    datatype: boolean
//    const lightSwitch = off
    
//  A user's email address.

//    datatype: string
//    user.email = "hereyougo@wowmail.com"

//  A spaceship with a hull, laser blasters, tractor beam, and warp drive.

//    datatype: object with keywords
//    const spaceship = {
//      hull: "hull type",
//      laserblaster: 4,
//      tractorBeam: 1,
//      warpDrive: true
//    }

//  A list of student names from our class.

//    datatype: array
//    const classSEINames = ["Sused", "Derek", "Bill", "Stacey"];

//  A list of student names from our class, each with a location.

//    datatype: object
//    const studentsSEI = {
//      name: "",
//      location: "DEN"
//    }

//  A list of student names from our class, each with a location and 
//  each with a list of favorite tv shows.

//    datatype: object with a nested array 
//    const studentsSEIv2 = {
//      name: "",
//      location: "DEN",
//      tvShows: []
//    }

//  2. Take it Easy
//  Make an array that holds all of the colors of the rainbow.

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; 

//  Write code that will access "blue" from the rainbow array.

console.log(rainbowColors[4]);

//  Make an object that is called your name and holds the information 
//  about your favorite food, a hobby, the name of the town that you 
//  live in currently, and your favorite datatype.

const Stacey = {
  favFood: "Lavendar-infused gelato",
  favHobby: "reading",
  currentTown: "Greenwood Village",
  favDatatype: "object",
}
console.log(Stacey);

//  Write code that will access your hobby from the object that you 
//  just created.

console.log(Stacey.favHobby);

// 🔴 Commit: "data structures"

// 3. Crazy Object!
// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// }
// Use crazyObject to log the following.

// "omg my mouth is burning"
// "Pretty pretty prettayyyyy good"
// "Swearing at Larry and Jeff"
// "Chicken Teriyaki Boyyyyyy"
// The object the contains the name funkhauser
// 🔴 Commit: "crazyObject"

// 4. Object-ception
// With the following object:

// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }
// Change the value of limbo to null.

// 🔴 Commit: "object-ception"


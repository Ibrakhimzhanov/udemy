// const arr = ["a", "b"];

// for (let key in arr) {
//   console.warn(arr[key]);
// }

// const user = {
//   name: "Tom",
//   key: 17,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

// const concatProps = (obj) => {
//   const arr = [];

//   for (let key in obj) {
//     arr.push(obj[key]);
// arr = arr.concat(obj[key]);
//   }

//   return arr;
// };

// const result = concatProps(user);

// console.log(result);

// const user = {
//   name: "Islam",
//   age: 28,
//   work: "Programmer",
// };

// const getAge = (obj) => {
//   const newArray = [];

//   for (let key in obj) {
//     if (key === "age") newArray.push(obj[key]);
//   }

//   return newArray;
// };

// const result = getAge(user);
// console.log("This age:" + result);

// const peson = {
//   Tom: 17,
//   Mirzo: 28,
//   Axror: 18,
// };

// const getAdults = (userObj) => {
//* { ['Tom': 17], ['Mirzo': 28], ['Axror': 18] }
//   const userArray = Object.entries(userObj);
//* ['Tom': 17], ['Mirzo': 28], ['Axror': 18]
//*           => ['Mirzo': 28], ['Axror': 18]
//   const filteredUsersArray = userArray.filter((user) => user[1] >= 18);
// *  ['Mirzo': 28], ['Axror': 18] => [Mirzo], [Axror]
//   const userNames = filteredUsersArray.map((user) => user[0]);

//   return userNames;
// };

// const result = getAdults(peson);
// console.log(result);

// // ! Short Version

// const getAdults = (userObj) =>
//   Object.entries(userObj)
//     .filter((user) => user[1] >= 18)
//     .map((user) => user[0]);

// console.log(getAdults(peson));

// const user = {
//   name: "Tom",
//   key: 17,
// };

// const concatProps = (obj) => Object.keys(obj);

// const result = concatProps(user);

// console.log(result);

// const users = {
//   Tom: 37,
//   "John Doe": 19,
//   Bob: 18,
// };

// const players = { ...users };
// players.Bob = 30;
// console.log(players);
// console.info(users);

// const peson = {
//   Tom: 27,
//   Mirzo: 28,
//   Axror: 18,
// };

// const res = Object.assign({}, users);
// res.Tom = 100;
// console.log("users:", users, "peson: ", peson, "res:", res);

// Durations are in minutes

var tasks = [
  {
    name: "Write for Envato Tuts+",
    duration: 120,
  },

  {
    name: "Work out",
    duration: 60,
  },

  {
    name: "Procrastinate on Duolingo",
    duration: 240,
  },
];

// const getDuration = (item) =>
//   item.filter((items) => items.duration >= 120).map((task) => task.name);

// console.log(getDuration(tasks));

const filter = (array, callback) => {
  var filter_array = [];

  array.forEach((element) => {
    if (callback(element)) {
      filter_array.push(element);
    }
  });

  return filter_array;
};

console.log(
  filter(tasks, (elem) => {
    return elem.name;
  })
);

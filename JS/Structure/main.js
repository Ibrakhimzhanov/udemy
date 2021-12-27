const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
  {
    id: 1,
    name: "Cristiano",
    surname: "Ronaldo",
    club: "Juventus",
  },
  {
    id: 2,
    name: "Lionel",
    surname: "Messi",
    club: "Barcelona",
  },
  {
    id: 3,
    name: "Karim",
    surname: "Benzema",
    club: "Real Madrid",
  },
  {
    id: 4,
    name: "Maxi",
    surname: "Gomez",
    club: "Valencia",
  },
  {
    id: 5,
    name: "Quincy",
    surname: "Promes",
    club: "Spartak",
  },
];

console.log(players.sort(sorting));

function sorting(a, b) {
  if (a > b || a.surname > b.surname) {
    return 1;
  }
  if (a < b || a.surname < b.surname) {
    return -1;
  }
  return 0;
}

function abc(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}

console.log(players.sort((a, b) => abc(a.surname, b.surname)));

// Деструктуризация функции
// function getInfo() {
//   return ["BMW", "X3"];
// }

// const [carName, сarSeries] = getInfo();

// console.log(getInfo);

// Деструктуризация объекта
// const link = {
//   href: "#",
//   title: "simple link",
//   target: "blank",
//   className: "link",
//   id: null,
//   children: {
//     span: {
//       content: "Click me",
//       className: "anchor",
//     },
//   },
// };

// const {
//   target,
//   className: renamed,
//   children: { span: { content, className } } = {},
// } = link;

// Формат JSON
const players = [
  {
    id: 1,
    name: "Andres",
    surname: "Iniesta",
    club: "Vissel Cobe",
  },
  {
    id: 2,
    name: "Eden",
    surname: "Hazard",
    club: "Real Madrid",
  },
  {
    id: 3,
    name: "Mo",
    surname: "Salah",
    club: "Liverpool",
  },
  {
    id: 4,
    name: "Lionel",
    surname: "Messi",
    club: "Barcelona",
  },
];

const jsonPlayers = JSON.stringify(players);

console.log(jsonPlayers);

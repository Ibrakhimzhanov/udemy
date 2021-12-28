// Деструктуризация функции
// function getInfo() {
//   return ["BMW", "X3"];
// }

// const [carName, сarSeries] = getInfo();

// console.log(getInfo);

// Деструктуризация объекта
const link = {
  href: "#",
  title: "simple link",
  target: "blank",
  className: "link",
  id: null,
  children: {
    span: {
      content: "Click me",
      className: "anchor",
    },
  },
};

const {
  target,
  className: renamed,
  children: { span: { content, className } } = {},
} = link;

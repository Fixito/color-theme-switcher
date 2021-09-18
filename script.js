let body = document.body;
let colors = ["#DBAC33", "#E31B66", "#52F0A7", "#B73BD8"];

const switchTheme = (newColor) => {
  body.style.backgroundColor = newColor;
};

colors.map((color) => {
  let div = document.createElement("div");

  div.style.backgroundColor = color;
  div.onclick = () => {
    switchTheme(color);
  };

  document.querySelector(".board").appendChild(div);
});

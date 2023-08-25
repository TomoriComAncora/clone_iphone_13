const buttons = document.querySelectorAll("#id-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    // aqui eu tiro a classe selected de todos os botões que eu clicar que tenham a classe color
    buttons.forEach((btns) => {
      btns.querySelector(".color").classList.remove("selected");
    });

    // pego o elemento de cada botão específico
    const button = e.target;
    // capturo o id
    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    // classList adiciona ou remove classe
    image.classList.add("changing");
    // seta o atributo, (passa o atributo, oq tá passando)
    image.setAttribute("src", `img/iphone_${id}.jpg`);
  });
});

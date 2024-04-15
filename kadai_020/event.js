const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    const texto = document.getElementById("text");
    texto.textContent = "ボタンをクリックしました";
});
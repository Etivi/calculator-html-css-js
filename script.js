const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const btnOprimit = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error!";
            }
            return;
        }

        const operador = boton.getAttribute("data-operador");
        if (operador === "/" || operador === "*") {
            pantalla.textContent += operador;
        } else {
            if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = btnOprimit;
            } else {
                pantalla.textContent += btnOprimit;
            }
        }
    });
});

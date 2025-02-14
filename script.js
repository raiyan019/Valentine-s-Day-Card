function createElement(className, container) {
    const element = document.createElement("div");
    element.classList.add(className);
    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(container).appendChild(element);
    setTimeout(() => element.remove(), 5000);
}
setInterval(() => createElement("heart", ".floating-hearts"), 300);
setInterval(() => createElement("flower", ".floating-flowers"), 500);
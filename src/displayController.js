const addTaskFormOpenClose = function(open, close, form) {
    const openBtn = document.querySelector(open);
    const closeBtn = document.querySelector(close);
    const formBox = document.querySelector(form);

    openBtn.addEventListener("click", () => {
        formBox.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
        formBox.classList.remove("active");
    });

}

export { addTaskFormOpenClose };
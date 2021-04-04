const button = document.querySelector(".button-container");


const newnote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add("note");

    const html = ` <div class="modify">
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="save ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea> `

    note.insertAdjacentHTML("afterbegin", html)

    const edit = note.querySelector(".edit");
    const remove = note.querySelector(".delete");
    const save = note.querySelector(".save");
    const textarea = note.querySelector("textarea");

    remove.addEventListener('click', () => {
        note.remove();
    })

    edit.addEventListener("click", () => {
        save.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })

    textarea.addEventListener("change", (event) => {
        const text = event.target.value;
        save.innerHTML = text;
    })





    document.body.appendChild(note);
}



button.addEventListener("click", () => newnote())
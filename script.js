const button = document.querySelector(".button-container");


const updatelocalstorage = () => {
    const textdata = document.querySelectorAll("textarea");

    const notes = [];
    textdata.forEach((note) => {
        return notes.push(note.value);
    })
    localStorage.setItem("notify", JSON.stringify(notes));
}


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

        updatelocalstorage();
    })


    textarea.value = text;
    save.innerHTML = text;


    edit.addEventListener("click", () => {
        save.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })

    textarea.addEventListener("change", (event) => {
        const textvalue = event.target.value;
        save.innerHTML = textvalue;

        updatelocalstorage();
    })


    document.body.appendChild(note);
}


// localstorage parse
const notes = JSON.parse(localStorage.getItem("notify"))
if (notes) {
    notes.forEach((note) => newnote(note));
}


button.addEventListener("click", () => newnote())
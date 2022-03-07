/*document.getElementById('btn').addEventListener('mouseover',function(){
    document.body.style.backgroundColor='red'
    let a=document.getElementById('myfirst');
    a.remove();
});
document.getElementById('btn').addEventListener('mouseleave',function(e){
    document.body.style.backgroundColor='white'
    let a=document.createElement('h1');
    let text=document.createTextNode('its white now');
    a.appendChild(text);
    let sel=document.querySelector('h1');
    sel.appendChild(a)
    e.preventDefault();
});*/

//to load the localStorage and trigger the show function when the page is opened or refreshed
show()
function show() {

    let notes = localStorage.getItem("notesStore");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `  
        <div class="noteCard my-2 mx-2 card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`;

    });
    let notesDom = document.getElementById('notesDOM')
    if (notesObj.length != 0) {
        notesDom.innerHTML = html
    }
    else {
        notesDom.innerHTML = `No comments to show`;
    }
}







let addbtn = document.getElementById("addBtn");
addbtn.addEventListener('click', function (e) {

    let addtext = document.getElementById("floatingTextarea2");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notesStore");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj=
    {
        title: addTitle.value,
        text: addtext.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notesStore", JSON.stringify(notesObj))
    addTitle.value="";
    addtext.value = "";
    console.log(notes)
    show();
})




let click = document.getElementById("deletecom");
click.addEventListener("click", function (e) {
    localStorage.removeItem("notesStore");
    location.reload();
})

function deleteNote(index) {
    let notes = localStorage.getItem("notesStore");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notesStore", JSON.stringify(notesObj))
    show();
}




let searchCard = document.getElementById("searchTxt");
searchCard.addEventListener("input", function () {
    let inputs = searchCard.value.toLowerCase();
    let cardElement = document.getElementsByClassName("noteCard");
    Array.from(cardElement).forEach(function (element) {
        let textArea = element.getElementsByTagName("p")[0].innerText;
        if (textArea.includes(inputs)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})




let darkMode = localStorage.getItem("darkMode");
const darkModetoggle = document.querySelector('input.dark-mode-toggle');
const darkEnable = () => {
    document.body.classList.add("dark")
    localStorage.setItem("darkMode", "enable")
};
const darkDisable = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "null");
};
if (darkMode === "enable") {
    darkEnable();
}
darkModetoggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== "enable") {
        darkEnable();
    }
    else {
        darkDisable();
    }
})



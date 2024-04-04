let input = document.querySelector('[data-searchForm]');
let addBtn = document.querySelector('[data-addBtn]');

let result = document.querySelector('.results');

function doneDanaDan(){
    let inputText = input.value;

    let box = document.createElement('div');
    box.classList.add('box');

    let boxText = document.createElement('h2');
    boxText.classList.add('text');
    boxText.innerHTML = `${inputText}`

    let doneBtn = document.createElement('button');
    doneBtn.innerHTML = "✔";
    doneBtn.classList.add('doneBtn','btn');

    let deleteBtn = document.createElement('button');
    let icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash');
    deleteBtn.classList.add('deleteBtn','btn');
    deleteBtn.appendChild(icon)

    box.appendChild(boxText);
    box.appendChild(doneBtn);
    box.appendChild(deleteBtn);

    result.appendChild(box);

    doneBtn.addEventListener('click',(e)=>{
        box.style.backgroundColor = "rgb(101, 232, 101)";
        doneBtn.innerHTML = "Done";
        doneBtn.style.fontSize = "18px";
        doneBtn.style.color = "White"
    })

    deleteBtn.addEventListener('click',(e)=>{
        box.remove();
    })
}

input.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        if(input.value !== ""){
            doneDanaDan();
            input.value = "";
        }else{
            alert("Empty Bruh!");
        }
    }
});

addBtn.addEventListener('click',(e)=>{
    if(input.value === ""){
        alert("Empty Bruh!");
    }else{
        doneDanaDan();
        input.value = "";
    }
})




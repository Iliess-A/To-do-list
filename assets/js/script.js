import { refresh } from "./refresh.js";

const toDo_list = JSON.parse(localStorage.getItem('toDo_list')) || [];
const add_toDo = document.getElementById('submit_toDo');
const text_toDo =document.getElementById('add_ToDo');
const ul_list = document.getElementById('liste');

//call the fuction to print the list from the local storage if there is something in the list
refresh(toDo_list,ul_list);
add_toDo.addEventListener('click',(event) =>{

    let text=text_toDo.value;
    toDo_list.push(text)
    text_toDo.value ='';
    console.log(toDo_list);
    refresh(toDo_list,ul_list);
    //apres chaque ajout il refresh le tableau en local storage
    localStorage.setItem('toDo_list', JSON.stringify(toDo_list));
});



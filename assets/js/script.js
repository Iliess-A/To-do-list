import { refresh } from "./refresh.js";

const toDo_list = JSON.parse(localStorage.getItem('toDo_list')) || [];
const add_toDo = document.getElementById('submit_toDo');
const text_toDo =document.getElementById('add_ToDo');
const ul_list = document.getElementById('list');

//call the fuction to print the list from the local storage if there is something in the list
refresh(toDo_list,ul_list);
add_toDo.addEventListener('click',(event) =>{

    let text=text_toDo.value;// prend la valeur dans l'input.
    toDo_list.push(text)//ajoute le text dans le tableau.
    text_toDo.value ='';//retire le text de l'input.
    // console.log(toDo_list); //debug
    refresh(toDo_list,ul_list);// appelle la fction refresh qui vas afficher le texte dans la liste.
    
    //after every add/submit update the table.
    localStorage.setItem('toDo_list', JSON.stringify(toDo_list));
});



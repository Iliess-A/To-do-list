/*
    cette fonction vas avoir pour but de créé une liste dont chaque li vas se composer de
    de text d'une checkbox et d'un bouton pour supprimer le li en question>
    elle vas egalement refresh la liste a chaque ajout ou suppression dans la liste>
    Et si la checkBox est cocher elle vas rajouter un style su se dernier;
*/ 
export function refresh(array,place){

    // vas vider l'emplacement 'place' em gros ca vas actualiser le ul.
    place.innerHTML = '';
    array.forEach((element,index) => {

        // pour chaque element de mon tableau je créé in li
        const to_do = document.createElement('li');
        to_do.textContent = element;
        place.appendChild(to_do);

        //pour chaque li je vais devoir inserer une checkbox et un button:
        const cross=document.createElement('button');//créé la checkbox
        cross.textContent ='x';
        cross.id = `toDo_${index}`;//nom indiv de chaque elem de la list.
        console.log(cross.id);

        const check = document.createElement('input');
        check.setAttribute('type','checkbox');
        check.id = 'check_list';
         
        //je place le bouton cross et la checkBox dans kes li.
        to_do.appendChild(check);
        to_do.appendChild(cross);


        //vas supprimer et refresh le tableau.
        if(cross.addEventListener('click',event => {

            array.splice(index,1);
            //apres chaque supp il refresh le tableau en local storage
            localStorage.setItem('toDo_list', JSON.stringify(array)); 
            refresh(array,place);

        }));

    });
    
};
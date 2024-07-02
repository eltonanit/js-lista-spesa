//Creo la lsita e la mostro a video-const e console.log

const lista = ['penna', 'casa', 'gomma','auto','aereo','acqua','pc'];

//Recupero nel dom(documento html)

const lista_spesa = document.getElementById('lista-spesa');

let i = 0;
while(i< lista.length ){
    console.log(i);
    i++;
    // CREI LA LISTA LI NEL DOCUMENTO TRAMITE JAVASCRIPT
    const li = document.createElement('li');
    //  GLI METTO IL TESTO DELLE STRINGHE NELL LI 
    li.innerText = lista[i];
}
//Alla fine appendo tutto il list item

lista_spesa.append(li);
console.log(lista_spesa);



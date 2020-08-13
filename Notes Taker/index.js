showobj();
let addbtn = document.getElementById('addbtn')

addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value)
    localStorage.setItem('notes', JSON.stringify(notesobj));
    showobj();
    addtxt.value=""

})

function showobj() {
    notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    html = '';
    notesobj.forEach((element, index) => {
        html += ` <div class="card notecard" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Notes ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id='${index}' onclick='deletefunc(this.id)' class="btn btn-primary">Delete</button>
    </div></div>`;

    });
    let addelem=document.getElementById('notes')
    if (notesobj.length==0){
        addelem.innerHTML='<div class="container-fluid">Nothing is here</div>';
    }
    else{
        addelem.innerHTML=html;
    }
}
function deletefunc(index){
    notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesobj));

    showobj();
}
let search=document.getElementById('search');
search.addEventListener('input',function(){
    let inputval=search.value.toLowerCase();
   
    let notecard=document.getElementsByClassName('notecard');

    Array.from(notecard).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
       
        if (cardtxt.includes(inputval)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }    
       
    })
})
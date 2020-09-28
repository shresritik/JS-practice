class Book{
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;

    }

}
class Display{
    plusbook(book){
          let notes = localStorage.getItem('uistring')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
        let uistring2=document.getElementById('uistring')
        let uistring=` 
        <tr class='notecard'>
    
            <td>${book.name.value}</td>
            <td>${book.author.value}</td>
            <td>${book.type}</td>
           
           
        </tr>
    
        `;
        uistring2.innerHTML+=uistring;
    }
    clear(){
        let formsubmit=document.getElementById('formsubmit')
        formsubmit.reset();
        
    }
    validate(book){
        if((book.name.value.length < 2) || (book.author.value.length < 2)){
            return false;
        }
        else{
            return true;
        }
    }
    show(type,message,adj){
        let msg=document.getElementById('msg')
        let messages=` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${adj}:</strong> ${message}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
      msg.innerHTML=messages;
      setTimeout(() => {
          msg.innerHTML='';
      },4000);
    }
    

}
function storage(book){
    let notes = localStorage.getItem('uistring')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    myobj={
        name:book.name.value,
        author:book.author.value,
        type:book.type
    }
    notesobj.push(myobj)
    localStorage.setItem('notes', JSON.stringify(notesobj));
    
    
}
function removedata(){
    let notes = localStorage.getItem('uistring')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }


}
let formsubmit=document.getElementById('formsubmit')
formsubmit.addEventListener('submit',addbook)
function addbook(e){

  
    let name= document.getElementById('name');
    let author= document.getElementById('author');
    let fiction= document.getElementById('fiction');
    let biography= document.getElementById('biography');
    let comedy= document.getElementById('comedy');
    if (fiction.checked){
        type=fiction.value;
    }else if(comedy.checked){
        type=comedy.value;
    }
    else{
        type=biography.value;
    }
    let book=new Book(name,author,type);
    storage(book);
    let display=new Display()
    console.log(book.name.value,book.author,book.type)


    if (display.validate(book)){
        display.plusbook(book)
        display.clear()

        display.show('success',"Data has been recorded",'Congratulation')
    }
    else{
        display.show('danger',"Please fill the correct name or author",'Alert')
    }
   

e.preventDefault();
}
let search=document.getElementById('search');
search.addEventListener('input',function(){
    let inputval=search.value.toLowerCase();
   
    let notecard=document.getElementsByClassName('notecard');


        let cardtxt=element.getElementsByTagName("td")[0].innerText;
        // let cardtxt2=element.getElementsByTagName("h5")[0].innerText;
        if (cardtxt.includes(inputval)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }    
       

})
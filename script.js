let input=document.getElementById('input'); 
let container=document.getElementsByClassName('item-container')[0]; 
let add=document.getElementById('addBtn'); 
let remove=document.getElementById('removeBtn'); 

add.addEventListener('click',(e)=>{ 
    if(input.value){ 
        var divOuter=document.createElement('div');
        divOuter.className="add-task";
        container.appendChild(divOuter);
        var div=document.createElement('div'); 
        div.innerHTML=input.value; 
        input.value="";
        div.className="item";
        divOuter.appendChild(div); 
        var del=document.createElement('button');
        del.className="del-btn"
        del.innerHTML='<span class="material-symbols-outlined del-item">delete</span>';
        del.style.color="oragne";
        divOuter.appendChild(del)
    } 
    else{
        alert("Write your task!")
    }
    del.addEventListener('click',(e)=>{
        let elem= e.target.parentNode.parentNode;
        console.log(e.target);
        container.removeChild(elem);
    })
   console.log(del);
})

remove.addEventListener('click',(e)=>{
    if(container.firstChild){
        let elem= e.target.previousElementSibling;
        elem.innerHTML="";
    }
    else{
        alert("Nothing to remove! Add task.")
    }
})
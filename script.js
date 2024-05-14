const items = document.getElementById('todo');
const addBtn = document.getElementById('btn1');
const taskAdd = document.getElementById('task')


addBtn.addEventListener('click', function() {
 


    if(taskAdd.value != ''){
    const  list = document.createElement("li", 'checkbox');
    list.innerText = task.value;
    list.classList.add('list');

 

     items.appendChild(list);

     taskAdd.value ="";
     
     var checkbox = document.createElement('input'); 
    checkbox.type= 'checkbox';
    items.appendChild(checkbox);
    }

  });


let id = 0;
let task = 0;
const todo = [];
function createTodo() {
    var t = document.getElementsByName('todo')[0].value;
    var d = document.getElementsByName('desc')[0].value;
    if(t.length === 0 || d.length === 0){
        alert('value required');
    } else {
      id++;
      todo.push({title:t,desc:d, id:id, tasks:[]}); 
      let div = document.createElement('div');
      div.classList.add('todo');
      div.id = 'todo_'+id;
      div.style.border = '1px solid';
      div.style.padding = '15px';
      div.style.marginBottom = '15px';
      let h2 = document.createElement('h2');
      h2.innerHTML = t;
      var p = document.createElement("P");
      p.innerHTML = d;
      let input = document.createElement('INPUT');
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'task');
      input.value = '';
      input.setAttribute('placeholder', 'add task');
      let btn = document.createElement('BUTTON');
      btn.innerHTML = 'Add Task';
      btn.classList.add('btn');
      btn.classList.add('btn-primary');
      btn.id = id;
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(input);
      div.appendChild(btn);
      document.getElementById('parent_list').appendChild(div);    
     }
  }

  document.getElementById('parent_list').addEventListener('click', (e)=>{
   if(parseInt(e.target.id) === id){
       let parent = e.target.parentNode;
       let input = document.getElementsByName('task')[0].value;
       if(input.length === 0 ){
        alert('value required');
    } else {
        task++;
       let div = document.createElement('div');
       div.classList.add('task');
       div.id = 'task_'+id+''+task;
       div.style.border = '1px solid';
       div.style.padding = '15px';
       div.style.marginBottom = '15px';
       let h2 = document.createElement('h2');
       h2.innerHTML = input;

       let btn = document.createElement('BUTTON');
       btn.innerHTML = 'remove Task';
       btn.classList.add('btn');
       btn.classList.add('btn-danger');
       btn.id = id+''+task;

       div.appendChild(h2);
       div.append(btn);
       parent.appendChild(div);
    }
   }
  })




const getData = () => {
  let input = document.getElementsByName('search')[0].value;
  console.log(input);
}

window.addEventListener

const doBetter = (fn, delay) => {
   let timer;
 return (args)=> {
     let context = this;
     clearTimeout(timer); 
     timer = setTimeout(() => {
        fn.apply(context, args);
     }, delay);
 }
}

const loadData = doBetter(getData, 1000);

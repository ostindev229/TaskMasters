<script setup>
import {ref} from 'vue'
import FormErrorModal from './components/FormErrorModal.vue'
let id = 0;
const taskName = ref('');
const taskTime = ref('');
const taskDescriptions = ref('');
const todos = ref([]);

const showModal = ref(false);

function addTodo(){
  todos.value.push({id: id++, 
  name:taskName.value,
  time:taskTime.value,
  descriptions:taskDescriptions.value,
  completed:false});

  taskName.value = '';
  taskTime.value = '';
  taskDescriptions.value = '';
}

const submitForm = () => { 
  if (taskName.value === '' || taskTime.value === '' || taskDescriptions.value === '') {
    showModal.value = true;
  } else {
    addTodo();
    console.log('Tache ajouté avec succès');
    
  }
  
};
function removeTodo(todo){
  const index = todos.value.findIndex(item => item.id === todo.id)
  if (index!== -1) {
    todos.value.splice(index, 1)
    
  }
}
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
<!-- Navigation -->
<nav class="navbar navbar-dark bg-dark   fixed-top">
        <a class=" text-white navbar-brand"> <pre> Ostindev229</pre> </a>
        
  </nav>

    <!-- Header -->
    <section>
      <div class="pb-5 pt-5 bg-light">
            <h1 id="putstyle1" class=" text2 text-center">This exercise consists in entering in the different fields the tasks to be carried out, their description and finally the time of their execution. This will call a function written to add your entries!!!</h1>
      </div>
    </section>
      
     <!-- To Do app -->
    <section>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
          <div id="taskList" class="col-sm-4">
            <h1 id="putstyle" class="display-4 text-white">Create a stain</h1>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input v-model='taskName' id="taskInput" type="input" class=" text-center" placeholder="Enter your task here (Ex: Lera Tab)">
              </div>
              <div class="form-group">
                <input v-model="taskTime" id="taskInput1" type="input" class=" text-center" placeholder="Enter task time (Ex: Today . 2pm)">
              </div>
              <div class="form-group">
                <textarea v-model="taskDescriptions" id="taskArea" type="input" class=" text-center" placeholder="Enter the description of your item here"></textarea>
              </div>
              <button style="width:auto;"  id="addTaskBtn" type="submit">Add Task</button>

            </form>
    <FormErrorModal v-if="showModal" @close="closeModal" />

            <div v-for="todo in todos" :key="todo.id"  class="main_bloc bg-light" :class="todo.completed">
              <div class="all_content">
                <div style="display:flex">
                <input v-model="todo.completed" type="checkbox">
                <p class="main_text" :class="{ completed: todo.completed }"> {{todo.name}} </p></div>
                <p class="main_text1" :class="{ completed: todo.completed }"> {{todo.time}} </p>
              </div>
              <div class="all_content1">
                <p class="main_text2" :class="{ completed: todo.completed }"> {{todo.descriptions}} </p>
              </div>
              <div class="all_content2">
                <p class="main_text3" :class="{ completed: todo.completed }">view detail</p>
                <button @click='removeTodo(todo)'   type="button" id="picture" value="delete" class="edit">
                  <font-awesome-icon icon="trash" />
                </button>
              </div>
            
            </div>

      </div>

      
          </div>
        </div>
        
    </section>
</template>

<style>
*{
  box-sizing: border-box;
}
html body{
  background-color:  #097770;
  font-family: 'Time New Roman';
}
#addTaskBtn[type="submit"]:hover {
animation-name: background-color;
animation-duration: 2200ms;
animation-fill-mode: forwards;
}
@keyframes background-color{
  100%{
    background-color: #097770;
    border: 2px white solid;
    color: white;
    font-weight: 900;
  }
}
.completed{
  text-decoration: line-through;
  font-weight: 900;
  color: #097770;
}
#addTaskBtn{
  color: #097770;
  font-weight: 900;
  width: 110px;
  height: 45px;
  border-radius: 3px;
  border-style: none;

}
.main_bloc{
  width: 100%;
  height: 132.5px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0416667);
border-radius: 3px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 20px;
}
.checkbox{
  padding: 12px;
}
.main_text{
font-style: normal;
font-weight: 900;
line-height: 16px;
text-align: justify;

}
.all_content{
  display: flex;
  justify-content: space-between;

  
  width: 100%;
}
  .main_text1{
  margin-top: 12px;
  margin-right: 8px;


}
.main_text{
  margin-left: 5px;
  margin-top: 18px;
}
.input,.main_text3{
  margin-left: 15px;
}

.all_content2{
  display: flex;
    justify-content: space-between;

}
#putstyle1{
  margin-top: 50px;
  font-size: 25px;
   text-align: center;
   opacity: 0.6;
}
input#taskInput.text-center,
input#taskInput1.text-center,
textarea#taskArea.text-center{
  outline-color: #edca82;
  width: 100%;
  height: 50px;
  margin: 5px;

}
textarea#taskArea.text-center{
  height: 70px;
}
#picture{
  color: darkred;
  cursor: pointer;
  margin-top: -3px;
  border: none;
  border-style: none;
  background-color: white;
}
.main_text2{
  text-align: center;
}
.all_content1{
  margin-top: -10px;
  width: 100%;
  height: 50px;
  overflow:auto ;
}
input.edit, .main_text3{
  margin-left:8px;
}
h1.text2{
  margin-top: 145px;
}
@media screen and (max-width: 768px){
  *{
    box-sizing: border-box;
  }
  .main_bloc{
    width: 100%;
    height: 132.5px;
  }
#putstyle{
  font-size: 30px;
  font-weight: 900;
  font-family: 'Time New Roman';
}
#putstyle1{
  font-size: 15px;
}
  
}

</style>
// const homes = document.querySelectorAll(".box1");
// const restart = document.querySelector(".botton");
// let arr = Array.from(document.querySelectorAll(".box1"));
// let nobatplayer = 0;
// let player = "X";

// /********************** */

// function nobat(){
//   nobatplayer++;
//     if(nobatplayer % 2 == 0){
//         player = "X";
//     }else{
//         player = "O";
//     }
//     return player;
// }   


// /********************** */

// homes.forEach(home => {
//     home.addEventListener("click", choose);
// });
// function choose(ali) {
//     if (ali.innerHTML == "a") {
//         ali.innerHTML = nobat();
//     }
// }

// /********************** */

// restart.addEventListener("click" , reload);
// function reload() {
//    location.reload();
// }

// /********************** */

// function win(){
//     const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//     for(let i of winner){
//         const [a,b,c] = i;
//         if(arr[a].innerHTML !== "a" && arr[a].innerHTML == arr[b].innerHTML && arr[b].innerHTML == arr[c].innerHTML){
//             alert("player "+ player +" win !!");
//         }
//     }
// }

// /**********************/

// function isfull(){
//     for(let i=0 ; i<9 ; i++){
//         if( arr[i].innerHTML != 'X' && arr[i].innerHTML != 'O'){
//             return false;
//         }
//     }
//     alert("player draw !! ");
// }

/**************************************************************************************************/

// let num = Math.floor(Math.random()*100 +1);
// console.log(num);

// const input = document.querySelector(".b");
// input.addEventListener("input", condinition);

// function condinition(event){
//     const value = event.target.value;
//     if(parseInt(value) === num){
//         alert("yessss!!");
//     }else{
//         alert("nooooo!!");
//     }
// }

/**************************************************************************************************/
// const tasklist = document.querySelector("#container");
// const addbtn = document.querySelector(".fa fa-plus");
// const remove = document.querySelector(".fa-times");


// addbtn.addEventListener("click" , add);
// function add(e){
//     if(addbtn.value === ''){
//         alert("enter a task please !");
//     }else{
//         const li = document.createElement("li");
//         li.className = "li:hover";
//         li.appendChild(document.createTextNode(addbtn.value));
//         const i = document.createElement("i");
//         i.className = " fas fa-times text-danger mr-auto delete-item ";
//         li.appendChild(i);
//         tasklist.appendChild(li);
//         addbtn.value = '';
//     }
// }
/************************************************************************************************************** */

const tasklist = document.querySelector(" #container ul");
const addbtn = document.querySelector(" .fa.fa-plus");
const input = document.querySelector("input");
const bin = document.querySelectorAll(" .ul");
const clear = document.querySelector(" .footer");

 loadeventlistener();

 function loadeventlistener(){

    document.addEventListener("DOMContentLoaded" , gettask);

    addbtn.addEventListener("click", add);

    bin.forEach(function (item) {
    item.addEventListener("click", deleted);
    });

    clear.addEventListener("click" , clearing);
 }

/*************************************************** */

function gettask(){
     let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach( function (task){
         const li = document.createElement("li");
        const span = document.createElement("span");
        const i = document.createElement("i");

        i.className = "fas fa-times text-danger mr-auto delete-item";
        span.appendChild(i);
        li.appendChild(span);
        li.appendChild(document.createTextNode(task));
        tasklist.appendChild(li);
    });
}

/*************************************************** */

function add(e) {
    const taskText = input.value;
    if (taskText === '') {
        alert("Enter a task, please!");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const i = document.createElement("i");

        i.className = "fas fa-times text-danger mr-auto delete-item";
        span.appendChild(i);
        li.appendChild(span);
        li.appendChild(document.createTextNode(taskText));
        tasklist.appendChild(li);

        addlocalstrage(taskText);

        input.value = '';
        e.PreventDefault();
    }
}

function addlocalstrage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

/**************************************** */

function deleted(e) {
    if (e.target.classList.contains("delete-item")) {
        if (confirm("Are you sure ??")) {
            e.target.parentElement.parentElement.remove();
            deletelocalstorage(e.target.parentElement.parentElement);
        }
    }
}

function deletelocalstorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task , index){
        if(taskItem.textContent === task){
            tasks.splice(index , 1);
        }
    });
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

/*************************************** */

function clearing(){
    tasklist.innerHTML = "";
    clearlocalstorage();
}

function clearlocalstorage() {
    localStorage.clear();
}

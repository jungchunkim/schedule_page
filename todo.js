const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput =toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS ='toDos';

let toDos=[]; // 해야 할 일을 적은 배열


function deleteToDo(event){
    const btn = event.target;   // 이벤트가 발생한 요소
    const li = btn.parentNode;  // li의 번호를 알려고!
    toDoList.removeChild(li);   // li에 있는 것 지움
    const cleanToDos= toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    //string 형태만 저장할 수 있다. (localStorage 형태)
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));

}

function paintToDo(text){
    // 처음으로 list의 ul을 만든다.
    // appendChild를 통해서 추가한다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId=toDos.length+1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id= newId;
    toDoList.appendChild(li);
    const toDoObj= {
        text:text,
        id:newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault(); //새로고침 방지
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
        //형태를 자바스키립트가 Object로 다룰 수 있게 해줌
        const parsedToDos = JSON.parse(loadedToDos);
        //forEach : array에 담겨있는 것들 각각에 한 번씩 함수를 실행
        //toDo는 각각을 말한다.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
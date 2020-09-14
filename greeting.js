const form = document.querySelector(".js-form"),
    input=form.querySelector("input"),
    greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
    SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(UERR_LS, text);
}    

function handleSubmit(event)
{
    event.preventDefault(); // event를 금지시켜!
    const currentValue = input.value;   // 입력된 값을 저장
    paintGreeting(currentValue);    // 입력한 것을 보여줌!
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName()
{
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        //she is not
        askForName();    
    }
    else{   
        //she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
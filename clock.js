const clockContainer =document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");   //여기서 제어할 수 있게 숨을 불어넣기

function getTime(){
    const date= new Date();                 //현재 시간을 알 수 있는 객체만들기
    const minutes=date.getMinutes();        //몇 분 인지 변수에 넣기
    const hours=date.getHours();            //몇 시 인지 변수에 넣기 
    const seconds=date.getSeconds();        //몇 초 인지 변수에 넣기
    //clockTitle 바꾸기 1초 는 01 로 !
    clockTitle.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`: seconds}`;  
}

function init(){
    getTime();
    //setInterval 을 이용해서 간격을 줘서 실행하기(계속 업데이트 되게 하기 위해서 ms 단위)
    setInterval(getTime,1000);
}

init();
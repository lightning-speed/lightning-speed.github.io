
let uiType = 0;
let mo = false;
function start(page){
    if(document.body.offsetWidth< 784){
      uiType = 1;
    showMenuEdit();

    }else{
      mmbtn.remove();
    }
    if(page=='home')
    showName();
    mmbtn.onclick = () =>{
      if(!mo)
      hmb.style.right = "0%";
      else{
        hmb.style.right = "-100%";
      }
      mo = !mo;

    }
   

}

function showMenuEdit(){
  menus_desk.remove();
}
const namer = document.getElementsByClassName('name_bar');
function showName(){
  const text = "Hi 👋, I am Vedansh ";
  let count = 0;  
  function rtr(){{
    if(count==text.length){
        clearInterval(inrtv);
        sbst.innerHTML = text.substring(0,count);
        showDetail();
        return;
    }
    count++;
    sbst.innerHTML = text.substring(0,count)+' &block;';
  }}
  const inrtv = setInterval(rtr,50);
}
function showDetail(){
    const text = "I am a 15 year old  Programmer and a Science Enthusiast from India and I love creating things In my freetime";
    let count = 0;  
    function rt(){
            if(count>=text.length){
                clearInterval(inrt);
                dtl.innerHTML = text.substring(0,count);
                return;
            }
            count++;
            dtl.innerHTML = text.substring(0,count)+' &block;';
            count++;
            dtl.innerHTML = text.substring(0,count)+' &block;';
    }
    const inrt = setInterval(rt,50);
  }

  function send(email,msg){
    const url = 'https://website.opengi.repl.co/';

const data = {
  msg: msg,
  from: email
};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  mode:'cors',
  body: JSON.stringify(data)
};

fetch(url, requestOptions)
  .then((response)=>{
  
    return response.json()

  })
  .then((data)=>{
    if(data.end=='200'){
      alert('Message Send!');
    }
    else if(data.end=='407'){
      alert('Error: Invalid Email Address');
    }
  })
  .catch(error => console.error(error));
  
  }
function sendMsg(){
  const email = emli.value;
  const text = msli.value;
  if(email.length==0){
    alert('Fill in email address');
    return;
  }
  if(text.length==0){
    alert('Fill in message');
    return;
  }
  send(email,text);
}
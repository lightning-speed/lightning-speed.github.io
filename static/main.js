
let uiType = 0;
let mo = false;
function start(){
    if(document.body.offsetWidth< 784){
      uiType = 1;
    showMenuEdit();

    }else{
      mmbtn.remove();
    }
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
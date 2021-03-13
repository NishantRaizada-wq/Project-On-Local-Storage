
/*console.log('hello world');
console.log(document.getElementsByClassName('form'));
console.log(document.querySelector('form'));
console.log(document.querySelectorAll('.item'));
const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'yellow';
ul.children[1].textContent = 'balla sher';
ul.lastElementChild.innerHTML  = 'mera bahadur';
const gh = document.querySelector('.items');
gh.children[0].style.color = 'green';
gh.children[1].style.color = 'yellow';
*/
const btno = document.querySelector('.yogi');

btno.addEventListener('click' , (e) => {
    
     e.preventDefault();
     
    document.querySelector('body').style.background = 'black';
    document.querySelector('.items').lastElementChild.innerHTML = 'Thanos is here';

});
/*
const yes = document.querySelector('.baggi');
const nameInput = document.querySelector('.username');
console.log(nameInput);

yes.addEventListener('click' , onsubmit);

function onsubmit(e)
{
    e.preventDefault();

    if(nameInput.value === "")
        console.log('alert');

  else
  {
    document.querySelector('body').style.background = 'black';
   setTimeout(() => console.log('user name is entered') , 3000);


  }
      
} */




const crbtn = document.querySelector('.baggi');
const inpkey = document.querySelector(".username");
const inppassword = document.querySelector(".username1");
const lsoutp = document.querySelector(".lsoutput")
crbtn.onclick = function(e)
{
 e.preventDefault();
   
    const key1 = inpkey.value;
    const key2 = inppassword.value;
  if(key1 && key2 )
{   localStorage.setItem(key1  , key2);
   location.reload();

}
   else
   {
console.log('First enter the Details guys');

   }

}


console.log(localStorage.length);


const btn = document.querySelector('.show');
btn.addEventListener('click' , (e) => {

    for(let i = 0 ; i < localStorage.length ; ++i)
    {
        const key = localStorage.key(i);
        
        const value = localStorage.getItem(key);
         lsoutp.innerHTML += `${key} : ${value}<br>`;
         
    }
   


});

const btn1 = document.querySelector('.show1');
btn1.addEventListener('click' , (e) =>
{
    
   


});



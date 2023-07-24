const button=document.getElementById('btn');
const result=document.getElementById('result');

button.addEventListener('click', async function(){
    try{
       const res=await fetch("https://foodish-api.herokuapp.com/api/");
       const jsonres=await res.json();
       console.log(jsonres.image);
       result.innerHTML=
       `<img src=${jsonres.image} alt='food image'/>`
    }catch(err){
       console.log(err);
    }
})


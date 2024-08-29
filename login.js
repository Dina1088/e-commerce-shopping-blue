let email =document.getElementById("email")
let password=document.getElementById("password")
let signin=document.getElementById("sign-in")


let storageData=JSON.parse (localStorage.getItem("datalist"))
console.log(storageData[0].email)
signin.addEventListener("click",(e)=>{
    e.preventDefault()
 
   if(
    email.value===storageData[0].email&&
    password.value===storageData[0].password
   )
   {
    setTimeout(()=>{
          window.location.href="index.html",
          email.value="",
          password.value=""
    },2000)
  
   }
   else{
    alert("please check Email and password")
   }
})




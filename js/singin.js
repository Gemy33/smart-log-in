let emailLogin=document.getElementById('emailLogin');
let passwordLogin=document.getElementById('passwordLogin');
let btnLogin=document.querySelector('.btnSignIn');
let alertPara=document.querySelector('.worn');
let arrayToLogin=[];
if(localStorage.getItem('user')!=null)
arrayToLogin=JSON.parse(localStorage.getItem('user'));
// console.log(arrayToLogin[0].password);
function checkData()
{
    for(let i=0;i<arrayToLogin.length;i++)
        {
            if(arrayToLogin[i].email==emailLogin.value&&arrayToLogin[i].password==passwordLogin.value)
                {
                    localStorage.setItem('userName',arrayToLogin[i].name);
                    return true;
                }
        }

}


btnLogin.addEventListener('click',signIn)
function signIn()
{
    if(emailLogin.value==""||passwordLogin.value=="")
        {
            alert('All inputs are required');
            
        }
        else
        {
            if(checkData())
                {
                    location.href='home.html';
                }
                else
                {
                    alert('Email or password is invalid ','red');
                }
        }

}
function alert(text, color) {
    alertPara.innerHTML = text;
    alertPara.style.color = color;
}
document.addEventListener('keydown',function(e){
    if(e.code=='Enter')
        signIn();
   
})
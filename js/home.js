let alertUser=document.querySelector('.alert-user');
if(localStorage.getItem('userName')!=null)
    {
        alertUser.innerHTML=`Welcom ${localStorage.getItem('userName')}`;
    }
document.querySelector('.btn').addEventListener('click',function(){
    location.href='signup.html';
    localStorage.removeItem('username');
})
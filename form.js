function validateform(form)
{
 //var name=document.getElementById("username").value;
 var uname=form.username.value;
 var email=form.mail.value;
 var email_re=/\S+@\S+\.\S+/;
 var 
 if(uname.length<7)
 {
    alert("invalid user name");
    return false;
 }
 else if(email_re.test(email)==false)
 {
     alert("please enter a valid email");
     return false;
     
     
 }
 
}

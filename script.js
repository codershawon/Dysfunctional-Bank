//step-1: Add event handler with submit button
document.getElementById("btnSubmit").addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/bank.html";
    //step-2: get the email address inside the email input field
    //Always remember one thing is that we use .value to get the inner text from the input field
    const inputEmail=document.getElementById("inputEmail").value
    const inputPassword=document.getElementById("inputPassword").value
    
})

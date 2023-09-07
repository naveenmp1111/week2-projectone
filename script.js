$(document).ready(function(){
    // $("#btn-request").click(function(){
    //     alert("Appointment successfully submitted")
    // })
    $("#btn-request").mouseenter(function(){
        $(this).css({background:"white", color:"black"})
    })
    $("#btn-request").mouseleave(function(){
        $(this).css({background:"#0080ff",color:"white"})
    })
    $("#fname").blur(function(){
        var text=$(this).val()
        if(text.length<4){
            $("#nameinp").show()
        }else{
            $("#nameinp").hide() 
        }
    })
    $("#fbranch").blur(function(){
        var text=$(this).val()
        if(text.length<4){
            $("#branchinp").show()
        }else{
            $("#branchinp").hide() 
        }
    })
    // $("#femail").blur(function(){
    //     var text=$(this).val()
    //     if(text.length<12){
    //         $("#emailinp").show()
    //     }else{
    //         $("#emailinp").hide() 
    //     }
    // })
    // $("#fmobile").blur(function(){
    //     var text=$(this).val()
    //     if(text.length<10){
    //         $("#mobileinp").show()
    //     }else{
    //         $("#mobileinp").hide() 
    //     }
    // })
   
})
$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            femail:{
                required:true,
                email:true,
                
            }, 
            fmobile:{
                required:true
            }
        }
    })
})
function validateEmail(){
    var Email=document.getElementById("emailinp").value
    var error=document.getElementById("error-email")
    var emailstatus=/^[a-zA-Z0-9._%+-]+@gmail\.com$/
    if(Email.length<12)
    {
     error.innerHTML="Invalid Email"
     error.style.color="red";
     return false;
    }
     else if(Email.match(emailstatus))
     {
        error.innerHTML="Valid email"
        error.style.color="green"
        return true;
    }else
    {
        error.innerHTML="Invalid email"
        error.style.color="red"
        return false;
    }
}
function validateMobile(){
    var Email=document.getElementById("mobileinp").value
    var error=document.getElementById("error-mobile")
    var emailstatus=/^\d{10}$/

    if(Email.length<10)
    {
     error.innerHTML="Invalid number"
     error.style.color="red";
     return false;
    }
     else if(Email.match(emailstatus))
     {
        error.innerHTML="Valid Number"
        error.style.color="green"
        return true;
    }
    else if(Email.length>10){
        error.innerHTML="Invalid number"
     error.style.color="red";
     return false;
    }
    else
    {
        error.innerHTML="Invalid email"
        error.style.color="red"
        return false;
    }
}
function formsubmit(){
    var Mobile=document.getElementById("mobileinp").value
    var Mobilestatus=/^\d{10}$/
    var Email=document.getElementById("emailinp").value
    var emailstatus=/^[a-zA-Z0-9._%+-]+@gmail\.com$/
    var Name=document.getElementById("fname").value
    if(Email.match(emailstatus) && Mobile.match(Mobilestatus) && Name.length>=4)
    {
        alert('Appointment Submitted Successfully')
    }

}

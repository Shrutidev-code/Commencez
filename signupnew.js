$(document).ready(function(){
    $("#phn").hide();
    $("#email1").hide();
    $("#email2").hide();
    $("#userpass1").hide();
    $("#userpass2").hide();
    $("#all").hide();
    $(".suc").hide();
    var all_array=[];
    var passwordchecklocal=[];
    var usernamechecklocal=[];
    var emailchecklocal=[];
    var contactchecklocal=[];
    var citychecklocal=[];
   
    $("#btn").click(function(){
        var a=$("#username").val();
        var b=$("#password").val();
        var c=$("#pass").val();
        var d=$("#email").val();
        var e=$("#contact").val();
        var f=$("#city").val();
        // var g=e.length;

        var passcheck1=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        var emailcheck=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/img;
        var contactno=/^[\d]{10}$/;
        
        
      
        if(a==""){
            $("#username").css({"border":"2px solid red"})
            console.log("user  is red")
        }else{
            $("#username").css({"border":"2px solid green"})
            console.log("user  is green")
        }
        if(b==""){
            $("#password").css({"border":"2px solid red"})
            // console.log("fill the password")

        }else{
          
        }
      if(c=="") {
            $("#pass").css({"border":"2px solid red"})
        }else{
            $("#pass").css({"border":"2px solid green"})
        }
        if(d==""){  
            $("#email").css({"border":"2px solid red"})
            console.log("fill the email box")
        }else{
            // $("#email").css({"border":"2px solid green"})   
        }
     if(e==""){
            $("#contact").css({"border":"2px solid red"})
        }else{
            // $("#contact").css({"border":"2px solid green"})
        }   
       if(f==""){
            $("#city").css({"border":"2px solid red"})
        }else{
            $("#city").css({"border":"2px solid green"})
        }
    
        if(passcheck1.test(b) && emailcheck.test(d) && contactno.test(e)){
            $("#email").css({"border":"2px solid green"})
            $("#password").css({"border":"2px solid green"})
            $("#contact").css({"border":"2px solid green"})
            
            if(c==b){
                console.log("password correct");
                $("#userpass1").hide();
                $("#userpass2").hide();
                $("#pass").css({"border":"2px solid green"})
                $("#all").hide();
                
                if(emailchecklocal.includes(d) || passwordchecklocal.includes(b) || contactchecklocal.includes(e)){
                         alert("Please try another one, information already exists! ")
                         $(".suc").hide();
                }else{

                    $(".suc").show();
                var stuobj={username:a,password:b,email:d,contact:e,city:f}; 
                    all_array.push(stuobj);            
                    localStorage.GatherData=JSON.stringify(all_array);
    
                
                    if(localStorage.GatherData){
                        all_array=JSON.parse(localStorage.GatherData);
                        console.log(all_array.length);
                        for(var i=0;i<all_array.length;i++){
                        
                            if(passwordchecklocal.includes(all_array[i].password)==false){
                                passwordchecklocal.push(all_array[i].password);
                            }
                            if(usernamechecklocal.includes(all_array[i].username)==false){
                            usernamechecklocal.push(all_array[i].username);
                            }
                            if(emailchecklocal.includes(all_array[i].email)==false){
                                emailchecklocal.push(all_array[i].email);
                            }
                            if(contactchecklocal.includes(all_array[i].contact)==false){
                                contactchecklocal.push(all_array[i].contact);
                            } 
                            if(citychecklocal.includes(all_array[i].city)==false){
                                citychecklocal.push(all_array[i].city);
                            }  
                
                   }
                   
                }}
                // alert("Sign up done successfully! Now to login u can visit Home Page.");
              
            }else if(c!=b){
                console.log("password do not match");
                $("#pass").css({"border":"2px solid red"})
                $("#userpass2").show();
                $("#suc").hide();
            }
        }else if(a=="" && b=="" && c=="" && d=="" && e=="" && f==""){
            $("#all").show().css({"color":"purple","backgroundColor":"lightgrey"})
            $("#suc").hide();
        }
            
        else if(passcheck1.test(b)==false && contactno.test(e)==false && emailcheck.test(d)==false){
            $("#password").css({"border":"2px solid red"})
             console.log("password is invalid")
            $("#userpass1").show();
            

            $("#phn").show();
            $("#contact").css({"border":"2px solid red"})
            $("#email").css({"border":"2px solid red"})
            $("#email2").show();
            $("#suc").hide();
         

            
        }
      
            else if(contactno.test(e)==false && emailcheck.test(d)==false){
                $("#phn").show();
                $("#suc").hide();
                //$("#all").hide();
                // $(".corr").css({"border":"2px solid green"})
                $("#contact").css({"border":"2px solid red"})

                $("#email").css({"border":"2px solid red"})
                $("#email2").show();
                $("#suc").hide();
           
            }
            else if(contactno.test(e)==false && passcheck1.test(d)==false){
                $("#phn").show();
                $("#suc").hide();
                //$("#all").hide();
                // $(".corr").css({"border":"2px solid green"})
                $("#contact").css({"border":"2px solid red"})

                $("#password").css({"border":"2px solid red"})
                // console.log("password is invalid")
                $("#userpass1").show();
                $("#suc").hide();
                // alert("Sign up done successfully! Now to login u can visit Home Page.");
            }

            else if(emailcheck.test(d)==false && passcheck1.test(d)==false){
                $("#email").css({"border":"2px solid red"})
                $("#email2").show();
                $("#suc").hide();
              
                $("#password").css({"border":"2px solid red"})
                // console.log("password is invalid")
                $("#userpass1").show();
                $("#suc").hide();
            }
            if(contactno.test(e)==false){
                $("#contact").css({"border":"2px solid red"})
                $("#phn").show();
                $("#suc").hide();
             
            }   
             
        if(emailcheck.test(d)==false){
            $("#email").css({"border":"2px solid red"})
            $("#email2").show();
            $("#suc").hide();
            
        }   
         
        if(passcheck1.test(b)==false){
            $("#password").css({"border":"2px solid red"})
            $("#userpass1").show();
            $("#suc").hide();
           // $("#all").hide();
            // console.log("password is invalid")
        }  
        if(c!=b){
            console.log("password do not match");
            $("#pass").css({"border":"2px solid red"})
            $("#userpass2").show();
            $("#suc").hide();
        } 



            if(emailcheck.test(d)==true && contactno.test(e)==true ){
                    $("#email").css({"border":"2px solid green"})
                    $("#email2").hide();

                    $("#contact").css({"border":"2px solid green"})
                    $("#phn").hide();
                   
                    // console.log("email is invalid")
                }
                if(passcheck1.test(b)==true && contactno.test(e)==true){
                        $("#password").css({"border":"2px solid green"})
                        $("#userpass1").hide();

                        $("#contact").css({"border":"2px solid green"})
                        $("#phn").hide();
                       
                    } 
                    if(emailcheck.test(d)== true && passcheck1.test(b)==true){
                        $("#email").css({"border":"2px solid green"})
                        $("#email2").hide();

                        $("#password").css({"border":"2px solid green"})
                        $("#userpass1").hide();
                    }


                    if(contactno.test(e)==true){
                            $("#contact").css({"border":"2px solid green"})
                            $("#phn").hide();
                          
                         
                        }   
                         
                    if(emailcheck.test(d)==true){
                        $("#email").css({"border":"2px solid green"})
                        $("#email2").hide();
                   
                        // console.log("password is invalid")
                    }   
                     
                    if(passcheck1.test(b)==true){
                        $("#password").css({"border":"2px solid green"})
                        $("#userpass1").hide();
                       
                        // console.log("password is invalid")
                    }   

    })
})
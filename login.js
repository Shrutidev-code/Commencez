$(document).ready(function(){
    console.log("login")
    var all_array=[];
    var passchecklocal=[];
    var userchecklocal=[];

   
    $("#btn").click(function(){
        var a=$("#user").val();
        var b=$("#pass").val();
        console.log("button click")
        var stuobj={username:a,password:b}; 
        all_array.push(stuobj);           
        localStorage.GatherData=JSON.stringify(all_array); 

        // 
        if(localStorage.GatherData){
            all_array=JSON.parse(localStorage.GatherData);
            // console.log(all_array.length);
            console.log(all_array.length);
            for(var i=0;i<all_array.length;i++){
              
                if(passchecklocal.includes(all_array[i].password)==false){
                    passchecklocal.push(all_array[i].password);
                }
                if(userchecklocal.includes(all_array[i].username)==false){
                   userchecklocal.push(all_array[i].username);
                }
                
                
                
           }
           
       }
        console.log(userchecklocal);
        console.log(passchecklocal);
       
        return false;
        
    });
});
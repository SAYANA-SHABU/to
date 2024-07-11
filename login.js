function validate (callback){
    let username= document.getElementById("username");
    let password=document.getElementById("password");
        console.log("username.value");
        console.log("password.value");
        if(username.value.trim()=="admin" && password.value.trim()=="12345"){
          callback()
        }
        else{
            alert('Invalid credentials');
        return false;
    }
        }
     function redirect(){
        console.log("redirect")
            return true;
        }
    
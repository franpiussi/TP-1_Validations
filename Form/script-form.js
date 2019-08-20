function validateString(id,max){
    var name = document.getElementById(id).value;
    if(name == ""){
        document.getElementById("label-"+id+"-required").style.display="block";
    }
    else
    {
        document.getElementById("label-"+id+"-required").style.display="none";
        if(name.length>max){
            document.getElementById("label-"+id+"-characters").style.display="block";
        }
        else{
            document.getElementById("label-"+id+"-characters").style.display="none";
        }
        if (/[^A-Za-z]/.test(name)) {
            document.getElementById("label-"+id+"-special").style.display="block";
        }
        else{
            document.getElementById("label-"+id+"-special").style.display="none";
        }
    }   
}

function validateAge(){
    var age = document.getElementById("age").value;
    if(/[A-Za-z]+/.test(age)){
        document.getElementById("label-age-numbers").style.display="block";
    }
    else{
        document.getElementById("label-age-numbers").style.display="none";
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    if(email == ""){
        document.getElementById("label-email-required").style.display="block";
    }
    else{
        document.getElementById("label-email-required").style.display="none";
        if(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|hotmail|icloud|google)\.com$/.test(email)){
            document.getElementById("label-email-domain").style.display="none";
        }
        else{
            document.getElementById("label-email-domain").style.display="block";
        }
    }
}

function validatePassword(){
    var password = document.getElementById("password").value;
    if(password == ""){
        document.getElementById("label-password-required").style.display="block";
    }
    else{
        document.getElementById("label-password-required").style.display="none";
        if(password.length<9 || password.length>20){
            document.getElementById("label-password-length").style.display="block";
        }
        else{
            document.getElementById("label-password-length").style.display="none";
        }
        if(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)){
            document.getElementById("label-password-uppercase-number").style.display="none";
        }
        else{
            document.getElementById("label-password-uppercase-number").style.display="block";
        }
    }
}


function validateForm(){
    validateString('name',20);
    validateString('lastname',20);
    validateAge();
    validateEmail()
    validatePassword();
}


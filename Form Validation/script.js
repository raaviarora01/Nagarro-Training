$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();
    $('#emailvalidation').hide();

    var Error = true;
    var email_error = true;
    var password_error = true;
    var confirm_password_error = true;

    //Username validation
    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val = $('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html("Username cannot be empty");
            $('#usernamevalidation').css('color','red');
            Error = false;
            return false;
        }

        else if(username_val.length<4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html("Username should contain atleast 4 characters.");
            $('#usernamevalidation').css('color','red');
            Error = false;
            return false;
        }
        else{
            Error = true;
            $('#usernamevalidation').hide();
        }
    }

    //Email validation
    $('#email').keyup(function(){
        email_validation();
    });

    function email_validation(){
        var emailregex = new RegExp("^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$");
        var email_val = $('#email').val();
        if(!emailregex.test(email_val)){
            $('#emailvalidation').show();
            $('#emailvalidation').html("Email is not in correct format.");
            $('#emailvalidation').css('color','red');
            email_error = false;
            return false;
        }
        
        else{
            email_error = true;
            $('#emailvalidation').hide();
        }
    }

    //Password validation
    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var password1 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var password_val = $('#password').val();
        if(!password1.test(password_val)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html("Password must contain atleast 8 characters - 1 lowercase, 1 uppercase, 1 digit and 1 special character.");
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }

        else{
            password_error = true;
            $('#passwordvalidation').hide();
        }
    }

    //Confirm password validation
    $('#confirmpassword').keyup(function(){
        confirm_password_validation();
    });

    function confirm_password_validation(){
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();
        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html("Password did not match.");
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error = false;
            return false;
        }
        else{
            confirm_password_error = true;
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#submitvalidation').click(function(){
        username_validation();
        password_validation();
        confirm_password_validation();
        email_validation();

        if(Error==true && password_error==true && confirm_password_error==true && email_error==true){
            alert("Registration Successful!");
            return true;
        }
        else{
            alert("Please fill the form carefully!");
            return false;
        }
    });

});
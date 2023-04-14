// -------------only expresion function------

// first name expresion-------------
function firstName_reg_ex() {
    let reg_ex = /^[a-zA-Z]*$/;
    var fname = document.querySelector(".fname").value;

    if (reg_ex.test(fname)) {
        document.querySelector(".msg1").innerHTML = ""
        return false;
    } else {
        document.querySelector(".msg1").innerHTML = "Only alphabets are allowed!!!"
        return false;
    }
}

// last name expresion-----------------

function lastName_reg_ex() {
    let reg_ex = /^[a-zA-Z]*$/;
    var lname = document.querySelector(".lname").value;

    if (reg_ex.test(lname)) {
        document.querySelector(".msg2").innerHTML = ""
        return false;
    } else {
        document.querySelector(".msg2").innerHTML = "Only alphabets are allowed!!!"
        return false;
    }
}

// Address expresion------------------

function reg_address() {
    let reg_ex_add = /^[#.0-9a-zA-Z\s,-]*$/
    let add = document.querySelector(".addr").value;

    if (reg_ex_add.test(add)) {
        document.querySelector(".msg3").innerHTML = ""
        return false;
    } else {
        document.querySelector(".msg3").innerHTML = "Please enter proper address!!!"
        return false;
    }
}

// lenth of Address...............
function address_length() {
    let add = document.getElementById("addr").value;
    if (add.length < 20) {
        document.querySelector(".msg4").innerHTML = "please enter atleast 20 char...";
        return false;
    }
    else {
        document.querySelector(".msg4").innerHTML = "false";
        return false;
    }
}
// Regular Exprestion For Mobile no

function mnum_reg_exp() {
    let mobile_no = document.getElementById("mno").value;
    let reg_ex_mno = /^[0-9]*$/

    if (reg_ex_mno.test(mobile_no)) {
        document.querySelector(".msg8").innerHTML = ""
        return false;
    } else {
        document.querySelector(".msg8").innerHTML = "Enter Numbers only!!!"
        return false;
    }
}

// mobile length....

function mobile_num_len() {
    let mobile_no = document.getElementById("mno").value;
    if (mobile_no.length >= 10) {
        document.querySelector(".msg7").innerHTML = ""
        return false;
    } else {
        document.querySelector(".msg7").innerHTML = "Maximum 10 digits are allowed..."
        return false;
    }
}


// pin number

function pin_num() {
    let pin_no = document.getElementById("pin").value;
    
    let reg_ex_pin = /^[0-9]*$/
    if (reg_ex_pin.test(pin_no)){
        document.querySelector(".msg9").innerHTML = "true"; 
        return false;
    }else{
        document.querySelector(".msg9").innerHTML = "false";
        return false;
    }
}


// show password....

function show_pass(){
    let pass = document.getElementById("pass");
    let icon =document.querySelector("fa-eye");
    if(pass.type =="password"){
        pass.type="text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        return false;
    }else{
        pass.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        return false;

    }
}

// conform pass
function show_pass_2(){
    let pass = document.getElementById("cpass");
    let icon =document.querySelector("fa-eye");
    if(pass.type =="password"){
        pass.type="text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        return false;

    }else{
        pass.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        return false;

    }
}
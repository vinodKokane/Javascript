
function validation_page() {
    var fname = document.querySelector(".fname").value;
    var lname = document.querySelector(".lname").value;
    var addr = document.getElementById("addr").value;
    var cdate = document.getElementById("cdate").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("fmale").checked;
    var other = document.getElementById("other").checked;
    var mno = document.getElementById("mno").value;
    var pin = document.getElementById("pin").value;

    if (fname == "" && lname == "" && addr == "" && male == false && female == false && other == false && mno == "" && pin == "") {
        document.querySelector(".msg1").innerHTML = "Please Enter your Name!!!"
        document.querySelector(".msg2").innerHTML = "Please Enter your Last Name!!!"
        document.querySelector(".msg3").innerHTML = "Please Enter your Address!!!"
        document.querySelector(".msg5").innerHTML = "Select Date...."
        document.querySelector(".msg6").innerHTML = "Please select Gender!!!";
        document.querySelector(".msg7").innerHTML = "Please Enter Your Number...";
        document.querySelector(".msg8").innerHTML = "Please Enter Pin Number...";

        return false;
    }
    // else{
    //     document.querySelector(".msg1").innerHTML = ""
    //     document.querySelector(".msg2").innerHTML = ""
    //     document.querySelector(".msg3").innerHTML = ""
    //     document.querySelector(".msg5").innerHTML = ""
    //     document.querySelector(".msg6").innerHTML = "";
    //     document.querySelector(".msg7").innerHTML = "";
    //     return false;
    // }
}


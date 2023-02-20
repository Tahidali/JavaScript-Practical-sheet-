function check_form_valid() {
    let fname = document.getElementById("name").value;
    let midname = document.getElementById("mname").value;
    let ltname = document.getElementById("ltname").value;
    let addr = document.getElementById("addr").value;
    let date = document.getElementById("date").checked;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let exp = document.getElementById("exp").value;
    let mnum = document.getElementById("mnum").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (fname == "" || midname == "" || ltname == "" || addr == "" || date == "" || male == false && female == false || exp == "" || mnum == "" || email == "" || pass == "") {
        document.getElementById("msg1").innerHTML = "Enter First Name";
        document.getElementById("msg2").innerHTML = "Enter Middle Name";
        document.getElementById("msg3").innerHTML = "Enter Last Name";
        document.getElementById("msg4").innerHTML = "Enter Full Address";
        document.getElementById("msg5").innerHTML = "Select Date";
        document.getElementById("msg6").innerHTML = "Select Gender";
        document.getElementById("msg8").innerHTML = "Select One";
        document.getElementById("msg8").innerHTML = "Enter 10 Digit Number";
        document.getElementById("msg9").innerHTML = "Enter Email";
        document.getElementById("msg10").innerHTML = "Enter Password";
        return false;
    }else{
        document.getElementById("msg1").innerHTML = "";
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("msg5").innerHTML = "";
        document.getElementById("msg6").innerHTML = "";
        document.getElementById("msg8").innerHTML = "";
        document.getElementById("msg8").innerHTML = "";
        document.getElementById("msg9").innerHTML = "";
        document.getElementById("msg10").innerHTML = "";
        return false;

    }
}
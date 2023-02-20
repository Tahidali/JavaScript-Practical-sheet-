// regular expression for Name 
function name_reg_ex() {
    let reg_ex = /^[a-zA-z]*$/;
    let fname = document.getElementById("name").value;
    if (reg_ex.test(fname)) {
        document.getElementById("msg1").innerHTML = "";
        return false;
    } else {
        document.getElementById("msg1").innerHTML = "Digits are not allowed";
        return false;
    }
}
//regular expression for  midname
function mname_reg_ex() {
    let reg_ex = /^[a-zA-z]*$/;
    let mname = document.getElementById("mname").value;
    if (reg_ex.test(mname)) {
        document.getElementById("msg2").innerHTML = "";
        return false;
    } else {
        document.getElementById("msg2").innerHTML = "Digits are not allowed";
        return false;
    }
}
// regular expression for lastname
function ltname_reg_ex() {
    let reg_ex = /^[a-zA-z]*$/;
    let ltname = document.getElementById("ltname").value;
    if (reg_ex.test(ltname)) {
        document.getElementById("msg3").innerHTML = "";
        return false;
    } else {
        document.getElementById("msg3").innerHTML = "Digits are not allowed";
        return false;
    }
}
// regular expression for address
function address_range() {
    let addr = document.getElementById("addr").value;
    if (addr.length < 10) {
        document.getElementById("msg4").innerHTML = "Enter Minimum 10 character"
        return false;
    } else if (addr.length > 100) {
        document.getElementById("msg4").innerHTML = "Not valid more than 100 characters"
        return false;
    } else {
        document.getElementById("msg4").innerHTML = "";
        return false;
    }
}
function mnum_reg_reg(){
    
    let mnum = document.getElementById("mnum").value;
    if(mnum.length < 10) {
        document.getElementById("msg8").innerHTML = "Enter maixmume number 10"
        return false;
    }else {
        document.getElementById("msg8").innerHTML = "";
        return false;
    }
}
function mno_ex(){
 let mnum_ex = /^[0-9]*$/
 let mnum = document.getElementById("mnum").value;
 if(mnum_ex.test(mnum)){
    document.getElementById("msg11").innerHTML = "";
    return false ;
 }else {
    document.getElementById("msg11").innerHTML = "alphabet not allowed";
    return false;
 }
}
function email_reg() {
    let email = document.getElementById("email").value;
    let email_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let reg_ex_num = /^[0-9]/
    if (email_ex.test(email)) {
      document.getElementById("msg9").innerHTML = "";
      return false;
    } else {
      document.getElementById("msg9").innerHTML = "Enter a Valid Email(Tahid@gmail.com)";
      return false;
    }
  }

function  show_pass(){
    let pass = document.getElementById("pass");
    if (pass.type == "password") {
        pass.type="text";
    }else {
        pass.type="password";
    }
    
}
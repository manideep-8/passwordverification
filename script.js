function access() {

  var data= document.getElementById('pwd1').value;

  var regx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  if (regx.test(data)) {
    alert("valid data")
  }
  else {
    alert("invalid data")
  }
}

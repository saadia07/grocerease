function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // console.log(username,password);
    if(username=="admin" && password=="admin123")
    {
      alert(
        "you are successfully logged"
      )
    } else {
        alert(
            "wrong username and password"
        )
    }
}
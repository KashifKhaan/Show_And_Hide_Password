var password = document.getElementById('password');
    
    function toggle(element) {
      var type = password.getAttribute('type');
      if(type == 'password') {
        password.setAttribute('type','text');
        element.innerText = "Hide Password";
      } else {
        password.setAttribute('type','password');
        element.innerText = "Show Password"
      }
    }
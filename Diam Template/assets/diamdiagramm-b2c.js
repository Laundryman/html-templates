function makePwdToggler(pwd){
    // Create show-password checkbox
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    var id = pwd.id + 'toggler';
    checkbox.setAttribute('id', id);
  
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.appendChild(document.createTextNode('show password'));
  
    var div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);
  
    // Add show-password checkbox under password input
    pwd.insertAdjacentElement('afterend', div);
  
    // Add toggle password callback
    function toggle(){
      if(pwd.type === 'password'){
        pwd.type = 'text';
      } else {
        pwd.type = 'password';
      }
    }
    checkbox.onclick = toggle;
    // For non-mouse usage
    checkbox.onkeydown = toggle;
  }
  
  function setupPwdTogglers(){
    var pwdInputs = document.querySelectorAll('input[type=password]');
    for (var i = 0; i < pwdInputs.length; i++) {
      makePwdToggler(pwdInputs[i]);
    }
  }


  function showBrandLogoForAppId(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    var appId = params.client_id;
    var brandLogo = document.getElementById('brand_logo');
    if(appId === '2694138a-cd43-4c83-b319-d50e9364aca3'){
      brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/assets/MaxfactorLogoWhite.svg';
    } else if(appId === '2'){
      brandLogo.src = 'assets/img/brand2.png';
    } else {
      brandLogo.src = '';
      brandLogo.style.display = 'none';
    }
  }
  
  showBrandLogoForAppId();
  setupPwdTogglers();
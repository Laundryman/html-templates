function makePwdToggler(pwd){
    // Create show-password checkbox
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    var id = pwd.id + 'toggler';
    checkbox.setAttribute('id', id);
  
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.classList.add('show-password');
    label.appendChild(document.createTextNode('show password'));
  
    var div = document.createElement('div');
    div.classList.add('show-password-container');
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
    switch(appId){

      case 'af63d234-d5e9-4321-83f4-42bead20c24b':
        brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/Diam_Logon_Maybelline.jpg';
        break;
      case '54e120b8-1dcb-4bde-9b1b-8d96bba3e516':
        brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/Diam_Logon_Maybelline.jpg';
        break;
      case 'c4d27c0a-0085-42a5-ab3c-6b99d56d76f4':
        brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/Diam_Logon_Loreal.jpg';
        break;
      case '066bc3fe-025b-483b-a374-8d094cea3664':
        brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/Diam_Logon_Rimmel.jpg';
        break;
      case '2694138a-cd43-4c83-b319-d50e9364aca3':
        brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/Diam_Logon_MXF.jpg';
        break;
      case '875c6bda-637e-4af1-ba58-1f6c6f37fd78':
        brandLogo.src = 'https://diamb2c.blob.core.windows.net/diamdiagramm/Diam_Logon_NYX.jpg';
        break;
      default:
        brandLogo.src = '';
        brandLogo.style.display = 'none';
    }

  }
 
  $(document).ready(function(){
  // window.onload = function(){
    showBrandLogoForAppId();
    setupPwdTogglers();
  });
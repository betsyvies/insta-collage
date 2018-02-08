$(document).ready(() =>{
  alert('Tu Password debe contener letras mayusculas y minuscula, 2 cacteres especial y numeros')
  cl = console.log;

  let $auth = firebase.auth();

  let $btnSignup = $('#btn-signup');

  let $inputEmail = $('#inputUser');
  let $inputPassword = $('#inputPassword');

  $inputEmail.on('input',(event) => {
    let $email = $inputEmail.val();
    cl($email);
    functionValidateEmail($email,$inputEmail);
  });

  $inputPassword.on('input',(event) => {
    let $password = $inputPassword.val();
    cl($password);
    functionValidatePassword($password,$inputPassword);
  });
  
  // activeButton($btnLogin);  

    $btnSignup.on('click', (event) => {  
      let $promise = $auth.createUserWithEmailAndPassword($email, $password);
      $promise.catch(event => alert(event.message));    
      window.location.href = '../index.html';
  });
});

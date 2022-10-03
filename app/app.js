function init(){
  $("#submit").on("click", function(e){
    //stops button from changing the page
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();

     if(username != "" && password != ""){
       Swal.fire('Logged in!')
     }else{
       Swal.fire('Either username or password is missing.')
    }
  });
}

$(document).ready(function(){
    init();
});
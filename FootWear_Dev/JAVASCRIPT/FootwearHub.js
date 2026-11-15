$(document).ready(function(){
  // Registration button
  $("#NewRegistration").on('click', function(){
    location.href = "Registration.html";
  });

  // Exclusive product buttons
  $(".btn.btn-info.Exclusive").on('click', function(){
    location.href = "OnlineProducts.html";
  });
  $(".btn.btn-info.ExclusiveSports").on('click', function(){
    location.href = "OnlineProducts.html#sports";
  });
  $(".btn.btn-info.ExclusiveSneakers").on('click', function(){
    location.href = "OnlineProducts.html#sneakers";
  });

  // Formal shoes quick button
  $(".btn.btn-info.FormalShoes").on('click', function(){
    location.href = "FormalShoeslist.html";
  });

  // Add to cart and buy now
  $(".btn.btn-info.AddToCart").on('click', function(){
    location.href = "AddedToCartSuccessfulmessage.html";
  });
  $(".btn-success.BuyNow").on('click', function(){
    location.href = "PaymentSuccessfulmessage.html";
  });

  // Registration form validation/submit
  $('#first_form').submit(function(e){
    e.preventDefault();
    var first_name = $('#firstname').val() || '';
    var last_name = $('#lastname').val() || '';
    var email = $('#emailId').val() || '';
    var contactnumber = $('#contactNumber').val() || '';
    var username = $('#usr').val() || '';
    var password = $('#pwd').val() || '';
    $(".error").remove();
    if (first_name.length < 1) {
      $('#firstname').after('<span class="error">This field is required</span>');
      return;
    }
    if (last_name.length < 1) {
      $('#lastname').after('<span class="error">This field is required</span>');
      return;
    }
    if (email.length < 1) {
      $('#emailId').after('<span class="error">This field is required</span>');
      return;
    }
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(email)) {
      $('#emailId').after('<span class="error">Enter a valid email</span>');
      return;
    }
    if (contactnumber.length < 1) {
      $('#contactNumber').after('<span class="error">This field is required</span>');
      return;
    }
    if (username.length < 1) {
      $('#usr').after('<span class="error">This field is required</span>');
      return;
    }
    if (password.length < 1) {
      $('#pwd').after('<span class="error">This field is required</span>');
      return;
    }
    location.href = "RegistrationSuccessfulmessage.html";
  });

  // Login form handling (limit attempts)
  var trialCount = 0;
  $('#second_form').submit(function(e){
    e.preventDefault();
    $(".error").remove();
    var user_name = $('#usr').val() || '';
    var password = $('#pwd').val() || '';
    if (trialCount >= 3) {
      $('#pwd').after('<span class="error">You tried 3 times already !!! - start from beginning </span>');
      return;
    }
    if (user_name.length < 1 || password.length < 1) {
      $('#pwd').after('<span class="error">Both Username and Password field are required</span>');
      trialCount++;
      return;
    }
    // On success, navigate to shoe types
    location.href = "ShoeTypes.html";
  });

  /****************** functionality related to hide and show of the Online Products Table *************************************/
  // Formal shoes
  $(".formalshoetable").hide();
  $(".formalshoedropup").hide();
  $(".formalshoedropdown").on('click', function(){
    $(".formalshoetable").toggle(500);
    $(".formalshoedropup").show();
    $(".formalshoedropdown").hide();
  });
  $(".formalshoedropup").on('click', function(){
    $(".formalshoetable").hide();
    $(".formalshoedropdown").show();
    $(".formalshoedropup").hide();
  });

  // Sports shoes
  $(".sportsshoetable").hide();
  $(".sportsshoedropup").hide();
  $(".sportsshoedropdown").on('click', function(){
    $(".sportsshoetable").toggle(500);
    $(".sportsshoedropup").show();
    $(".sportsshoedropdown").hide();
  });
  $(".sportsshoedropup").on('click', function(){
    $(".sportsshoetable").hide();
    $(".sportsshoedropdown").show();
    $(".sportsshoedropup").hide();
  });

  // Sneakers
  $(".sneakersshoetable").hide();
  $(".sneakersshoedropup").hide();
  $(".sneakershoedropdown").on('click', function(){
    $(".sneakersshoetable").toggle(500);
    $(".sneakersshoedropup").show();
    $(".sneakershoedropdown").hide();
  });
  $(".sneakersshoedropup").on('click', function(){
    $(".sneakersshoetable").hide();
    $(".sneakershoedropdown").show();
    $(".sneakersshoedropup").hide();
  });

  // On page load, if OnlineProducts has a hash, auto-open that section and scroll to it
  var hash = window.location.hash;
  try {
    if(hash === '#sports'){
      $(".sportsshoetable").show();
      $(".sportsshoedropup").show();
      $(".sportsshoedropdown").hide();
      if($(".SportsShoesTitle").length){
        $('html, body').animate({scrollTop: $(".SportsShoesTitle").offset().top - 50}, 500);
      }
    }
    else if(hash === '#sneakers'){
      $(".sneakersshoetable").show();
      $(".sneakersshoedropup").show();
      $(".sneakershoedropdown").hide();
      if($(".SneakerShoesTitle").length){
        $('html, body').animate({scrollTop: $(".SneakerShoesTitle").offset().top - 50}, 500);
      }
    }
    else if(hash === '#formal' || hash === '#formalshoes'){
      $(".formalshoetable").show();
      $(".formalshoedropup").show();
      $(".formalshoedropdown").hide();
      if($(".FormalShoesTitle").length){
        $('html, body').animate({scrollTop: $(".FormalShoesTitle").offset().top - 50}, 500);
      }
    }
  } catch(e){
    // fail silently if selectors not present
  }

});

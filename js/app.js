$(document).ready(function() {
  $('#inputTask').focus();
  $(document)
  //Adding to list
  .on('click', '.add-button', function(event) {
    event.preventDefault();
    var itemToAdd = $('input[name="item-input"]').val();
    if (itemToAdd) {
      var addedItem = $('<div class="item-container"><p>' + itemToAdd + '</p><button class="btn btn-success complete-button"><i class="fa fa-check-square"></i></button><button class="btn btn-danger remove-button"><i class="fa fa-trash"></i></button></div>').hide().fadeIn(1000);
      $('.list-items').append(addedItem);
    }
    $('#inputTask').val('');
    // $('#inputTask').focus();
    $('.drag-box').fadeIn(800);
  })
  //Complete item
  .on('click', '.complete-button', function() {
    $(this).parent().animate({
      backgroundColor: "#50ABF9"
    }, 400);
    $(this).remove();
  })
  //Remove item
  .on('click', '.remove-button', function() {
    $(this).parent().fadeOut(800, function() {
      $(this).remove();
    });
  });

  $('.list-items').sortable();
});
//why is there event inside function()? What is the purpose of event?
// Why did you put event.preventDefault();? Why aren't the user able to add anything without that?
// Walk me through the form part 
//on line 9, why did you put in hide()? 
// whenever you click the check button or delete button, why do you put in $(this).remove()?
//especially for the check button?



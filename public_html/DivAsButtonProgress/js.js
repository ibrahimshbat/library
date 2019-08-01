$(document).ready(function() {
  $(".progress-btn").on("click", function() {
    var progressBtn = $(this);
    
    if (!progressBtn.hasClass("active")) {
      progressBtn.addClass("active");
      setTimeout(function() {
        progressBtn.removeClass("active");
      }, 1000000);
    }
  })
});
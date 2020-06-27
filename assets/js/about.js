
/* Initiate Popover */

$(function () {
  $('[data-toggle="popover"]').popover();
});

/* Dismiss Popover */

$('.popover-dismiss').popover({
  trigger: 'focus'
});

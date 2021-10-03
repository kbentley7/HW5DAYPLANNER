var appointTime = ""
var apoointText = ""
var currentTime;
var currentDate;
var currentCountainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;

$(Window).on("load", function () {
    currentDate = monment().format("add MMM Do YYYY, h:m a");
    $("currentDay").append(currentDate);
    currentTime = moment().format("H");

    function renderAppointments() {
      storedAppointments = JSON.parse(localStorage.getItem("appointments"));
      if (storedAppointments !== null) {
          for (i = 0; i < storedAppointments.length; i++) {
              returnedAppointments = storedAppointments[i];
              details = returnedAppointments.details;
              timeIndex = returnedAppointments.time;
              timeIndex = timeIndex.replace(":00", '');
              if (details !== null) {
                  $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
              }
          }
      }
  }


  renderAppointments();

  for (i = 0; i <= 23; i++) {
      CurrentContainer = i;
      if( currentTime ==i) {
          $('#' + CurrentContainer).addClass ("present");
          $('#' + CurrentContainer). children('div').children('div').children("textarea").addClass("present");
      }
      else if (currentTime > i) {
        $('#' + CurrentContainer).addClass("past")
        $('#' + CurrentContainer).children('div'). children('div').children("textarea").addClass("past");
      }
      else {
          $('#' + CurrentContainer).addClass("future");
          $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("future");
      }
  }

})

$(".saveBtn").click(function () {
  appointText = $(this).parent('div').children('div').children('textarea').val();
  appointTime = $(this).parent('div').parent().attr("id");
  appointment = {
      time: appointTime,
      details: appointText
  }
  tempArray = JSON.parse(localStorage.getItem("appointments"));
  if (tempArray === null) {
      localStorage.setItem('appointments', JSON.stringify([{ time: appointTime, details: appointText }]));
  }
  else {
      tempArray.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(tempArray));

  }
  $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + appointText.addClass("textarea") + '</textarea>'));
})


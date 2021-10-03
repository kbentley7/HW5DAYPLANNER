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





})
  


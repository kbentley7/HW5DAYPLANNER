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
})
  



$(function () {
    
    let savebuttonEL = $('.saveBtn')

    savebuttonEL.each(function(event) {
        $(this).on("click", handleFormSubmit);
    });

    
    function displayColor(){
       
        let now = dayjs().format('HH');
        let timeSections = [9, 10, 11, 12, 13, 14, 15, 16, 17];
        for (let i=0; i<timeSections.length; i++){
        if (timeSections[i] > now) {
            $(`#hour-${timeSections[i]}`).addClass('future');
            $(`#hour-${timeSections[i]}`).removeClass('present');
            $(`#hour-${timeSections[i]}`).removeClass('past');
        }
        if (timeSections[i] == now) {
            $(`#hour-${timeSections[i]}`).addClass('present');
            $(`#hour-${timeSections[i]}`).removeClass('future');
            $(`#hour-${timeSections[i]}`).removeClass('past');
        }
        if (timeSections[i] < now) {
            $(`#hour-${timeSections[i]}`).addClass('past');
            $(`#hour-${timeSections[i]}`).removeClass('future');
            $(`#hour-${timeSections[i]}`).removeClass('present');
        }
    }}
    displayColor();
    

    function handleFormSubmit(event){
        event.preventDefault();
        console.log($(this));
        var scheduleEl = $(this).siblings('.description');
        console.log(scheduleEl);
        let scheduleText = scheduleEl.val();
        console.log(scheduleText);
        var blockId = $(this).parent().attr("id");
        localStorage.setItem(blockId, scheduleText);

    };

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    
    var today = dayjs();
    $("#currentDay").text(today.format('MM / DD / YYYY'));
  });
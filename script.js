const absent_input = document.getElementById("absent_day");
absent_input.addEventListener("change",calculateAttendence);

const total_day = document.getElementById("total_days");
total_day.addEventListener("change",calculateAttendence);

function calculateAttendence()
{
    let presentpercentage = 0.00
    let absentday = parseFloat(absent_input.value);
    console.log(absentday);

    let totalday = parseFloat(total_day.value);
    console.log(totalday);

    if(absentday < 0){
        absentday = 0;
    }
    if(totalday < 0){
        totalday = 0;
    }

    // calculate presented day
    let totalpresentday = totalday - absentday;
    console.log(totalpresentday);
    if(totalpresentday == 0 || totalday < absentday){
        // display present percentage
        document.getElementById("attendence_percentage").textContent = 0.00;
    
        // display Present Days
        document.getElementById("present_days").textContent = 0;

        //display a message
        document.getElementById("message").style.display = "block";
    }
    else{

        //display a message
        document.getElementById("message").style.display = "none";

        // calaulate present percentage
        let presentpercentage = (totalpresentday/totalday)*100;
        console.log(presentpercentage);
        // display present percentage
        document.getElementById("attendence_percentage").textContent = `${presentpercentage.toFixed(2)} \ `;
    
        // display Present Days
        document.getElementById("present_days").textContent = ` ${totalpresentday.toFixed(2)} \ `;
    }
}
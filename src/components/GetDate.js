// Utility function to add the suffix to the date
function getDateSuffix(date) {
    const j = date % 10,
          k = date % 100;
    if (j === 1 && k !== 11) {
      return "st";
    }
    if (j === 2 && k !== 12) {
      return "nd";
    }
    if (j === 3 && k !== 13) {
      return "rd";
    }
    return "th";
  }
  
  // Function to format the date
  function GetDate(dayDelta) {
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
  
    // Extracting the day, month, and year
    var [_, month, day, year] = formattedDate.split(' ');
    console.log(month);


    [month, day, year] = month.split('/');

    console.log(month);

    day -= dayDelta;

    if((year % 4) == 0){
      monthDays[1] = 29;
    }

    if(day < 1){
      day = monthDays[(month-1) % 12] - day;
      month = (month-1) % 12;
      if(month == 12){
        year--;
      }
    }

    let dateString = `${year}-${month}-${day}`;
    return dateString;
  }
  

  
  export default GetDate;
  
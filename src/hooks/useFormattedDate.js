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
  function formatCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
  
    // Extracting the day, month, and year
    let [dayName, month, day, year] = formattedDate.split(' ');
    
    // Adjusting the day to add the suffix
    day = parseInt(day).toString() + getDateSuffix(day);
  
    let dateString = `${dayName} ${day} ${month} ${year}`;
    return dateString;
  }
  

  
  export default formatCurrentDate;
  
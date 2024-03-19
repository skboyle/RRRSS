function FormatDate(dateString) {

  const date = new Date(dateString);
    
  if (isNaN(date.getTime())) {
    console.error('Invalid date string:', dateString);
    return '';
  }

  // Extract the month, day, and year components
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  // Format the date components into mm/dd/yyyy format
  return `${month}/${day}/${year}`;
}

export default FormatDate;
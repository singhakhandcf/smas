export const tableToCSV = (tableId: string): void => {
  // Variable to store the final csv data
  // eslint-disable-next-line prefer-const
  let csvData: string[] = [];

  // Get reference to the table
  const table = document.getElementById(tableId);

  if (table) {
    // Get each row data
    const rows = table.getElementsByTagName("tr");

    // Process each row
    for (let i = 0; i < rows.length; i++) {
      // Get each column data
      const cols = rows[i].querySelectorAll("td,th");

      // Stores each csv row data
      const csvrow: string[] = [];

      // Process each column
      for (let j = 0; j < cols.length; j++) {
        // Get the text data of each cell and push it to csvrow
        const cellText = (cols[j] as HTMLElement).innerText;
        // Wrap the cell text in double quotes to handle special characters like commas
        const csvCell = `"${cellText}"`;
        csvrow.push(csvCell);
      }

      // Combine each column value with a comma
      csvData.push(csvrow.join(","));
    }

    const csvContent = csvData.join("\n");

    // Call this function to download csv file
    downloadCSVFile(csvContent);
  }
};

const downloadCSVFile = (csvData: string): void => {
  // Create CSV file object and feed our csvData into it
  const CSVFile = new Blob([csvData], { type: "text/csv" });

  // Create a temporary link to initiate the download process
  const tempLink = document.createElement("a");

  // Download csv file
  tempLink.download = "Mess-Reports.csv";
  const url = window.URL.createObjectURL(CSVFile);
  tempLink.href = url;

  // This link should not be displayed
  tempLink.style.display = "none";
  document.body.appendChild(tempLink);

  // Automatically click the link to trigger download
  tempLink.click();
  document.body.removeChild(tempLink);
};

export const sanitizeName = (name: string): string => {
  if (name === undefined || name === null || name === "undefined") {
    return "";
  }
  return name;
};

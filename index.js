document.addEventListener('DOMContentLoaded', () => {
    const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
  
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => DISPLAY(data.results)) 
      .catch((error) => console.error("Error fetching data:", error));
  });
  

  function DISPLAY(records) {
    const tableBody = document.querySelector("#data tbody");
  
    

    records.forEach((record) => {
      const DATA = document.createElement("tr");
      DATA.innerHTML = `
        <td>${record.year || "N/A"}</td>
        <td>${record.semester || "N/A"}</td>
        <td>${record.the_programs || "N/A"}</td>
        <td>${record.nationality || "N/A"}</td>
        <td>${record.colleges || "N/A"}</td>
        <td>${record.number_of_students || "N/A"}</td>
      `;
      tableBody.appendChild(DATA);
    });
  }
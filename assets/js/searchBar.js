// import { getAllFlight } from "./getterAndSetter.js"
// // import {displayFlights} from'./dashBoard.js'

// const flights = getAllFlight();

// export function createSearchBar (){

   
//     const searchBarElement = document.getElementById('searchBar');

//     const searchSection = document.createElement('section');
//     searchSection.className = 'search-section';
    
  
//     const fromLabel = document.createElement('label');
//     fromLabel.for = 'from';
//     fromLabel.textContent = 'From';
//     const fromSelect = document.createElement('select');
//     fromSelect.id = 'from';
//     fromSelect.className = 'country-select';
//     const fromOptions = ['New York', 'Chicago', 'Los Angeles', 'San Francisco', 'Boston', 'Miami'];
//     fromOptions.forEach((option) => {
//         const optionElement = document.createElement('option');
//         optionElement.value = option;
//         optionElement.textContent = option;
//         fromSelect.appendChild(optionElement);
//     });
    
    
//     const whereLabel = document.createElement('label');
//     whereLabel.for = 'where';
//     whereLabel.textContent = 'Where';
//     const whereSelect = document.createElement('select');
//     whereSelect.id = 'where';
//     whereSelect.className = 'country-select';
//     const whereOptions = ['Los Angeles', 'Miami', 'New York', 'Seattle', 'Washington, D.C.', 'Chicago'];
//     whereOptions.forEach((option) => {
//         const optionElement = document.createElement('option');
//         optionElement.value = option;
//         optionElement.textContent = option;
//         whereSelect.appendChild(optionElement);
//     });
    
 
//     const checkInLabel = document.createElement('label');
//     checkInLabel.for = 'check-in';
//     checkInLabel.textContent = 'Check In';
//     const checkInInput = document.createElement('input');
//     checkInInput.type = 'date';
//     checkInInput.id = 'check-in';
    
   
//     const checkOutLabel = document.createElement('label');
//     checkOutLabel.for = 'check-out';
//     checkOutLabel.textContent = 'Check Out';
//     const checkOutInput = document.createElement('input');
//     checkOutInput.type = 'date';
//     checkOutInput.id = 'check-out';
    
   
//     const cabinClassLabel = document.createElement('label');
//     cabinClassLabel.for = 'cabin-class';
//     cabinClassLabel.textContent = 'Cabin Class';
//     const cabinClassSelect = document.createElement('select');
//     cabinClassSelect.id = 'cabin-class';
//     cabinClassSelect.className = 'cabin-class-select';
//     const cabinClassOptions = ['Economy', 'Business', 'First Class'];
//     cabinClassOptions.forEach((option) => {
//         const optionElement = document.createElement('option');
//         optionElement.value = option;
//         optionElement.textContent = option;
//         cabinClassSelect.appendChild(optionElement);
//     });
    
   
//     const searchButton = document.createElement('button');
//     const searchIcon = document.createElement('i');
//     searchIcon.className = "fas fa-search";
//     searchIcon.fontSize = "24px";
    
//     searchButton.className = 'search-button';
//     searchButton.appendChild(searchIcon);
    
    
//     searchSection.appendChild(fromLabel);
//     searchSection.appendChild(fromSelect);
//     searchSection.appendChild(whereLabel);
//     searchSection.appendChild(whereSelect);
//     searchSection.appendChild(checkInLabel);
//     searchSection.appendChild(checkInInput);
//     searchSection.appendChild(checkOutLabel);
//     searchSection.appendChild(checkOutInput);
//     searchSection.appendChild(cabinClassLabel);
//     searchSection.appendChild(cabinClassSelect);
//     searchSection.appendChild(searchButton);
    
//     searchBarElement.appendChild(searchSection);
    

//     searchSection.style.padding = '32px 24px';
//     searchSection.style.border = '1px solid #FFFFFF';
//     searchSection.style.borderRadius = '10px';
//     searchSection.style.backgroundColor = '#FFFFFF';
//     searchSection.style.display = 'flex';
//     searchSection.style.justifyContent = 'space-between';
//     searchSection.style.alignItems = 'center';
//     searchSection.style.width ="1232px";
//     searchSection.style.height = "120px";
//     searchSection.style.position = "relative";
//     const inputElements = document.querySelectorAll('.country-select, #check-in, #check-out, .cabin-class-select');
//     inputElements.forEach((input) => {
//         input.style.padding = '16px';
//         input.style.marginRight = '10px';
//         input.style.border = '1px solid #79747E';
//         input.style.borderRadius = '4px';
//         input.style.width = '250px';
//         input.style.height = '56px';
//         input.style.color = "#1C1B1F";
//     });
    
//     searchButton.style.padding = '10px 20px';
//     searchButton.style.backgroundColor = '#007bff';
//     searchButton.style.color = '#112211';
//     searchButton.style.border = 'none';
//     searchButton.style.borderRadius = '5px';
//     searchButton.style.width = '56px';
//     searchButton.style.height = '56px';
//     searchButton.style.background = "#8DD3BB";

//     const labels = document.querySelectorAll('label');
//     labels.forEach((label) => {
//         label.style.fontWeight = 'bold';
//         label.style.fontSize = '14px';
//         label.style.position = "absolute";
//         label.style.background = "#fff"
//         label.style.top = "3ex";
//         label.style.padding = "0 5px";
    
//     });
    
//     whereLabel.style.marginLeft = "1.5em";
//     fromLabel.style.marginLeft = "18em";
//     checkInLabel.style.marginLeft = "34em";
//     checkOutLabel.style.marginLeft = "50em";
//     cabinClassLabel.style.marginLeft = "66em";
//  }


//  document.addEventListener("DOMContentLoaded", function() {
    
//     const searchFromInput = document.getElementById('from');
//     const searchToInput = document.getElementById('where');
//     const searchCheckInInput = document.getElementById('check-in');
//     const searchCheckOutInput = document.getElementById('check-out');
//     const searchCabinClassInput = document.getElementById('cabin-class');
//     const searchResults = document.getElementById('list');
//     searchFromInput.addEventListener('input', handleLiveSearch);
//     searchToInput.addEventListener('input', handleLiveSearch);
//     searchCheckInInput.addEventListener('input', handleLiveSearch);
//     searchCheckOutInput.addEventListener('input', handleLiveSearch);
//     searchCabinClassInput.addEventListener('input', handleLiveSearch);


//     function handleLiveSearch() {
        
//         const fromQuery = searchFromInput.value.trim().toLowerCase();
//         const toQuery = searchToInput.value.trim().toLowerCase();
//         const checkInQuery = searchCheckInInput.value.trim();
//         const checkOutQuery = searchCheckOutInput.value.trim();
//         const cabinClassQuery = searchCabinClassInput.value.trim().toLowerCase();

       
//         const filteredFlights = flights.filter((flight) => {
//             return (
//                 flight.from.toLowerCase().includes(fromQuery) &&
//                 flight.to.toLowerCase().includes(toQuery) &&
//                 flight.departureTime.includes(checkInQuery) &&
//                 flight.arrivalTime.includes(checkOutQuery) &&
//                 flight.classOptions.hasOwnProperty(cabinClassQuery)
//             );
//         });

//         searchResults.innerHTML = '';

//         if (filteredFlights.length > 0) {

//             displayFlights(filteredFlights);

//         } else {   // No matching flights found.
          
//             const noResultsElement = document.createElement('section');
//             noResultsElement.textContent = 'No matching flights found.';
//             searchResults.appendChild(noResultsElement);
//         }
//     }

// });

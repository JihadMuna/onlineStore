import { getAllPerfume } from "./getterAndSetter.js";

const perfumes = getAllPerfume();

export function createSearchBar() {
    const searchBarElement = document.getElementById('searchBar');
    const searchSection = document.createElement('section');
    searchSection.className = 'search-section';

    const nameLabel = document.createElement('label');
    nameLabel.for = 'perfumeName';
    nameLabel.textContent = 'Perfume Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'perfumeName';
    nameInput.className = 'perfume-input';

    const brandLabel = document.createElement('label');
    brandLabel.for = 'perfumeBrand';
    brandLabel.textContent = 'Perfume Brand';
    const brandInput = document.createElement('input');
    brandInput.type = 'text';
    brandInput.id = 'perfumeBrand';
    brandInput.className = 'perfume-input';

    const sizeLabel = document.createElement('label');
    sizeLabel.for = 'perfumeSize';
    sizeLabel.textContent = 'Size (more than)';
    const sizeInput = document.createElement('input');
    sizeInput.type = 'number';
    sizeInput.id = 'perfumeSize';
    sizeInput.className = 'perfume-input';

    const priceLabel = document.createElement('label');
    priceLabel.for = 'perfumePrice';
    priceLabel.textContent = 'Price (less than)';
    const priceInput = document.createElement('input');  // Change to text
    priceInput.type = 'text';  // Change to text
    priceInput.id = 'perfumePrice';
    priceInput.className = 'perfume-input';

    const searchButton = document.createElement('button');
    const searchIcon = document.createElement('i');
    searchIcon.className = "fas fa-search";
    searchIcon.fontSize = "24px";

    searchButton.className = 'search-button';
    searchButton.appendChild(searchIcon);

    searchSection.appendChild(nameLabel);
    searchSection.appendChild(nameInput);
    searchSection.appendChild(brandLabel);
    searchSection.appendChild(brandInput);
    searchSection.appendChild(sizeLabel);
    searchSection.appendChild(sizeInput);
    searchSection.appendChild(priceLabel);
    searchSection.appendChild(priceInput);
    searchSection.appendChild(searchButton);

    searchBarElement.appendChild(searchSection);

    searchSection.style.padding = '32px 24px';
    searchSection.style.border = '1px solid #FFFFFF';
    searchSection.style.borderRadius = '10px';
    searchSection.style.backgroundColor = '#FFFFFF';
    searchSection.style.display = 'flex';
    searchSection.style.justifyContent = 'space-between';
    searchSection.style.alignItems = 'center';
    searchSection.style.width = "1232px";
    searchSection.style.height = "120px";
    searchSection.style.position = "relative";

    const inputElements = document.querySelectorAll('.perfume-input');
    inputElements.forEach((input) => {
        input.style.padding = '16px';
        input.style.marginRight = '10px';
        input.style.border = '1px solid #79747E';
        input.style.borderRadius = '4px';
        input.style.width = '250px';
        input.style.height = '56px';
        input.style.color = "#1C1B1F";
    });

    searchButton.style.padding = '10px 20px';
    searchButton.style.backgroundColor = '#007bff';
    searchButton.style.color = '#112211';
    searchButton.style.border = 'none';
    searchButton.style.borderRadius = '5px';
    searchButton.style.width = '56px';
    searchButton.style.height = '56px';
    searchButton.style.background = "#8DD3BB";

    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
        label.style.fontWeight = 'bold';
        label.style.fontSize = '14px';
        label.style.position = "absolute";
        label.style.background = "#fff"
        label.style.top = "3ex";
        label.style.padding = "0 5px";
    });

    brandLabel.style.marginLeft = "1.5em";
    nameLabel.style.marginLeft = "18em";
    sizeLabel.style.marginLeft = "34em";
    priceLabel.style.marginLeft = "50em";
}

document.addEventListener("DOMContentLoaded", function () {
    const searchNameInput = document.getElementById('perfumeName');
    const searchBrandInput = document.getElementById('perfumeBrand');
    const searchSizeInput = document.getElementById('perfumeSize');
    const searchPriceInput = document.getElementById('perfumePrice');
    const searchResults = document.getElementById('list');
    searchNameInput.addEventListener('input', handleLiveSearch);
    searchBrandInput.addEventListener('input', handleLiveSearch);
    searchSizeInput.addEventListener('input', handleLiveSearch);
    searchPriceInput.addEventListener('input', handleLiveSearch);

    function handleLiveSearch() {
        const nameQuery = searchNameInput.value.trim().toLowerCase();
        const brandQuery = searchBrandInput.value.trim().toLowerCase();
        const sizeQuery = parseFloat(searchSizeInput.value);
        const priceQuery = parseFloat(searchPriceInput.value);

        const filteredPerfumes = perfumes.filter((perfume) => {
            return (
                perfume.name.toLowerCase().includes(nameQuery) ||
                perfume.brand.toLowerCase().includes(brandQuery) ||
                perfume.size >= sizeQuery ||
                perfume.price <= priceQuery
            );
        });

        searchResults.innerHTML = '';

        if (filteredPerfumes.length > 0) {
            displayPerfumes(filteredPerfumes);
        } else {
            const noResultsElement = document.createElement('section');
            noResultsElement.textContent = 'No matching perfumes found.';
            noResultsElement.style.fontSize = '32px';
            noResultsElement.style.color = "#fafbfc"
            searchResults.appendChild(noResultsElement);
        }
    }
});

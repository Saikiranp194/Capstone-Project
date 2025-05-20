const baseURL = '/api'; 

async function fetchData() {
    try {
        const collectionResponse = await fetch(`${baseURL}/recycle-collection`);
        const revenueResponse = await fetch(`${baseURL}/recycle-revenue`);
        const landfillResponse = await fetch(`${baseURL}/landfill-expense`);

        const collections = await collectionResponse.json();
        const revenues = await revenueResponse.json();
        const landfills = await landfillResponse.json();

        populateCollectionTable(collections);
        populateRevenueTable(revenues);
        populateLandfillTable(landfills);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// Function to populate revenue table
function populateRevenueTable(data) {
    const tbody = document.getElementById('revenue-list');
    tbody.innerHTML = ''; // Clear existing rows

    data.forEach(entry => {
        const row = document.createElement('tr');

        // Format the saleDate
        const saleDate = new Date(entry.saleDate).toLocaleDateString();

        // Get materialType values, including nested objects
        const aluminum = entry.materialType.aluminum;
        const cardboard = entry.materialType.cardboard;
        const glass = entry.materialType.glass;
        const metalCans = entry.materialType.metal.cans;
        const metalScrap = entry.materialType.metal.scrap;
        const paperBooks = entry.materialType.paper.books;
        const paperMixed = entry.materialType.paper.mixed;
        const paperNewspaper = entry.materialType.paper.newspaper;
        const paperWhite = entry.materialType.paper.white;
        const plasticPET = entry.materialType.plastic.PET;
        const plasticHDPEColored = entry.materialType.plastic.HDPEColored;
        const plasticHDPENatural = entry.materialType.plastic.HDPENatural;

        // Construct table row with material type values
        row.innerHTML = `
            <td>${saleDate}</td>
            <td>${aluminum}</td>
            <td>${cardboard}</td>
            <td>${glass}</td>
            <td>${metalCans}</td>
            <td>${metalScrap}</td>
            <td>${paperBooks}</td>
            <td>${paperMixed}</td>
            <td>${paperNewspaper}</td>
            <td>${paperWhite}</td>
            <td>${plasticPET}</td>
            <td>${plasticHDPEColored}</td>
            <td>${plasticHDPENatural}</td>
            <td>${entry.buyer}</td>
        `;

        tbody.appendChild(row);
    });
}

// Function to populate the table with landfill data
function populateLandfillTable(data) {
    const tbody = document.getElementById('landfill-list');
    tbody.innerHTML = ''; 

    data.forEach(entry => {
        const row = document.createElement('tr');
        let date = new Date(entry.landfillDate).toLocaleDateString();

        row.innerHTML = `
            <td>${date}</td>
            <td>${entry.weight}</td>
            <td>${entry.expense}</td>
            <td>${entry.landfillHauler}</td>
        `;
        tbody.appendChild(row);
    });
}


// Function to populate collection table
function populateCollectionTable(data) {
    const tbody = document.getElementById('collection-list');
    tbody.innerHTML = '';

    data.forEach(entry => {
        const row = document.createElement('tr');
        const date = new Date(entry.date).toLocaleDateString();

        const foodWaste = entry.foodWaste;
        const aluminum = entry.aluminum;
        const cardboard = entry.cardboard;
        const glass = entry.glass;
        const metalCans = entry.metal.cans;
        const metalScrap = entry.metal.scrap;
        const paperBooks = entry.paper.books;
        const paperMixed = entry.paper.mixed;
        const paperNewspaper = entry.paper.newspaper;
        const paperWhite = entry.paper.white;
        const plasticPET = entry.plastic.PET;
        const plasticHDPEColored = entry.plastic.HDPEColored;
        const plasticHDPENatural = entry.plastic.HDPENatural;

        row.innerHTML = `
            <td>${date}</td>
            <td>${foodWaste}</td>
            <td>${aluminum}</td>
            <td>${cardboard}</td>
            <td>${glass}</td>
            <td>${metalCans}</td>
            <td>${metalScrap}</td>
            <td>${paperBooks}</td>
            <td>${paperMixed}</td>
            <td>${paperNewspaper}</td>
            <td>${paperWhite}</td>
            <td>${plasticPET}</td>
            <td>${plasticHDPEColored}</td>
            <td>${plasticHDPENatural}</td>
        `;
        tbody.appendChild(row);
    });
}


// Function to add data
async function addData(type, data) {
    try {
        const response = await fetch(`${baseURL}/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            await fetchData();
        }
    } catch (error) {
        console.error('Error adding data:', error);
    }
}


// Event listeners for forms
document.getElementById('collection-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        date: new Date(document.getElementById('collection-date').value), // Ensure it's a Date object
        foodWaste: parseFloat(document.getElementById('food-waste').value) || 0, // Convert to number and default to 0
        aluminum: parseFloat(document.getElementById('aluminum').value) || 0,
        cardboard: parseFloat(document.getElementById('cardboard').value) || 0,
        glass: parseFloat(document.getElementById('glass').value) || 0,
        metal: {
            cans: parseFloat(document.getElementById('metal-cans').value) || 0,
            scrap: parseFloat(document.getElementById('metal-scrap').value) || 0
        },
        paper: {
            books: parseFloat(document.getElementById('paper-books').value) || 0,
            mixed: parseFloat(document.getElementById('paper-mixed').value) || 0,
            newspaper: parseFloat(document.getElementById('paper-newspaper').value) || 0,
            white: parseFloat(document.getElementById('paper-white').value) || 0
        },
        plastic: {
            PET: parseFloat(document.getElementById('plastic-pet').value) || 0,
            HDPEColored: parseFloat(document.getElementById('plastic-hdpe-colored').value) || 0,
            HDPENatural: parseFloat(document.getElementById('plastic-hdpe-natural').value) || 0
        }
    };
    
    await addData('recycle-collection', data);
    document.getElementById('collection-form').reset();
});

document.getElementById('revenue-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        saleDate: new Date(document.getElementById('revenue-date').value), // Ensure it's a Date object
        materialType: {
            aluminum: parseFloat(document.getElementById('revenue-aluminum').value) || 0,
            cardboard: parseFloat(document.getElementById('revenue-cardboard').value) || 0,
            glass: parseFloat(document.getElementById('revenue-glass').value) || 0,
            metal: {
                cans: parseFloat(document.getElementById('revenue-metal-cans').value) || 0,
                scrap: parseFloat(document.getElementById('revenue-metal-scrap').value) || 0,
            },
            paper: {
                books: parseFloat(document.getElementById('revenue-paper-books').value) || 0,
                mixed: parseFloat(document.getElementById('revenue-paper-mixed').value) || 0,
                newspaper: parseFloat(document.getElementById('revenue-paper-newspaper').value) || 0,
                white: parseFloat(document.getElementById('revenue-paper-white').value) || 0,
            },
            plastic: {
                PET: parseFloat(document.getElementById('revenue-plastic-pet').value) || 0,
                HDPEColored: parseFloat(document.getElementById('revenue-plastic-hdpe-colored').value) || 0,
                HDPENatural: parseFloat(document.getElementById('revenue-plastic-hdpe-natural').value) || 0,
            }
        },
        revenue: 0, // You can calculate this based on the material revenues if needed
        buyer: document.getElementById('buyer').value || '' // Default to empty string if not provided
    };
    
    await addData('recycle-revenue', data);
    document.getElementById('revenue-form').reset();
});

document.getElementById('landfill-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        landfillDate: document.getElementById('landfill-date').value,
        weight: document.getElementById('landfill-weight').value,
        expense: document.getElementById('landfill-expense').value,
        landfillHauler: document.getElementById('landfill-hauler').value,
    };
    await addData('landfill-expense', data);
    document.getElementById('landfill-form').reset();
});

fetchData();

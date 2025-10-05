// Initialize the map centered on Abeokuta
const map = L.map('map').setView([7.1475, 3.3619], 13);

// Add OpenStreetMap tiles for detailed city view
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Add satellite imagery layer
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 19
});

// Add layer control
const baseLayers = {
    "Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }),
    "Satellite View": satelliteLayer
};
L.control.layers(baseLayers).addTo(map);



// Brand icons configuration for petrol stations
const brandIcons = {
    "NNPC": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png    ',
        className: 'brand-nnpc'
    },
    "Total": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png    ',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-total'
    },
    "Oando": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-oando'
    },
    "Conoil": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-conoil'
    },
    "MRS": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-mrs'
    },
    "AP": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-ap'
    },
    "Eterna": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-eterna'
    },
    "Forte Oil": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-forte'
    },
    "default": {
        //iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'brand-default'
    }
};

// Hotel icons configuration (changed to blue color)
const hotelIcons = {
    "5": { 
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/489/489870.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'hotel-5star',
        color: 'blue'
    },
    "4": { 
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/489/489870.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'hotel-4star',
        color: 'blue'
    },
    "3": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/489/489870.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'hotel-3star',
        color: 'blue'
    },
    "2": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/489/489870.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'hotel-2star',
        color: 'blue'
    },
   "default": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/489/489870.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'hotel-default',
        color: 'blue'
    }
};

// New icons for other categories
const categoryIcons = {
    "Church": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/619/619153.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-church',
        color: 'purple'
    },
    "Hospital": {
       // iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
       iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-hospital',
        color: 'red'
    },
    "Pharmacy": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/2061/2061879.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-pharmacy',
        color: 'green'
    },
    "Tourist Center": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/3317/3317971.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-tourist',
        color: 'orange'
    },
    "Eatery": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/857/857718.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-eatery',
        color: 'brown'
    },
    "Event Center": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/2038/2038045.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-event',
        color: 'pink'
    },
    "Mosque": {
        //iconUrl: 'https://cdn-icons-png.flaticon.com/512/2534/2534479.png',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
        className: 'category-mosque',
        color: 'teal'
    }
};


const abeokutaRoads = [
    {
        name: "Abeokuta-Sagamu Expressway",
        position: [7.0372, 3.4458],
        bounds: [[7.02, 3.43], [7.05, 3.46]]
    },
    {
        name: "M.K.O. Abiola Way",
        position: [7.1465, 3.3615],
        bounds: [[7.14, 3.35], [7.15, 3.37]]
    },
    {
        name: "Ibadan Road",
        position: [7.1704, 3.3631],
        bounds: [[7.16, 3.35], [7.18, 3.37]]
    },
    {
        name: "Quarry Road",
        position: [7.1378, 3.3273],
        bounds: [[7.13, 3.32], [    , 3.33]]
    },
    {
        name: "Federal Housing Estate Road",
        position: [7.1253, 3.3583],
        bounds: [[7.12, 3.35], [7.13, 3.36]]
    },
    {
        name: "Obantoko Road",
        position: [7.1875, 3.3926],
        bounds: [[7.18, 3.39], [7.19, 3.40]]
    },
    {
        name: "Itoku Road",
        position: [7.1622, 3.3732],
        bounds: [[7.16, 3.37], [7.17, 3.38]]
    },
    {
        name: "Oke-Ilewo Road",
        position: [7.1361, 3.3335],
        bounds: [[7.13, 3.33], [7.14, 3.34]]
    },
    {
        name: "Lafenwa Road",
        position: [7.1557, 3.3269],
        bounds: [[7.15, 3.32], [7.16, 3.33]]
    },
    {
        name: "Adigbe Road",
        position: [7.1312, 3.3285],
        bounds: [[7.13, 3.32], [7.14, 3.33]]
    }
];

// Sample data for new categories (20 entries each)
const churches = Array(20).fill().map((_, i) => ({
    id: 1000 + i,
    name: `Church ${i+1}`,
    category: "Church",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Church Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "Sun: 8AM-12PM, Wed: 5PM-7PM",
    details: "Place of worship"
}));

const hospitals = Array(20).fill().map((_, i) => ({
    id: 2000 + i,
    name: `Hospital ${i+1}`,
    category: "Hospital",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Hospital Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "24/7",
    details: "Medical facility"
}));

const pharmacies = Array(20).fill().map((_, i) => ({
    id: 3000 + i,
    name: `Pharmacy ${i+1}`,
    category: "Pharmacy",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Pharmacy Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "8AM-10PM Daily",
    details: "Medicine store"
}));

const touristCenters = Array(20).fill().map((_, i) => ({
    id: 4000 + i,
    name: `Tourist Center ${i+1}`,
    category: "Tourist Center",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Tourist Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "9AM-5PM Daily",
    details: "Tourist attraction"
}));

const eateries = Array(20).fill().map((_, i) => ({
    id: 5000 + i,
    name: `Eatery ${i+1}`,
    category: "Eatery",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Eatery Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "8AM-10PM Daily",
    details: "Restaurant/food place"
}));

const eventCenters = Array(20).fill().map((_, i) => ({
    id: 6000 + i,
    name: `Event Center ${i+1}`,
    category: "Event Center",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Event Center Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "By appointment",
    details: "Venue for events"
}));

const mosques = Array(20).fill().map((_, i) => ({
    id: 7000 + i,
    name: `Mosque ${i+1}`,
    category: "Mosque",
    position: [7.1475 + (Math.random()-0.5)*0.1, 3.3619 + (Math.random()-0.5)*0.1],
    address: `Mosque Address ${i+1}, Abeokuta`,
    phone: "080" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
    hours: "Daily prayers",
    details: "Islamic place of worship"
}));

// Combine all categories
const allCategories = [
    ...churches,
    ...hospitals,
    ...pharmacies,
    ...touristCenters,
    ...eateries,
    ...eventCenters,
    ...mosques
];


// Function to determine brand from name
function getBrandFromName(name) {
    if (!name) return 'default';
    if (name.includes('NNPC')) return 'NNPC';
    if (name.includes('Total')) return 'Total';
    if (name.includes('Oando')) return 'Oando';
    if (name.includes('Conoil')) return 'Conoil';
    if (name.includes('MRS')) return 'MRS';
    if (name.includes('AP')) return 'AP';
    if (name.includes('Eterna')) return 'Eterna';
    if (name.includes('Forte')) return 'Forte Oil';
    return 'default';
}

// Function to extract services from details
function extractServices(details) {
    if (!details) return ['Standard Fuel Services'];

    const services = [];
    if (details.includes('petrol') || details.includes('PMS')) services.push('Petrol');
    if (details.includes('diesel')) services.push('Diesel');
    if (details.includes('kerosene')) services.push('Kerosene');
    if (details.includes('LPG') || details.includes('gas station')) services.push('LPG');
    if (details.includes('mini-mart')) services.push('Mini-mart');
    if (details.includes('car wash')) services.push('Car Wash');
    if (details.includes('POS')) services.push('POS Payments');
    if (details.includes('ATM')) services.push('ATM');
    if (details.includes('wheel alignment')) services.push('Wheel Alignment');
    if (details.includes('oil-change')) services.push('Oil Change');
    if (details.includes('toilet') || details.includes('restroom')) services.push('Restrooms');
    return services.length > 0 ? services : ['Standard Fuel Services'];
}

// Function to ensure services is always an array
function ensureServicesArray(services) {
    if (!services) return ['Standard Services'];
    if (Array.isArray(services)) return services;
    if (typeof services === 'string') return [services];
    return ['Standard Services'];
}

// Function to format phone numbers and URLs
function formatContactInfo(contact) {
    if (!contact) return 'Not listed';
    
    // Check if it's a URL
    if (contact.startsWith('http://') || contact.startsWith('https://')) {
        return `<a href="${contact}" target="_blank" class="contact-link">Visit Website</a>`;
    }
    
    // Check if it's a phone number
    const phoneRegex = /(\+?\d[\d\s-]{7,}\d)/;
    if (phoneRegex.test(contact)) {
        // Clean the phone number (remove all non-digit characters except leading +)
        const cleanPhone = contact.replace(/[^\d+]/g, '');
        return `<a href="tel:${cleanPhone}" class="contact-link">${contact}</a>`;
    }
    
    return contact;
}

// Function to create image modal
function createImageModal(imageUrl, name) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imageUrl}" alt="${name}">
            <p>${name}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking X or outside the image
    modal.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
    
    return modal;
}
// Make the createImageModal function available globally
window.createImageModal = createImageModal;

// Function to create star rating HTML
function createStarRating(stars) {
    if (!stars || isNaN(stars)) stars = 0;
    stars = Math.min(5, Math.max(0, Math.floor(stars))); // Ensure stars is between 0-5

    let html = '';
    for (let i = 1; i < 5; i++ ) {
        if (i <= stars) {
            html += '<span class="star">★</span>';
        } //else {
            //html += '<span class="star empty">★</span>';
       // }
    }
    return html;
}


// All petrol stations from the document
const fillingStations = [
     {
        id: 1,
        name: "Anikulapo Petrol Station",
        position: [7.174661034313218, 3.2894530950376915], 
        address: "57FQ+QQG, 111105, Ogun State",
        phone: "Not listed",
        hours: "Daily 07:00-19:00",
        details: "Standard petrol/diesel, typical station amenities. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image1.jpg"
    },
    {
        id: 2,
        name: "NNPC Limited Filling Station",
        position: [7.12525, 3.35803],
        address: "21 Federal Housing Estate Rd, Abeokuta, OG, Nigeria",
        phone: "Not listed",
        hours: "Daily 07:00-19:00",
        details: "PMS/diesel, likely lube & convenience services. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image2.png"
    },
    {
        id: 3,
        name: "Akeemade Petroleum",
        position: [7.166685190527295, 3.3577341709520714],
        address: "Abiola Way, beside NASFAT Mosque, Abeokuta 111101",
        phone: "+234 808 730 9804",
        hours: "Daily 06:00-21:00",
        details: "Fuel (petrol/diesel), noted for reliable meters and good customer service. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image3.png"
    },
    {
        id: 4,
        name: "MAPOLY Petrol Filling Station",
        position: [7.105768746686278, 3.334979223872912],
        address: "Oba Rd, Abeokuta 110104, Ogun State, Nigeria",
        phone: "Not listed",
        hours: "Daily 07:00-19:00",
        details: "Standard fuel services; 'good customer service,' 'well-organized'. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 5,
        name: "TotalEnergies Okeitoku Service Station",
        position: [7.162249650166748, 3.373184810380188],
        address: "48 Oke Ibukun Oshole Street (After Itoku Junction), Abeokuta, Ogun State, Nigeria",
        phone: "+234 805 691 2334",
        hours: "Daily 6:30 AM-9:00 PM",
        details: "Full-service fuel, oil-change bay, toilets. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image4.jpeg"
    },
    {
        id: 6,
        name: "Total Lafenwa Service Station",
        position: [7.157254, 3.325981],
        address: "Beside Lafenwa Market, Abeokuta",
        phone: "+234 805 691 2334",
        hours: "Daily 6:30 AM-9:00 PM",
        details: "Car service facilities, fuel refills. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image5.png"
    },
    {
        id: 7,
        name: "Conoil Filling Station (Obantoko)",
        position: [7.187463447144022, 3.3926491704675295],
        address: "59GV+X59, Abeokuta 110001, Ogun State",
        phone: "Not listed",
        hours: "Daily 6:00 AM-8:30 PM",
        details: "Petrol/diesel; accurate pumps, wheelchair-accessible mall nearby. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image6.png"
    },
    {
        id: 8,
        name: "First Option Petrol Filling Station (Oke Ibukun)",
        position: [7.150, 3.340],
        address: "598H+PJP, Oke Ibukun (Aladesanmi Rd), Abeokuta, 111101, Ogun State",
        phone: "Not listed publicly",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel, kerosene; car wash; mini-mart; ATM/POS; relaxation spot. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image7.png"
    },
    {
        id: 9,
        name: "Total Okeitoku Service Station",
        position: [7.162196424566463, 3.3731526238528824],
        address: "48 Oke Ibukun Oshole Street, Abeokuta, After Itoku Junction, Abeokuta (Opposite Oke Itoku Police Station), 596F+R7 Abeokuta",
        phone: "0805 691 2334, 0803 719 2792",
        hours: "Daily 6:30 AM-9:00 PM",
        details: "Automotive fuel (petrol/diesel), oil-change bay, toilets. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image8.png"
    },
    {
        id: 10,
        name: "Total Kobape Service Station",
        position: [7.037233790112969, 3.445765799953305],
        address: "Abeokuta-Sagamu Expy, Kobape 110118, Ogun State 2CPW+FC Kobape",
        phone: "0700 100 0829, 0805 691 2334, 0803 337 9004",
        hours: "Daily 6:30 AM-9:00 PM",
        details: "Automotive fuel, oil change. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image9.png"
    },
    {
        id: 11,
        name: "Conoil Petrol Station (Omida Road, Ibara)",
        position: [7.139102911078095, 3.333695468898631],
        address: "48QM+6HR, Omida Rd, Ibara, Abeokuta 111102, Ogun State",
        phone: "+234 803 560 9239",
        hours: "Daily 6 AM-11 PM",
        details: "Petrol/diesel, engine oil sales, wheel alignment; two pumps, sales reps present. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image10.png"
    },
    {
        id: 12,
        name: "Fowobi Filling Station (Onikolobo)",
        position: [7.121378244508481, 3.3356617201643344],
        address: "Onikolobo, 110104, 48CP+F7 Abeokuta, Ogun State, Nigeria",
        phone: "Not listed publicly",
        hours: "Daily 6 AM-8:30 PM",
        details: "Petrol only; digital pumps; customer service varies; mainly serves local residential and student areas. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image11.png"
    },
    {
        id: 13,
        name: "Target Gas Station (Obantoko axis) - Permanently closed",
        position: [7.150, 3.335],
        address: "Plus Code 59GQ+P4V, Abeokuta",
        phone: "Not listed",
        hours: "Daily 07:00-19:00",
        details: "Petrol and diesel, well-calibrated pumps, 24-hr generator backup, friendly attendants, quality on-site service. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 14,
        name: "Oyinkansola Filling Station (Adigbe, Onikoko)",
        position: [7.131223301490379, 3.3284664722773223],
        address: "48JH+99Q, Adigbe, Onikoko, Abeokuta 110104, Ogun State",
        phone: "Not listed",
        hours: "Mon/Wed/Thu/Sat/Sun: 8 AM-7 PM, Tue: 8 AM-6 PM, Fri: 10 AM-7 PM",
        details: "Petrol, diesel, kerosene; mini-mart selling engine oil, snacks, cold drinks at regulated prices. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image12.jpeg"
    },
    {
        id: 15,
        name: "Total Ikereku Service Station",
        position: [7.161038190129941, 3.3483386085183673],
        address: "70 Majekodunmi Street, beside Iberekedo Market, opposite Ikija Primary School, Ijeun, Abeokuta 110101, Ogun State",
        phone: "0805 691 2334, 0816 930 2799",
        hours: "Typically Mon-Sun (hours not specified, but likely 6:30 AM-9 PM like sister outlets)",
        details: "Standard fuel, likely oil-change bay & toilets (common to Total branded stations). Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image13.png"
    },
    {
        id: 16,
        name: "Oando Filling Station (Kuto)",
        position: [7.137489243792934, 3.3507170557788744],
        address: "49P2+959, Kuto, Abeokuta 111102, Ogun State",
        phone: "+234 803 204 5555",
        hours: "Daily 6:00 AM-10:00 PM",
        details: "PMS and diesel; on-site mini-mart; wheel alignment bay; restrooms. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image14.png"
    },
    {
        id: 17,
        name: "Oando Filling Station (Asero)",
        position: [7.15095458464677, 3.383508430289951],
        address: "49VP+43C, Olabisi Onabanjo Way, Abeokuta 110118, Ogun State",
        phone: "+234 803 204 5556",
        hours: "Daily 6:00 AM-10:00 PM",
        details: "PMS/diesel, convenience shop, tyre & battery services. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image15.png"
    },
    {
        id: 18,
        name: "Total Adatan Service Station",
        position: [7.170422691464662, 3.3630981950613554],
        address: "Police Station, 75 Ibadan Rd, opposite Adatan, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 6:00 AM-11:00 PM",
        details: "Petrol, diesel; engine oil; wheel alignment; two pumps; sales reps available. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image16.png"
    },
    {
        id: 19,
        name: "NNPC - Ita-Oshin Filling Station",
        position: [7.135950924626855, 3.3066380950611483],
        address: "48M5+349, Ita - Oshin Round About, Abeokuta 121001",
        phone: "+234 1 270 2636",
        hours: "Daily 7:00 AM-8:00 PM",
        details: "PMS/diesel; accurate pumps; quality customer service. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image17.png"
    },
    {
        id: 20,
        name: "Oando Lafenwa Service Station",
        position: [7.155685798360876, 3.326949410404226],
        address: "Lafenwa, Ikeredu-Idan, Abeokuta 121001, Ogun State",
        phone: "+234 1 270 2636",
        hours: "Daily 6 AM-8:30 PM",
        details: "PMS/diesel; restful canopy; accurate pumps; busy commuter. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image18.png"
    },
    {
        id: 21,
        name: "Oyinkansola Filling Station",
        position: [7.158742642137998, 3.3678789815685106],
        address: "5959+C45, Oke Yidi, Abeokuta 111101, Ogun State",
        phone: "08080516786",
        hours: "Daily 6 AM-8:30 PM",
        details: "Petrol, diesel, kerosene; mini-mart selling engine oil, snacks, drinks. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image19.png"
    },
    {
        id: 22,
        name: "Oando Ibara Housing Filling Station",
        position: [7.125204312580214, 3.3425636815682678],
        address: "Ibara Housing Estate, Abeokuta 121001, Ogun State",
        phone: "08149596425",
        hours: "Daily 6 AM-8 PM",
        details: "Petrol/diesel; spacious layout; accurate pumps; no pump cheating. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 23,
        name: "Topnice Oil & Gas LTD (GRA)",
        position: [7.17439346896872, 3.3786024220469764],
        address: "59FH+MF3, Asero, Abeokuta 111101, Ogun State",
        phone: "08064236406",
        hours: "Daily 6 AM-8 PM",
        details: "Petrol/diesel; mini-mart; restrooms; POS-enabled services. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image20.png"
    },
    {
        id: 24,
        name: "Topnice oil and gas LTD",
        position: [7.190175215613965, 3.3776049238972363],
        address: "59QH+X2H oGD ESTATE, Olasunkanmi junction, ASERO, Abeokuta 111101, Ogun State",
        phone: "08064236406",
        hours: "Daily 6 AM-8:30 PM",
        details: "LPG cylinder sales and refilling. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 25,
        name: "World Oil Filling Station (Oke-Ilewo/Ibara)",
        position: [7.136102794047964, 3.333532172769679],
        address: "48PM+9C5, Ibara, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Open until ~1 AM (service extends late)",
        details: "Petrol, diesel, kerosene; POS & cash payments; mini shop; car-tracking systems; efficient attendants. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image21.png"
    },
    {
        id: 26,
        name: "NNPC Mega Station Abeokuta",
        position: [7.126563603858877, 3.3583322969112595],
        address: "49G5+G8J, M.K.O. Abiola Way, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-7 PM",
        details: "Mega-station with ≥12 pumps, supermart, lubrication bay, wheel alignment/balancing, POS payments, wheelchair access. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image22.jpeg"
    },
    {
        id: 27,
        name: "Mobil Petrol Station (Lafenwa)",
        position: [7.155747007780466, 3.3266127815684765],
        address: "584G+6JG, Lafenwa, Abeokuta 111105",
        phone: "Not listed",
        hours: "Open 24 hours daily",
        details: "Petrol/diesel; spacious layout; generator backup; organized premises. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image23.png"
    },
    {
        id: 28,
        name: "First Option Filling Station (Aladesanmi Rd)",
        position: [7.167064527577554, 3.37920398465705],
        address: "598H+PJP, Aladesanmi Rd, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel, kerosene; car-wash; mini-mart; relaxation area; ATM/POS services; reliable pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image24.png"
    },
    {
        id: 29,
        name: "Muyad Filling Station",
        position: [7.166834738162454, 3.302923095061319],
        address: "5883+J5 Km 2, off Ayetoro Road, Abeokuta, Nigeria",
        phone: "Not listed",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; car engine oil; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image25.png"
    },
    {
        id: 30,
        name: "Al Rahman Oil and Gas",
        position: [7.179686333231998, 3.400601104071604],
        address: "5CH2+Q6P, Obantoko, Abeokuta 110121, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel; car engine oil; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image26.png"
    },
    {
        id: 31,
        name: "M.A. Ike Anobi Filling Station",
        position: [7.158947261232528, 3.3236848104042194],
        address: "585F+GF2, Lafenwa, Abeokuta 110101, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel; car engine oil; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image27.png"
    },
    {
        id: 32,
        name: "SURI-BEE",
        position: [7.193367491907211, 3.3535579104044464],
        address: "59V3+7C 35 Federal Housing Estate Rd, Abeokuta 110101, Ogun State, Nigeria",
        phone: "Not listed",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel; car engine oil; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image28.png"
    },
    {
        id: 33,
        name: "Fanimora Petrol Station",
        position: [7.176498767784889, 3.3578384392400777],
        address: "59G5+F4V, Saje, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel; car engine oil; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image30.png"
    },
    {
        id: 34,
        name: "MRS Filling Station",
        position: [7.14949132466485, 3.3434816917340116],
        address: "48XV+Q9 Premier Grammar School, Igbein 111102, Abeokuta, Ogun State, Nigeria",
        phone: "08033184450",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 35,
        name: "Moboluwaduro Filling Station",
        position: [7.181963964710134, 3.347445123897185],
        address: "58JW+MXM, Abeokuta 110101, Ogun State",
        phone: "08033313418",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image31.png"
    },
    {
        id: 36,
        name: "Sunny Yinka Oil & Gas",
        position: [7.13979565142895, 3.3651049355395433],
        address: "M.K.O. Abiola Way, Abeokuta 111102, Ogun State",
        phone: "09059304740",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image32.png"
    },
    {
        id: 37,
        name: "JELFAD GAS & OIL",
        position: [7.181141465173024, 3.3501506527328937],
        address: "59J2+932, Kugba Road, Saje, Abeokuta 110101, Ogun State",
        phone: "08036670100",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image33.png"
    },
    {
        id: 38,
        name: "Jofax Filling Station",
        position: [7.159471496590696, 3.3691119950613015],
        address: "5959+PJ5, Abiola Way, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image34.png"
    },
    {
        id: 39,
        name: "Nipco Filling Station",
        position: [7.157013785966876, 3.343758068075693],
        address: "584V+MF8, Itoku, Ijeun, Abeokuta 110101, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments; reliable fuel pumps. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image35.png"
    },
    {
        id: 40,
        name: "Funkie Oil Ventures",
        position: [7.188121471534633, 3.423313095061473],
        address: "5CQF+58W, Unnamed Road, Abeokuta 110121, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-10 PM",
        details: "Accessibility Wheelchair-accessible entrance, Wheelchair-accessible toilet Offerings: Car wash, Propane exchange, Amenities: Toilet, Payments: Credit cards, Debit cards, NFC mobile payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 41,
        name: "GOLDZEK PETROL STATION",
        position: [7.126288033814913, 3.3400837545827065],
        address: "48GQ+CX5, Ibara Housing Estate, Abeokuta",
        phone: "Not listed",
        hours: "Daily 6 AM-10 PM",
        details: "Petrol, diesel; mini-mart; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image36.png"
    },
    {
        id: 42,
        name: "FATGBEMS Filling Station",
        position: [7.132805590419048, 3.357054325999207],
        address: "49G4+VVH, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 6 AM-9 PM",
        details: "Petrol, diesel; mini-mart; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image37.png"
    },
    {
        id: 43,
        name: "AP Petrol station",
        position: [7.14500289746641, 3.3381236711642623],
        address: "48VQ+V7C, Ijaye Kukude, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image39.png"
    },
    {
        id: 44,
        name: "Kaab Petrol station",
        position: [7.142860168876169, 3.3630514030052616],
        address: "49V7+27R, Moshood, Abiola Way, Abeokuta",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image40.png"
    },
    {
        id: 45,
        name: "Bosak Filling Station",
        position: [7.171607590909547, 3.36693475088265],
        address: "59C8+HQ5, Ibadan Rd, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image41.png"
    },
    {
        id: 46,
        name: "RGPG PETROL STATION",
        position: [7.162083259985135, 3.3630083527328116],
        address: "5967+Q5 6 Lantoro Road, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast not available. Restroom not available. Alignment/interacting Unit available.",
        image: "media/image42.png"
    },
    {
        id: 47,
        name: "CDA Ventures",
        position: [7.160007219200001, 3.3663570662255613],
        address: "5958+RGX, Oke Yidi, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image43.png"
    },
    {
        id: 48,
        name: "Segun Lotto",
        position: [7.165377919086923, 3.3577719373898223],
        address: "5985+24V, Lantoro Road, Ake, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image44.png"
    },
    {
        id: 49,
        name: "Sherfex Gas Station",
        position: [7.165952929678179, 3.371867759742549],
        address: "597C+XRM, Abiola Way, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 50,
        name: "Akeemade Petroleunm",
        position: [7.16469354908009, 3.3721465355396534],
        address: "597C+QVX, Abiola Way, beside NASFAT Muslim Mosque, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image45.png"
    },
    {
        id: 51,
        name: "JELFAD GAS &OIL",
        position: [7.181120175816953, 3.3501077373899437],
        address: "59J2+932, Kugba Road, Saje, Abeokuta 110101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast not available. Restroom not available. Alignment/interacting Unit available.",
        image: "media/image46.png"
    },
    {
        id: 52,
        name: "Enyo Service Station, Asero road",
        position: [7.176086096013917, 3.386800695061402],
        address: "59GP+9PV, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image47.png"
    },
    {
        id: 53,
        name: "Moore Petroleum",
        position: [7.172240974216762, 3.3705781950613436],
        address: "59CC+Q64 Car Wash, Asero, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image48.png"
    },
    {
        id: 54,
        name: "Rantipe",
        position: [7.1623325111156815, 3.370842995061279],
        address: "596C+R88, Abiola Way, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast not available. Restroom not available. Alignment/interacting Unit available.",
        image: "media/image49.png"
    },
    {
        id: 55,
        name: "Dambod petrol station",
        position: [7.179479708334628, 3.3522704643755104],
        address: "59H2+PWH, Kugba Road, Gbaguru, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image50.png"
    },
    {
        id: 56,
        name: "Jofax Oil",
        position: [7.159412961067791, 3.3691120066997904],
        address: "5959+PJ5, Abiola Way, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image51.png"
    },
    {
        id: 57,
        name: "I sho Filling Station",
        position: [7.154350798984928, 3.354444079718316],
        address: "5933+MQ5, Ilogbo Rd, Sango, Abeokuta 110101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 58,
        name: "Foaji Filling Station",
        position: [7.151340655012802, 3.3528514950612704],
        address: "5923+F45, Shokenu Road, Oke-Bode, Abeokuta 111102, Ogun State",
        phone: "09023050362",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image52.png"
    },
    {
        id: 59,
        name: "AP Filling station Jelfad Oil & Gas",
        position: [7.169868416459654, 3.3587794932111974],
        address: "5995+RG 2 Adatan, Aregba, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast not available. Restroom not available. Alignment/interacting Unit available.",
        image: "media/image53.png"
    },
    {
        id: 60,
        name: "ZACOBASS P. STATION",
        position: [7.163423820229708, 3.3557396950613114],
        address: "5974+779, Iporo, Ake, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image54.png"
    },
    {
        id: 61,
        name: "Sembad Filling Station",
        position: [7.186858750111078, 3.3488428643755936],
        address: "58PX+MH Abeokuta 110101, Ogun State",
        phone: "08106678515",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image55.png"
    },
    {
        id: 62,
        name: "ONTEC Oil & Gas Ltd",
        position: [7.1446671856474575, 3.3712866067038365],
        address: "49VC+QH Idi-aba, near Tekobo Bus Stop, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image56.png"
    },
    {
        id: 63,
        name: "SLAAB NIG LTD",
        position: [7.149167537696434, 3.3575054220467897],
        address: "49X5+H28, Ijaye, Oke-Bode, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image57.png"
    },
    {
        id: 64,
        name: "NIPCO Filling Station",
        position: [7.156717442498139, 3.343692062690081],
        address: "59FG+RXR Orita, Aare Street, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image58.png"
    },
    {
        id: 65,
        name: "Commander Oyebola Petroleum",
        position: [7.1475, 3.3619], // Approximate coordinates since not provided
        address: "59C8+8H7, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image59.png"
    },
    {
        id: 66,
        name: "Wonder K-H Oil",
        position: [7.162889556286009, 3.3503780232236497],
        address: "Erunwon, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image60.png"
    },
    {
        id: 67,
        name: "A. A Rano Filling Station",
        position: [7.17243743411077, 3.3707687408182094],
        address: "59CC+X8C, Moore Junction, off Abiola Way, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image61.png"
    },
    {
        id: 68,
        name: "Arolat filling station",
        position: [7.175205890268102, 3.3519436917855665],
        address: "59G2+3Q9, Kugba Road, Gbaguru, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image62.png"
    },
    {
        id: 69,
        name: "AYOMIDE PETROLEUM",
        position: [7.148087323673403, 3.3602154125988415],
        address: "49X6+63G, Ijaye/Idi-Aba, Abeokuta",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image63.png"
    },
    {
        id: 70,
        name: "LADO Oil",
        position: [7.162957627804994, 3.3505044159545907],
        address: "Along Ijemo, Ake, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image64.png"
    },
    {
        id: 71,
        name: "NNPC CNG STATION KUTO",
        position: [7.135683052194714, 3.3502244371509073],
        address: "49P2+739, Ibb Boulevard, Kuto, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 72,
        name: "Prathy Gas station",
        position: [7.162561835598748, 3.350436189360402],
        address: "5962+X5 88 Sapon, Erunwon, Abeokuta 111101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 73,
        name: "Stonyma",
        position: [7.1442291932070745, 3.3489097253089026],
        address: "48VX+MHM, Isabo, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image65.png"
    },
    {
        id: 74,
        name: "Dabtop Oil and Gas Limited",
        position: [7.1753455199324, 3.382742613153135],
        address: "64, Okebukun Street, Aladesanmi Road, Asero, Abeokuta",
        phone: "07012281956",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image66.png"
    },
    {
        id: 75,
        name: "Petrol Station",
        position: [7.143745692912883, 3.3724199958786256],
        address: "49VC+FXV, Olabisi Onabanjo Way, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image67.png"
    },
    {
        id: 76,
        name: "Mimonioluwa Petroleum",
        position: [7.163859033184462, 3.3331274045981223],
        address: "587M+F7C Ago Ika, Abeokuta 110101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image68.png"
    },
    {
        id: 77,
        name: "Ap Filling Station-Ita Eko",
        position: [7.140119395889698, 3.330791648577919],
        address: "48RJ+28V, Ita Eko Road, Ibara, Abeokuta 111102, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image69.png"
    },
    {
        id: 78,
        name: "Jularsem Global Oil & Gas Ltd",
        position: [7.166918005035506, 3.3725499119322753],
        address: "598F+Q27, Abiola Way, Abeokuta 111101, Ogun State",
        phone: "09092066511",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    },
    {
        id: 79,
        name: "Fatnoble petroleum",
        position: [7.177324731596928, 3.347399109424688],
        address: "58GW+WXC, Road, Itoko, Abeokuta 110101, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image70.png"
    },
    {
        id: 80,
        name: "Mplus Filling Station",
        position: [7.1378313154226305, 3.3219959319532872],
        address: "48QC+4RR, Quarry Rd, Apo Village, Abeokuta 111105, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: "media/image71.png"
    },
    {
        id: 81,
        name: "Atinsola Petrol Station",
        position: [7.163383287009393, 3.312556704324814],
        address: "5877+82V, Imeko Road, Abeokuta 111105, Ogun State",
        phone: "Not listed",
        hours: "Daily 7 AM-10 PM",
        details: "Petrol, diesel; car oil; mini-mart oil; POS payments. Main mast available. Restroom available. Alignment/interacting Unit available.",
        image: null
    }
];

// All hotels from the document
const hotels = [
      {
        id: 1,
        name: "Dikord Hotel & Events Centre",
        stars: 3, 
        position: [7.147505993780551, 3.3158157955653285],
        address: "Federal Housing Estate Road, Abeokuta, Ogun State",
        phone: "Not listed",
        price: "~₦33,000/night",
        services: ["Free Wi-Fi", "Event/conference centre", "Restaurant", "Bar", "Parking", "Air-conditioning", "Housekeeping", "24-hr front desk", "Room service"],
        hours: "Check-in: ~2PM; Check-out: ~12PM, Restaurant/bar: ~7AM-10PM, Event centre: by booking schedule"
    },
    {
        id: 2,
        name: "Promax Hotel",
        stars: 3,
        position: [7.173954916012125, 3.377388203573462],
        address: "59FG+HX 6 Israel Agbolade Close, Asero, Abeokuta, Ogun State",
        phone: "08134792946",
        price: "~₦15,000/night",
        services: ["Free Wi-Fi", "Restaurant/bar", "Parking", "AC", "Housekeeping", "24-hr front desk"],
        hours: "Check-in/out: 2PM/12PM, Restaurant/bar: ~7AM-10PM"
    },
    {
        id: 3,
        name: "Micron Suites International Abeokuta",
        stars: 3, 
        position: [7.132032638007993, 3.352695981597369],
        address: "1 Wole Ogunbowale Close, Kuto, Abeokuta, Ogun State",
        phone: "07035930679",
        price: "₦63 USD (~₦50,000)",
        services: ["Free Wi-Fi", "Restaurant", "Parking", "AC", "Housekeeping", "Event/meeting space"],
        hours: "Check-in: from 2PM; Check-out by 12PM, Dining/bar: ~7AM-10PM"
    },
    {
        id: 4,
        name: "Richton Hotel & Suites",
        stars:3,
        position: [7.121005601781385, 3.3432793523674547],
        address: "48CV+98 62/64 Edun Adila Street, Ibara Housing Estate, Abeokuta, Ogun State",
        Phone:null,
        Price: "from ₦106 USD per night (~₦80,000)",
        services: ["Free Wi Fi", "restaurant", "conference/banquet facilities", "parking; AC","event hosting", "housekeeping"],
        hours: "Check in/out: 2 PM / 12 PM, Breakfast: ~7 AM–10 AM; Restaurant/bar: ~7 AM–10 PM"
    },
    {
        id:5,
        name: "Royal Pavilion Hotel & Suites",
        stars: 4,
        position: [7.1228086604388325, 3.347490517125223],
        address: "48FW+4X 5 ransom kuti Housing estate, Ibara, Abeokuta, Ogun State Phone: 07065234656",
        phone:null,
        Price: "₦17 – ₦106 USD nightly (₦30,000–₦267,000)",
        services: ["Free Wi Fi", "restaurant", "banquet/conference services", "parking", "housekeeping", "AC"], 
        hours: "Check in/out: ~2 3 PM / 12 PM, Breakfast: ~7 AM–10 AM; Restaurant/bar: ~7 AM–10 PM",
    },
    {
        id:6,
        name: "Signatures Hotel & Suites",
        stars: 3,
        position: [7.122345684358246, 3.3170933900755473],
        address: "48C8+WR No. 20 Lemboye Street, Ebenezer Ogunmokin Street, Saraki Last Bus Stop, Adigbe, Abeokuta",
        phone:"08080821835",
        Price: "mid-range (approx. ₦50,000–₦90,000) by local indicators",
        services: "Free Wi Fi; restaurant; bar/lounge; AC rooms; parking; event facilities; housekeeping; 24 hr front desk", 
        hours: "Check in/out: 2 PM / 12 PM, Restaurant/bar: ~7 AM–10 PM",
    },
    {
        id:7,
        name: "Sky Pavilion Hotel",
        stars: 4,
        position: [7.135771676526152, 3.3362903184326123],
        address: "48PP+8G Airtel Express, close to Jide Jones Auto Parts Store, Oke Ilewo, Abeokuta, Ogun State",
        phone:"08080821835",
        Price: "moderate/boutique (~₦50,000 ₦100,000)",
        services: "Free Wi Fi; nightclub facility; bar/lounge; restaurant; parking; AC; housekeeping", 
        hours: "Check in/out: 2 PM / 12 PM, Restaurant/bar: ~7 AM–11 PM; Nightclub: evening hours until late",
    },
    {
        id:8,
        name: "Indices Suites and Gardens",
        stars: 3,
        position: [7.128119954715794, 3.333995356677507],
        address: "48HM+7H 1–5 Safari Junction, Onikolobo, Abeokuta",
        phone:null,
        Price: "from $33 USD (₦15,000) per ZenHotels listing",
        services: "Free Wi Fi; garden; restaurant/bar; parking; AC; housekeeping", 
        hours: "Check in/out: ~2 PM / 12 PM, Restaurant/bar: ~7 AM–10 PM",
    },
    {
        id:9,
        name: "Dam’syl Suites",
        stars: 2,
        position: [7.127611076212892, 3.3315937546276433],
        address: "48HJ+2J 2 Eniola Street, Onikolobo, Abeokuta, Ogun State",
        phone:"08033816860",
        Price: "from $67 USD (₦35,000 ₦40,000)",
        services: "Free Wi Fi; restaurant/bar; parking; AC; housekeeping", 
        hours: "Check in/out: 2 PM / 12 PM, Dining: ~7 AM–10 PM",
    },
    {
        id:10,
        name: "Wise Hotel",
        stars: 2,
        position: [7.1641663469876224, 3.3048419759161005],
        address: "15 New Range Street (off Lafenwa/ Ayetoro Road), Abeokuta, Ogun State",
        phone:"07034525144",
        Price: "from $67 USD (₦35,000 ₦40,000)",
        services: "Free Wi Fi; restaurant; bar; AC; parking; housekeeping", 
        hours: "Check in/out: 2 PM / 12 PM, Restaurant/bar: ~7 AM–10 PM",
    },
    {
        id:11,
        name: "The Morville Suites & Apartments",
        stars: 5,
        position: [7.123530181517975, 3.385298303137065],
        address: "49FP+C4 1 PK Olubunmi Road, Laderin, Abeokuta 110118, Ogun State",
        phone:"08149080778",
        Price: "Approx ₦35,000–₦45,000/night (US$71 on Travelocity) (travelocity)",
        services: "Free Wi Fi; self-parking; terrace/garden; kitchenette-equipped apartments; 24-hr front desk", 
        hours: "Check in from 2 PM, check out by 12 PM; day-time reception",
    },
    {
        id:12,
        name: "Grand Style Guest House",
        stars: 2,
        position: [7.14424542459987, 3.369703932192731],
        address: "49V9+JV 6 Lisabi Grammar School Road, Idi-Aba, Abeokuta",
        phone:"09060209832",
        Price: "~₦25,000–₦45,000/night (US$52 on Travelocity)",
        services: "Free Wi Fi; gym; restaurant & bar/lounge; continental breakfast; parking; housekeeping", 
        hours: "Breakfast 8 AM–11 AM; restaurant/bar open from ~8 AM–10 PM; reception 24 hr",
    },
    {
        id:13,
        name: "Blue Banana Resorts",
        stars: 3,
        position: [7.14264255058235, 3.4022165071834793],
        address: "4CV2+2V Blue Banana Resort, Ilugun 110118, Ogun State",
        phone:"08033432715",
        Price: "~₦3,500/night (US$4.92 on Expedia)",
        services: "Free Wi Fi; restaurant specializing in local cuisine; bar/lounge; terrace; free parking; room service", 
        hours: "Dining 8 AM–10 PM; reception 24 hr",
    },
    {
        id:14,
        name: "Abeokuta Hill View Hotel",
        stars: 3,
        position: [7.152379542998601, 3.3776948157150497],
        address: "Near June 12 Cultural Centre, Abeokuta 592H+W3W, 111101, Ogun State",
        phone: null,
        Price: " ~₦38,000/night (US$9.33 on Expedia) ",
        services: "Free Wi Fi; restaurant; bar/lounge; free parking; room service; housekeeping", 
        hours: "Breakfast 8 AM–10 AM; reception 24 hr",
    },
    {
        id:15,
        name: "Hallmark Suites – Abeokuta",
        stars: 3,
        position: [7.119338215351483, 3.3496114753920994],
        address: "489X+PRP Boye Close, Oloke Street, meji, Abeokuta 111102, Ogun State",
        phone: "09063936235",
        Price: "~₦10,000–₦15,000/night (US$10.87 on Expedia)",
        services: "Free Wi Fi; parking; housekeeping; 24-hr front desk", 
        hours: "Reception open 24 hours; restaurants nearby",
    },
    {
        id:16,
        name: "IBD International Hotel Abeokuta",
        stars: 3,
        position: [7.13570349937811, 3.3663391851142643],
        address: "49P8+7G 5, Sam Ewang Junction, M.K.O. Abiola Way, Abeokuta, Ogun State",
        phone: "09063936235",
        Price: "~₦40,000–₦365,000/night",
        services: "Free Wi-Fi; basic restaurant; parking; air conditioning; housekeeping", 
        hours: "Check in from 2 PM/check out by 12 PM; restaurant hours ~7 AM–10 PM",
    },
    {
        id:17,
        name: "Fountain Blu Hotel",
        stars: 5,
        position: [7.1508, 3.3442],
        address: "48FR+65  Block A, off Edun Adila road, Ibara Housing Estate, Abeokuta 110252",
        phone: "08147163081",
        Price: "~₦60,000–₦90,000/night (estimated mid-range)",
        services: "Free Wi Fi; restaurant; meeting/event spaces; parking; housekeeping", 
        hours: "Breakfast 7 AM–10 AM; restaurant/bar ~7 AM–10 PM; reception 24 hr",
    },
    {
        id:18,
        name: "Keblat Hotel Suites",
        stars: 2,
        position: [7.114830477001544, 3.340425661538791],
        address: "Quarry Road vicinity, 487R+W5F, Sogeke 110104, Ogun State Abeokuta",
        phone: "08037205227",
        Price: "~₦35,000–₦55,000/night (estimated)",
        services: "Free Wi Fi; restaurant/bar; parking; housekeeping; AC", 
        hours: "Restaurant/bar ~7 AM–10 PM; reception 24 hr",
    },
    {
        id:19,
        name: "Laroy Suites",
        stars: 3,
        position: [7.1512, 3.3453],
        address: "M.K.O. Abiola Way, 598F+W5 Abeokuta 111101, Ogun State",
        phone: "08131553330",
        Price: " ~₦30,000–₦50,000/night (estimated)",
        services: "Free Wi Fi; parking; restaurant; housekeeping; AC", 
        hours: "Dining ~7 AM–10 PM; front desk all day",
    },
    {
        id:20,
        name: "1st Point Hotel and Suites",
        stars: 3,
        position: [7.187651597728063, 3.351325040549011],
        address: "59Q2+2G 64 Federal Housing Estate Road, Elega, Abeokuta",
        phone: "09040847206",
        Price: "~₦10,000/night (~US$12 – 15)",
        services: "Free Wi Fi; parking; housekeeping; 24 hr reception; basic breakfast AC", 
        hours: " Check in around 2 PM; check out by 12 PM; reception open 24 hr",
    },
    {
        id:21,
        name: "Ladgate Hotel",
        stars: 2,
        position: [7.145043961241236, 3.3867775700321143],
        address: "49WP+2PPlot 9, Kemta Igiaba Housing Estate, Idi Aba, Abeokuta",
        phone:null,
        Price: " ~₦2,880/night (average, budget)",
        services: "Free Wi Fi; parking; housekeeping; simple lodging", 
        hours: " Reception typically open during day; check in from 2 PM; check out by midday",
    },
    {
        id:22,
        name: "Excel Guest House",
        stars: 3,
        position: [7.0811031015297194, 3.2944068709748184],
        address: "37JV+CQ No 3 Global Close, Ogunsolu Village (Obada Road), Abeokuta",
        phone:null,
        Price: " Not listed (budget-class)",
        services: "Wi Fi; parking; basic lodging; security presence reported", 
        hours: "Standard local lodging hours, reception likely daytime",
    },
    {
        id:23,
        name: "Qube Hotel",
        stars: 3,
        position: [7.177943348875623, 3.2816461483577957],
        address: "57HJ+5M 17 Opara Street, Iyana Celestial Roundabout, Sabo",
        phone:null,
        Price: " Not specified (budget midrange)",
        services: "Wi Fi; parking; basic accommodation; guest security", 
        hours: "Reception open daytime; lodging check in/out typical schedule",
    },
    {
        id:24,
        name: "Augustine International Hotel",
        stars: 3,
        position: [7.138548794547899, 3.3239773760191023],
        address: "No 6/8 Alafia Tayo Close, off Quarry Road, 48QF+9JJ, Surulere, Abeokuta 111105, Ogun State",
        phone:null,
        Price: " $11/night (₦5,000)",
        services: "Bar/lounge; security; parking; basic lodging", 
        hours: "Reception likely daylight; bar/lounge hours unknown",
    },
    {
        id:25,
        name: "Buckingham Inn",
        stars: 3,
        position: [7.130412849461198, 3.3377031153330385],
        address: " 48JQ+43  17 Aiyedungbe Street, G.R.A, Ibara, Abeokuta",
        phone:null,
        Price: " $17/night (₦8,500)",
        services: "Wi Fi; parking; moderate lodging; presumed housekeeping", 
        hours: "Check in from ~2 PM; reception hours unspecified",
    },
    {
        id:26,
        name: "Frontline Hotel",
        stars: 3,
        position: [7.1241591030017135, 3.3333841208552792],
        address: "Plot 3,Oluwo Road, Onikolobo, 48FM+M9  Abeokuta 110104, Ogun State",
        phone:null,
        Price: " $11/night (₦5,000)",
        services: "Restaurant/bar; Wi Fi; parking; lodging in quiet locale", 
        hours: "Restaurant/bar ~7 AM–10 PM; reception presumed standard",
    },
    {
        id:27,
        name: "Stay Glad Hotel and Suite",
        stars: 2,
        position: [7.179090145452313, 3.3890923405833275],
        address: "59HQ+JH No 3 Ramoni Close, Abeokuta",
        phone:null,
        Price: " $11/night (₦5,000)",
        services: "Parking; housekeeping; lodging in secure environment", 
        hours: "Reception likely daytime; breakfast not explicitly noted",
    },
    {
        id:28,
        name: "Tristate Guest House",
        stars: 2,
        position: [7.13155501252718, 3.3251597021099317],
        address: " 48JG+J3 8–14 Foluso Ayinke Street, Oba Lipede Estate, Onikolobo, Abeokuta",
        phone:null,
        Price: " $14/night (₦7,000)",
        services: "Parking; security; standard lodging; housekeeping", 
        hours: "Reception hours presumed day time; basic service availability",
    },
    {
        id:29,
        name: "O’Lakesin Hotel & Suites Limited",
        stars: 2,
        position: [7.133077439506455, 3.3051305867935294],
        address: "Along Itoko Road, Keesi, 48M4+62G, Abeokuta 111105, Ogun State",
        phone:"08033254191",
        Price: " ~₦19–25k",
        services: "Wi‑Fi; restaurant/bar; parking; housekeeping; AC rooms", 
        hours: "Check‑in \~2 PM / check‑out \~12 PM; dining \~7 AM–10 PM",
    },
    {
        id:30,
        name: "Lisabi Court Hotel",
        stars: 2,
        position: [7.1225689233027, 3.343737691682286],
        address: "48CV+JG Lisabi Court Road, Off Oladeinde Joseph Road, Ibara Housing Estate, Abeokuta",
        phone:"07080614680",
        Price: "₦35 USD/night (≈ ₦17–20k)",
        services: "Free Wi‑Fi; bar/lounge; restaurant; parking; AC; 24‑hour front desk; house keeping", 
        hours: "Dining \~7 AM–10 PM; typical check‑in/out times apply",
    },
    {
        id:31,
        name: "Jambed Hotel & Suitesl",
        stars: 3,
        position: [7.113137876920237, 3.3148533081990403],
        address: "4877+6W 22 Halleluyah St, Abeokuta 110104, Ogun State",
        phone:"07080614680",
        Price: "₦34 USD/night (\~₦17–51k)",
        services: "Pool; gym; event hall; bar/lounge; room service; parking; housekeeping", 
        hours: "Pool & gym \~9 AM–9 PM; dining \~7 AM–10 PM; check‑in/out typical",
    },
    {
        id:32,
        name: "Green Legacy Resort",
        stars: 3,
        position: [7.125848776840517, 3.3613100763376056],
        address: "49G6+4H 110001 Presidential Bouleva road, Abeokuta 110118, Ogun State",
        phone:"08113112222",
        Price: "$121/night (\~₦90k+)",
        services: "Spa; outdoor pool; restaurant/bar; lush gardens; event facilities; parking; Wi‑Fi", 
        hours: "Spa & pool \~7 AM–9 PM; dining \~7 AM–10 PM; reception 24‑hour",
    },
    {
        id:33,
        name: "Amarillo-Sky Inn",
        stars: 3,
        position: [7.118302432479669, 3.3196441763367894],
        address: "4889+WW Owolabi Crescent, Adigbe Mango, Abeokuta",
        phone:null,
        Price: "$112/night (\~₦45–₦60k)",
        services: "Free Wi‑Fi; restaurant; bar/lounge; event space; parking; housekeeping; ", 
        hours: "Dining \~7 AM–10 PM; reception typically 24‑hour",
    },
    {
        id:34,
        name: "Phoenix Suites and Inn",
        stars: 3,
        position: [7.146111444298138, 3.3588381609945945],
        address: "12 Okekoto Drive, via Presidential Lodge, 49W5+4JC, Abeokuta 111102, Ogun State",
        phone:null,
        Price: "$67/night (\~₦25–₦30k)",
        services: "Restaurant; bar/lounge; parking; Wi‑Fi; housekeeping; AC rooms", 
        hours: "Dining \~7 AM–10 PM; front desk \~24‑hour",
    },
    {
        id:35,
        name: "Rock City Hotel",
        stars: 3,
        position: [7.167514723296267, 3.373716088813655],
        address: "7–8 Sholola Street, off Moshood Abiola Way, 598F+XF Abeokuta",
        phone:null,
        Price: "$74/night (\~₦30–₦40k)",
        services: "Free Wi‑Fi; restaurant; parking; AC rooms; housekeeping; accessible facilities", 
        hours: "Dining \~7 AM–10 PM; reception open 24 hours",
    },
    {
        id:36,
        name: "Pholard Hotel and Suites",
        stars: 3,
        position: [7.113623472014928, 3.320411321566153],
        address: "Idowu Oluwole Crescent, Somorin Bus Stop, Obantoko, 487C+C5 Abeokuta",
        phone:"08033040831",
        Price: "Mid-range (\~₦35,000–₦50,000/night)",
        services: "Free Wi‑Fi; restaurant/meal service; secure parking; air-conditioned rooms; event hosting spaces", 
        hours: "Check‑in \~2 PM; check‑out \~12 PM; meals typically served between \~7 AM–10 PM",
    },
    {
        id:37,
        name: "Baynans Hotel and Suites",
        stars: 3,
        position: [7.136644858908525, 3.3389300530640087],
        address: "20, Kolawole Street, Oke - Ilewo Road, behind Kay Plaza, 48PQ+6G Abeokuta, Ogun State",
        phone:"08086304854",
        Price: "~₦40,000–₦60,000/night (est. from review sites with rating around 4.6)",
        services: "Comfortable lodging; restaurant; Wi‑Fi; parking; housekeeping", 
        hours: "Standard check‑in/out (2 PM/12 PM); dining hours \~7 AM–10 PM",
    },
    {
        id:38,
        name: "Otitoloju Suites",
        stars: 3,
        position: [7.188102625366716, 3.374312199104557],
        address: "Asero (OGD) Estate, Dennis Akanmu Street, Asero, 59PF+VJ Abeokuta",
        phone:"09060002273",
        Price: "Moderate (\~₦30,000–₦50,000/night estimated)",
        services: "Wi‑Fi; restaurant; on-site parking; well-rated guest service area", 
        hours: "Check‑in/out \~2 PM/12 PM; Meals served \~7 AM–10 PM",
    },
    {
        id:39,
        name: "Skywood Suite",
        stars: 3,
        position: [7.134532581825568, 3.3391244377187546],
        address: "48MQ+GJ4, OPIC ROUNDABOUT, Ibara, Abeokuta 111102, Ogun State",
        phone:"08064981807",
        Price: "Mid-range (\~₦40,000–₦60,000/night) [Bookhotels.ng][4])",
        services: "Wi‑Fi; bar/lounge; restaurant; parking; house-keeping; event spaces", 
        hours: "Check‑in/out from \~2 PM/12 PM; restaurant/bar \~7 AM–10 PM",
    },
    {
        id:40,
        name: "Royal Green Guest House",
        stars: 3,
        position: [7.129163058169712, 3.342916622373123],
        address: "beside FRSC, No. 1 Adetokunbo Ademola Street, GRA, Ibara, 48HV+85 Abeokuta",
        phone:"08038810067",
        Price: "Budget (\~₦15,000–₦118,000/night) via ZenHotels listing ⬤",
        services: "Free Wi‑Fi; parking; basic guest rooms; minimal on-site dining", 
        hours: "Reception open standard business hours; breakfast around \~7 AM–10 AM",
    },
    {
        id:41,
        name: "House 56 Hotel and Suites",
        stars: 3,
        position: [7.121790540642281, 3.385691576337151],
        address: "2, Opeyemi Kujore Close Laderin Estate, Abeokuta 110211 49CP+88",
        phone:"08113565656",
        Price: "Mid-range (\~₦30,000–₦50,000/night) ",
        services: "Wi‑Fi; restaurant; bar/lounge; housekeeping and professional staff; parking", 
        hours: "Check‑in/out \~2 PM/12 PM; Restaurant/bar \~7 AM–10 PM",
    },
    {
        id:42,
        name: "Courtyard Marquee Suites",
        stars: 3,
        position: [7.123817952325417, 3.347749076337363],
        address: "Housing Estate, 1,Sodiq Olalere Street, Adjacent Crown College Ibara, 48FX+55 Abeokuta",
        phone:"08185560000",
        Price: "Mid-range (\~₦35,000–₦60,000/night) around rating 3.5–3.6",
        services: "Wi‑Fi; events/banquet; restaurant/bar; lodging; parking", 
        hours: "Check‑in/out standard; restaurant/bar \~7 AM–10 PM",
    },
    {
        id:43,
        name: "Heritage Courtyard Abeokuta",
        stars: 3,
        position: [7.119841329170232, 3.394887622372155],
        address: "Laderin Housing Estate, Plot 5, Block XV,Olubankole Mafe Avenue, 499V+GX Abeokuta",
        phone:"09092360000",
        Price: "Budget‑mid (₦30,000–₦45,000/night) rating \~3.9 ",
        services: "Free Wi‑Fi; outdoor pool; fitness centre; restaurant/bar; parking; event hall; housekeeping", 
        hours: "Check‑in: 2 PM; Check‑out: by 12 PM; Breakfast 7 AM–10 AM; Restaurant/bar 7 AM–10 PM",
    },
    {
        id:44,
        name: "Save Haven Hotel",
        stars: 5,
        position: [7.135853170770676, 3.3645620751608263],
        address: "19, Oyenekan Oyerogba Street, Olosan Opp Sam Ewang Estate Junction, Leme, 49P7+8R Abeokuta 111102, Ogun State",
        phone: "https://www.savehavenhotels.com.ng/",
        Price: "~\$42 USD (~~₦17,000–338,000/night",
        services: "Free Wi‑Fi; restaurant and bar/lounge; secure parking; housekeeping; 24‑hr front desk", 
        hours: "Dining typically \~7 AM–10 PM; check‑in \~2 PM, check‑out by \~12 PM",
    },
    {
        id:45,
        name: "Paris Estate Palace Hotel",
        stars: 3,
        position: [7.135855628637279, 3.3252192377188736],
        address: "Paris Close, Off Custom Road, Lipede, opposite Custom Office, 48MG+X3 Abeokuta",
        phone: null,
        Price: "~$24 USD/night (≈ ₦12,000)",
        services: "Wi‑Fi; restaurant; bar/lounge; parking; air‑conditioning; housekeeping", 
        hours: "Dining \~7 AM–10 PM; front desk typical business hours",
    },
    {
        id:46,
        name: "Paris Estate Palace Hotel",
        stars: 4,
        position: [7.129851940456482, 3.3487462763379674],
        address: "111102, 4 Aduke Ayorinde Street, GRA Ibara Housing Estate 48HX+HH Abeokuta",
        phone: "08033337043",
        Price: "~$39 USD/night (≈ ₦157,000)",
        services: "Wi‑Fi; bar/lounge; restaurant; parking; AC rooms; housekeeping", 
        hours: "Restaurant/bar \~7 AM–10 PM; reception \~24/7",
    },
    {
        id:47,
        name: "Quarry Imperial Hotel Limited",
        stars: 4,
        position: [7.137267042968642, 3.3273130377190223],
        address: "11110252 Quarry Road, adjacent Living Faith Church, 48PG+HW Abeokuta",
        phone: "09075403235",
        Price: "~$42 USD/night (≈ ₦20,000)",
        services: "Free Wi‑Fi; restaurant/bar; swimming pool; event/multipurpose hall; parking; AC rooms", 
        hours: "Dining/bar \~7 AM–11 PM; pool hours may vary per hotel schedule",
    },
    {
        id:48,
        name: "Hilltop Tavern Hotel, Suites & Conference Hall",
        stars: 3,
        position: [7.137267042968642, 3.3273130377190223],
        address: "No. 1 Oladipo Adeyemi Avenue, Oloke GRA Extension",
        phone: "08030872926",
        Price: "~$28 USD/night (≈ ₦14,000)",
        services: "Wi‑Fi; conference/events facilities; restaurant; parking; AC rooms", 
        hours: "Conference by booking; dining typical \~7 AM–10 PM; reception open 24‑hr",
    },
    {
        id:49,
        name: "De‑Lawrence Court & Suites",
        stars: 3,
        position: [7.175071545668722, 3.2916316579889022],
        address: "Unity Road Adeun Bus-stop Unity Estate, Off Abeokuta-Imeko Rd, Abeokuta",
        phone: "08030872926",
        Price: "mid‑range (\~₦20,000–₦40,000/night)",
        services: "Wi‑Fi; restaurant/bar; event/meeting spaces; parking; housekeeping", 
        hours: "Dining \~7 AM–10 PM; event usage by schedule; check‑in/out usual times",
    },
    {
        id:50,
        name: "G 40 Hotel & Suites",
        stars: 3,
        position: [7.129804148794531, 3.3492066926609008],
        address: "No. 40, Oba Olowu Street, Off Presidential Lodge, Ibara G.R.A Housing Estate, Abeokuta 234039 48HX+WM",
        phone: "07063373955",
        Price: "$22 USD/night (~~₦11,000)",
        services: "Wi‑Fi; lodging; parking; basic rooms; potential lounge/bar facilities", 
        hours: "Reception likely standard hours; minimal facilities",
    },
    {
        id:51,
        name: "Peak‑Olam Suites",
        stars: 3,
        position: [7.1420, 3.3490],
        address: "FUNAAB, 36 Alabata Road, Camp, Abeokuta 110121, Ogun State 5CRP+9W",
        phone: "http://www.peakolamsuites.com/",
        Price: "$50–60 USD/night (≈ ₦25,000–₦30,000)",
        services: "Wi‑Fi; parking; lodging; likely dining options; housekeeping", 
        hours: "Dining and check‑in/out per local practices",
    },
    {
        id:52,
        name: "House 66,Grace Suites",
        stars: 3,
        position: [7.1480, 3.3405],
        address: "66 Ibara Housing Estate Rd, GRA, Abeokuta 111102, Ogun State 48GR+55",
        phone: "08034110200",
        Price: "$42 USD/night (~~₦18,000)",
        services: "Free Wi‑Fi; restaurant/bar/lounge; parking; housekeeping; 24‑hr front desk", 
        hours: "Dining \~7 AM–10 PM; reception open 24 hrs; check‑in \~2 PM, check‑out by \~12 PM",
    },
    {
        id:53,
        name: "AA Entertainment Hotel (formerly Park Inn by Radisson)",
        stars: 4,
        position: [7.1535, 3.3448],
        address: "1 Ibrahim Babangida Boulevard, Kuto, Abeokuta 110242, Ogun State 48JX+XH",
        phone: "08090714325",
        Price: "₦80,000–₦208,000/night (US$82–US$130)",
        services: "Free Wi Fi; pool; gym; bar & restaurant; event hall; laundry; 24 hr front desk; free parking; air conditioning", 
        hours: "Check in: from 2 PM; Check out: by 12 PM, Breakfast: 7 AM–10 AM; Restaurant: 6 AM–10 PM, Gym & pool: 7 AM–9 PM (typical)",
    },
    {
        id:54,
        name: "Celia’s Suites",
        stars: 3,
        position: [7.1590, 3.3470],
        address: "1 Wole Soyinka Road, Ibara, Abeokuta 111102, Ogun State48HR+CM",
        phone: null,
        Price: "₦70,000–₦90,000/night (US$23–US$25 on Booking)",
        services: "Free Wi Fi; restaurant; BBQ area; fitness centre; hot spring bath; bar; breakfast; parking", 
        hours: "Check in: 2 PM; Check out: 12 PM, Breakfast: 7 AM–10 AM; Restaurant/bar: opens around 6 AM to 10 PM",
    },
    {
        id:55,
        name: "Continental Suites Ltd.",
        stars: 3,
        position: [7.1580, 3.3490],
        address: "Housing Estate, Presidential Blvd, Ibara, Abeokuta 111102, Ogun State 48QQ+XX",
        phone: "08033734340",
        Price: "₦140,000–₦180,000/night (US$178–US$191)",
        services: "Free Wi Fi; outdoor pool (with swim up bar); continental breakfast; restaurant; air-conditioned rooms; free parking", 
        hours: "Check in: 2 PM; Check out: 12 PM, Breakfast: 7 AM–10 AM; Pool & bar: 9 AM–9 PM",
    },
    {
        id:56,
        name: "Mitros Boutique Hotel (Mitros Residences)",
        stars: '3',
        position: [7.1590, 3.3470],
        address: "Off Quarry Road, near Agbeloba roundabout",
        phone: null,
        Price: "₦80,000–₦120,000/night (USD ~100–150)",
        services: "Free Wi Fi; gym; pool; restaurant; parking; air-conditioning; front desk", 
        hours: "Check in: 2 PM; Check out: 12 PM, Restaurant: 7 AM–10 PM; Gym/pool: 6 AM–10 PM",
    },
    {
        id:57,
        name: "LINKS Bed & Breakfast",
        stars: 2,
        position: [7.1575, 3.3465],
        address: "49J3+M5G Superfoods Complex, opposite MKO Abiola stadium, Kuto, Abeokuta 111102, Ogun State",
        phone: null,
        Price: "₦60,000–₦80,000/night (US$23–US$24)",
        services: "Free Wi Fi; bar; breakfast service; parking; air conditioning; housekeeping", 
        hours: "Check in: 2 PM; Check out: 12 PM, Breakfast: 7 AM–10 AM; Bar: 5 PM–9 PM",
    },
    {
        id:58,
        name: "Ajoke Hotel",
        stars: "4",
        position: [7.1570, 3.3478],
        address: "40 Adebowale Aboaba drive, ikerekun idan, Abeokuta 110101, Ogun State 582H+JQ",
        phone: "09138494764",
        Price: "₦45,000–₦65,000/night (US$50–70) based on Expedia listings LINKS Bed & Breakfast LINKS Bed & Breakfast",
        services: "Free Wi Fi; TV; air conditioning; parking; housekeeping; front desk", 
        hours: "Check in: 2 PM; Check out: 12 PM, No on-site restaurant; breakfast available via room service between 7 AM–9 AM",
    },
    {
        id:59,
        name: "BG Hotel and Suites",
        stars: 3,
        position: [7.1570, 3.3478],
        address: "5CQP+58P, Camp Bus Stop, Camp, Abeokuta 110121",
        phone: "09138494764",
        Price: "₦60,000–₦90,000/night (estimated US$65–100)",
        services: "Free Wi Fi; dining; bar/lounge; AC; parking; housekeeping; 24 hr front desk", 
        hours: "Check in: 2 PM; Check out: 12 PM, Bar & restaurant: 7 AM–11 PM",
    },
    {
        id:60,
        name: "Modroy Hotel & Suites",
        stars: 3,
        position: [7.1400, 3.3500],
        address: "597C+XRM, Abiola Way, Abeokuta 111101, Ogun State",
        phone: "08033297777",
        Price: "₦90,000–₦110,000/night (US$46 listed on Trip.com)",
        services: "Free Wi Fi; restaurant; bar/lounge; designated smoking areas; room service; parking; AC", 
        hours: "Check in: 2 PM; Check out: 12 PM, Breakfast (cooked-to-order): 7:30 AM–10 AM; Room service: limited hours to ~10 PM",
    },
    {
        id:61,
        name: "Upright Hotel & Suites",
        stars: 3,
        position: [7.1470, 3.3360],
        address: "14/18 Demola Olanrewaju St, Agbeloba Roundabout, Quarry Rd, Abeokuta 48M9+RV9, 111105, Ogun State",
        phone: null,
        Price: "₦100,000–₦130,000/night (est. US$120–150)",
        services: "Free Wi Fi; gym with instructor; outdoor pool; bar/lounge; restaurant with complimentary breakfast; event hall; laundry; flat-screen TV in rooms; parking; AC", 
        hours: "Check in: from 1 PM; Check out: by 12 PM , Breakfast: 7 AM–10 AM; Restaurant & bar: 7 AM–10 PM; Gym & pool: 6 AM–9 PM",
    },
    {
        id:62,
        name: "Kebotash Hotel",
        stars: 3,
        position: [7.1600, 3.3300],
        address: "Baabo community ilugun village, Abeokuta 5C44+V8 Abeokuta",
        phone: "08033636762",
        Price: "~₦20,000–₦40,000/night (boutique lodging)",
        services: "Restaurant/bar; boutique-style rooms; Wi‑Fi; air conditioning; parking", 
        hours: "Dining \~7 AM–10 PM; reception hours local standard",
    },
    {
        id:63,
        name: "Ola‑Ade Hotel",
        stars: 3,
        position: [7.1600, 3.3300],
        address: "Lafinwe Ologbode, Itele Road, Abeokuta M6M9+92J, Itele Rd, Ota 112104, Ogun State",
        phone: "08033636762",
        Price: "$7–8 USD/night (~~₦3,500–₦4,500)",
        services: "Secure lodging; basic amenities; parking; minimal breakfast", 
        hours: "Reception daytime; breakfast \~7 AM–9 AM",
    },
    {
        id:64,
        name: "Dagunro Suites",
        stars: 3,
        position: [7.1578, 3.3425],
        address: "5CF2+P8 Shomorin Street, Abeokuta 111101, Ogun State",
        phone: "07064378998",
        Price: "~$15–25 USD/night (~~₦7,500–₦12,000)",
        services: "Lodging with Wi‑Fi; restaurant; parking; room service", 
        hours: "Dining \~7 AM–10 PM; check‑in/out typical",
    },
    {
        id:65,
        name: "KAF Guest House",
        stars: 3,
        position: [7.1559, 3.3436],
        address: "No 7 Alawo Street, Iberekodo, Abeokuta 586R+64",
        phone: null,
        Price: "~$8 USD/night (~~₦4,000) ([Bookhotels.ng][6])",
        services: "Parking; simple lodging; security presence; AC rooms", 
        hours: "Reception daytime; basic service provision",
    },
    {
        id:66,
        name: "Feminisimi Hotel",
        stars: "3",
        position: [7.1572, 3.3438],
        address: "45 tinubu street, Ita Eko, Abeokuta 111102, Ogun State 48QJ+P6 Abeokuta",
        phone: "08037256229",
        Price: "~$8‑10 USD/night (~~₦4,000–₦5,000)",
        services: "Bar/lounge; AC rooms; housekeeping; Wi‑Fi (limited)", 
        hours: "Reception business hours; bar \~7 AM–10 PM",
    },
    {
        id:67,
        name: "Quarry Hotel Annex",
        stars: 3,
        position: [7.1585, 3.3500],
        address: "2 Church Road, Onikoko Estate, Abeokuta 48HP+8G ",
        phone: null,
        Price: "~$17 USD/night (~₦8,500)",
        services: "Lodging; restaurant/bar; parking; Wi‑Fi (where available)", 
        hours: "Dining \~7 AM–10 PM; standard check‑in/out",
    },
    {
        id:68,
        name: "Star City Hotel",
        stars: 3,
        position: [7.1385, 3.3470],
        address: "E4 Lagos–Abeokuta Road, Opposite Neuro Psychiatric Hospital, Abeokuta",
        phone: null,
        Price: "Approx ₦10,000/night (≈ US $10)",
        services: "Free Wi Fi; restaurant; bar/lounge; parking; housekeeping; air conditioned rooms", 
        hours: "Typical check in ~2 PM, check out ~12 PM; dining hours ~7 AM–10 PM",
    },
    {
        id:69,
        name: "Maria E Guest Inn",
        stars: 3,
        position: [7.1400, 3.3462],
        address: "No. 12 Wole Ogundimu Street, Amolaso, Abeokuta 48VV+QF9, Isabo, 111102, Ogun State ",
        phone: null,
        Price: " ~₦15,500/night (≈ US $16)",
        services: "Free parking; air conditioning; housekeeping; 24 hr front desk; restaurant/bar likely nearby", 
        hours: "Reception typically 24 hr; meals ~7 AM–10 PM",
    },
    {
        id:70,
        name: "Abibus Hotel and Suites",
        stars: 3,
        position: [7.1450, 3.3410],
        address: "3 Abibus Avenue, Harmony Damview, behind F.H.A, Abeokuta 110106, Ogun State 37HG+V4 Abeokuta ",
        phone: "08034011988",
        Price: "Approx ₦25,000–40,000/night (≈ US $30–45)",
        services: "Free Wi Fi; family rooms; restaurant/bar; air conditioning; parking", 
        hours: "Dining ~7 AM–10 PM; reception likely 24 hr",
    },
    {
        id:71,
        name: "Central Park Hotel",
        stars: 3,
        position: [7.1320, 3.3320],
        address: "After Victorroti Private Secondary School, Olokuta Street, Idi-aba, Abeokuta South 110118, Ogun State 49QJ+2V Abeokuta",
        phone: "09047144486",
        Price: "~$44/night ≈ ₦20,000",
        services: "Free Wi Fi; parking; restaurant; air conditioning", 
        hours: "Restaurant ~7 AM 10 PM; check in/out standard",
    },
    {
        id:72,
        name: "Red Clover Hotel",
        stars: 3,
        position: [7.1507, 3.3462],
        address: "19, Tagoa Street, Off LALUBU STREET OKE-ILEWO, beside Lyceum Montessori School, Ibara, Abeokuta 110252 48MP+CH",
        phone: "08080429273",
        Price: "₦12,000–₦18,000/night (≈ US \$24 via Timbu",
        services: "Free Wi‑Fi; restaurant/bar; parking; air‑conditioning; housekeeping", 
        hours: "Check‑in/out standard; dining around \~7 AM–10 PM",
    },
    {
        id:73,
        name: "B & D Square Hotel",
        stars: 2,
        position: [7.1480, 3.3405],
        address: "No. 24, Ifedapo Community, Abeokuta 59Q3+4Q , Ogun State ",
        phone: "09047144486",
        Price: "~₦5,000/night (\~US \$12)",
        services: "Free Wi‑Fi; restaurant/bar; air‑conditioned rooms; housekeeping; parking; 24‑hr front desk", 
        hours: "Check‑in from \~2 PM; check‑out by \~12 PM; dining \~7 AM–10 PM",
    },
    {
        id:74,
        name: "Mokland Hotel",
        stars: 3,
        position: [7.1508, 3.3460],
        address: "No. 40, Oba Olowu Street, Off Presidential Lodge, Ibara G.R.A Housing Estate, Abeokuta 234039 48HX+WM",
        phone: "07063373955",
        Price:  "Not listed, but budget to mid-range category~₦5,000/night(\~US \$12)",
        services: "Bar/lounge; air‑conditioned rooms; Wi‑Fi; parking; basic guesthouse amenities", 
        hours: "Daytime reception; dining hours typical \~7 AM–10 PM",
    },
    {
        id:75,
        name: "Dusmar Hotels by AirFusionl",
        stars: 2,
        position: [7.1500, 3.3440],
        address: "Presidential Boulevard, Kuto Roundabout area, 49M3+V3P, Kuto, Abeokuta 111102, Ogun State",
        phone: "09047144486",
        Price: "Mid-range (est. ₦20k–₦🏨)",
        services: "Free Wi‑Fi; lounge/restaurant; parking; AC rooms; event hosting options", 
        hours: "Dining \~7 AM–10 PM; check‑in/out standard",
    },
    {
        id:76,
        name: "Abiis Hotel & Suites",
        stars: 3,
        position: [7.1500, 3.3450],
        address: "Alubarika Close, Oke - Ilewo Road, opp. CBN, behind wema Bank, Ita Eko, Abeokuta 110211, Ogun State 48QR+F3",
        phone: "09062022287",
        Price: "Mid-range (\~₦30,000–₦50,000/night estimated)",
        services: "Free Wi‑Fi; bar/lounge; on-site restaurant; air‑conditioned rooms; flat‑panel TVs; parking; 24‑hour front desk", 
        hours: "Check‑in from \~2 PM; check‑out \~12 PM; dining hours \~7 AM–10 PM; front desk 24/7",
    },
    {
        id:77,
        name: "Rise High Hotel",
        stars: 3,
        position: [7.1450, 3.3450],
        address: "Address Unique Community, 1 Alakaloko Community, off Sekoni Street, Olomore, Abeokuta 110251, Ogun State 5846+58",
        phone: "09050000770",
        Price: "~₦20,000–₦35,000/night (budget–mid)",
        services: "Free Wi‑Fi; restaurant; room service; 24‑hour front desk; on-site parking", 
        hours: "Reception 24/7; dining \~7 AM–10 PM",
    },
    {
        id:78,
        name: "Gilead Place B & B",
        stars: 3,
        position: [7.1470, 3.3458],
        address: "Ibara Housing Estate, Abeokuta 492W+57, 110118, Ogun State",
        phone: "09050000770",
        Price: "~₦15,000–₦25,000/night (bed & breakfast style)",
        services: "Free Wi‑Fi; shared kitchen; private parking; basic breakfast service; housekeeping", 
        hours: " Breakfast \~7 AM–9 AM; front desk during daytime",
    },
    {
        id:79,
        name: "Zynasty Apartments (new, May 2025)",
        stars: null,
        position: [7.15, 3.35],
        address: "Address Unique Community, 1 Alakaloko Community, off Sekoni Street, Olomore, Abeokuta 110251, Ogun State 5846+58Central Abeokuta (garden-equipped serviced apartment)",
        phone: "09050000770",
        Price: null,
        services: "Free Wi Fi; private balcony; gardens; fully equipped kitchen; free private parking; private entrance; flat-screen TV; satellite channels", 
        hours: "Self check-in; kitchen and living areas available 24/7; no standard check in/out times listed",
    },
    {
        id:80,
        name: "Goldbond Service Apartment (newly opened June 2025)",
        stars: null,
        position: [7.15, 3.351],
        address: "Central Abeokuta",
        phone: null,
        Price: "Not yet published (apartment-style, likely mid- to upper-range)",
        services: "Air-conditioned units; private pool; free Wi Fi; fully equipped kitchen; balcony; flat-screen TV; garden access; free private parking; bar service", 
        hours: "Apartment-style—self-check-in/out; common areas accessible daily; breakfast à la carte (hours not specified)",
    },
    {
        id:81,
        name: "Conference Hotel & Suites",
        stars: 4,
        position: [7.1564, 3.3444],
        address: "4997+C6 Presidential Boulevard, 1 Golf Resort Drive, Oke Mosan, Abeokuta 110118, Ogun State",
        phone: "http://conferencehotelnigeria.com/abeokuta",
        Price: "₦60,000–₦120,000/night (approx. US$83–US$166) with May as peak (~US$366 avg) and November low (US$26 avg)",
        services: "Free Wi Fi; complimentary breakfast (5 AM–11 AM); outdoor pool; spa (hot tub, steam room, beauty & wellness); fitness room; 2 restaurants; 3 bars/lounges; nightclub; 15 meeting rooms; paid airport shuttle; free parking; concierge; 24 hr front desk; laundry/valet; gift shop; room service", 
        hours: "Check in: from 2 PM, Check out: by 12 PM, Spa & gym: typically 7 AM–10 PM (confirm on arrival), Restaurants & bars: approx. 6 AM–11 PM",
    },
    {
        id:82,
        name: "Providence Hotel & Suites",
        stars: 3,
        position: [7.1390, 3.3506],
        address: "MKO Abiola Way, by NNPC Mega Station, Abeokuta 49H6+FF",
        phone: "08036116762",
        Price: "₦45,000–₦60,000/night (approx. US$57–US$76)",
        services: "Free Wi Fi; outdoor pool; restaurant; free parking; air conditioning; housekeeping; 24 hr front desk", 
        hours: "Check in/out: 2 PM / 12 PM, Restaurant: breakfast ~7 AM–10 AM; dinner ~6 PM–10 PM",
    },
    {
        id:83,
        name: "Moongate Hotel & Suites",
        stars: null,
        position: [7.1384, 3.3460],
        address: "isabi Grammar School Road, Idi Aba, Abeokuta",
        phone: null,
        Price: " (₦): ₦40,000–₦55,000/night (approx. US$51–US$67)",
        services: "Free Wi Fi; restaurant; free parking; air conditioning; outdoor pool; room service; daily housekeeping", 
        hours: "Check in/out: 2 PM / 12 PM, Restaurant: breakfast ~7 AM–10 AM; dinner ~6 PM–10 PM",
    },
    {
        id:84,
        name: "Caesar’s Court Hotel & Suites",
        stars: 3,
        position: [7.1370, 3.3500],
        address: "Suburbs of Abeokuta 48GP+XRM, Onikolobo, Abeokuta 111102, Ogun State",
        phone: "08112544444",
        Price: "₦55,000–₦80,000/night (approx. US$76–US$111)",
        services: "Free Wi Fi; breakfast buffet; outdoor pool; bar/lounge; restaurant; airport shuttle; free parking; air conditioning; laundry; 24 hr front desk", 
        hours: "Check in: from 12 PM; Check out: by 12 PM, Restaurant/bar: ~7 AM–11 PM",
    },
    {
        id:85,
        name: "Jimson International Hotel & Suites",
        stars: 2,
        position: [7.1395, 3.3490],
        address: "38M3+6R 1 Jimson cottage, Alagada Estate, off, Adigbe, Abeokuta",
        phone: "07083061470",
        Price: " ₦45,000–₦70,000/night (approx. US$57–US$89)",
        services: "Free Wi Fi (public & rooms); outdoor pool; restaurant; bar/lounge; room service (limited hours); 24 hr front desk; free parking; daily housekeeping", 
        hours: "Check in: 2 PM; Check out: by 12 PM, Restaurant/bar: ~7 AM–10 PM",
    },
    {
        id:86,
        name: "Camas Hotel & Suites, Asero",
        stars: 3,
        position: [ 7.1736, 3.3602],
        address: "Asero Oje Road, Asero, 59HM+7M plot 24 & 25, Goshen Estate, Block VI, Asero, Abeokuta, Ogun State",
        phone: "09151550000",
        Price: "₦70,000–₦120,000/night (approx. US$111–US$190)",
        services: "Free Wi Fi; restaurant; pool; fitness center; garden; free parking; bar/lounge; room service; housekeeping; air conditioning", 
        hours: "Check in/out: 2 PM / 12 PM, Restaurant/bar: ~7 AM–11 PM, Fitness/pool: ~6 AM–10 PM"
    },   
    {
        id: 87,
        name: "Conference Hotel & Suites",
        stars: 4,
        position: [7.1564, 3.3444],
        address: "4997+C6 Presidential Boulevard, 1 Golf Resort Drive, Oke Mosan, Abeokuta 110118, Ogun State",
        phone: "http://conferencehotelnigeria.com/abeokuta",
        price: "₦60,000-₦120,000/night (~US$83-US$166)",
        services: ["Free Wi-Fi", "Complimentary breakfast", "Outdoor pool", "Spa", "Fitness room", "2 restaurants", "3 bars/lounges", "Nightclub", "15 meeting rooms", "Paid airport shuttle", "Free parking", "Concierge", "24-hr front desk", "Laundry/valet", "Gift shop", "Room service"],
        hours: "Check-in: from 2PM; Check-out: by 12PM, Spa & gym: typically 7AM-10PM, Restaurants & bars: approx. 6AM-11PM"
    }
];

// Process each station to add brand and services
fillingStations.forEach(station => {
    station.brand = getBrandFromName(station.name);
    station.services = extractServices(station.details);
});


// Create layer groups
const stationsLayer = L.layerGroup().addTo(map);
const hotelsLayer = L.layerGroup().addTo(map);
const roadsLayer = L.layerGroup().addTo(map);
const churchesLayer = L.layerGroup().addTo(map);
const hospitalsLayer = L.layerGroup().addTo(map);
const pharmaciesLayer = L.layerGroup().addTo(map);
const touristCentersLayer = L.layerGroup().addTo(map);
const eateriesLayer = L.layerGroup().addTo(map);
const eventCentersLayer = L.layerGroup().addTo(map);
const mosquesLayer = L.layerGroup().addTo(map);


// Add markers for petrol stations
fillingStations.forEach(station => {
    const brandConfig = brandIcons[station.brand] || brandIcons.default;

    const fuelIcon = L.icon({
        iconUrl: brandConfig.iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const marker = L.marker(station.position, { 
        icon: fuelIcon,
        title: station.name,
        stationId: station.id
    }).addTo(stationsLayer);

    // Create popup content
    const popupContent = `
        <div class="station-info ${brandConfig.className}">
            <h3>${station.name}</h3>
            <p><strong>Brand:</strong> ${station.brand}</p>
            <p><strong>Address:</strong> ${station.address}</p>
            <p><strong>Contact:</strong> ${formatContactInfo(station.phone)}</p>
            <p><strong>Hours:</strong> ${station.hours}</p>
            <p><strong>Coordinate:</strong> ${station.position[0]}, ${station.position[1]}</p>
            <p><strong>Services:</strong> ${station.services.join(', ')}</p>
            ${station.image ? `<img src="${station.image}" alt="${station.name}" class="station-image" onclick="createImageModal('${station.image}', '${station.name.replace(/'/g, "\\'")}')">` : ''}
            <p><strong>Details:</strong> ${station.details}</p>
            <button class="directions-btn" 
                onclick="getDirections(${station.position[0]}, ${station.position[1]}, '${station.name.replace(/'/g, "\\'")}', ${station.id})">
                Get Directions
            </button>
            <div id="error-${station.id}" class="error-message"></div>
        </div>
    `;

    marker.bindPopup(popupContent);
});

// Add markers for hotels
hotels.forEach(hotel => {
    const stars = hotel.stars ? hotel.stars.toString() : 'default';
    const hotelConfig = hotelIcons[stars] || hotelIcons.default;

    const hotelIcon = L.icon({
        iconUrl: hotelConfig.iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const marker = L.marker(hotel.position, {
        icon: hotelIcon,
        title: hotel.name,
        hotelId: hotel.id
    }).addTo(hotelsLayer);

    // Create popup content
    const popupContent = `
        <div class="hotel-info ${hotelConfig.className}">
            <h3>${hotel.name}</h3>
            <p><strong>Rating:</strong> ${createStarRating(hotel.stars)}</p>
            <p><strong>Address:</strong> ${hotel.address}</p>
            <p><strong>Coordinate:</strong> ${hotel.position[0]}, ${hotel.position[1]}</p>
            <p><strong>Contact:</strong> ${formatContactInfo(hotel.phone)}</p>
            <p><strong>Price:</strong> ${hotel.price || 'Not specified'}</p>
            <p><strong>Hours:</strong> ${hotel.hours}</p>
            <p><strong>Services:</strong> ${Array.isArray(hotel.services) ? hotel.services.join(', ') : hotel.services}</p>
            <button class="directions-btn" 
                onclick="getDirections(${hotel.position[0]}, ${hotel.position[1]}, '${hotel.name.replace(/'/g, "\\'")}', ${hotel.id})">
                Get Directions
            </button>
            <div id="error-${hotel.id}" class="error-message"></div>
        </div>
    `;

    marker.bindPopup(popupContent);
});

// Add markers for new categories
allCategories.forEach(location => {
    const categoryConfig = categoryIcons[location.category] || categoryIcons["default"];
    
    const categoryIcon = L.icon({
        iconUrl: categoryConfig.iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    // Add to appropriate layer
    let targetLayer;
    switch(location.category) {
        case "Church": targetLayer = churchesLayer; break;
        case "Hospital": targetLayer = hospitalsLayer; break;
        case "Pharmacy": targetLayer = pharmaciesLayer; break;
        case "Tourist Center": targetLayer = touristCentersLayer; break;
        case "Eatery": targetLayer = eateriesLayer; break;
        case "Event Center": targetLayer = eventCentersLayer; break;
        case "Mosque": targetLayer = mosquesLayer; break;
        default: targetLayer = churchesLayer;
    }

    const marker = L.marker(location.position, {
        icon: categoryIcon,
        title: location.name,
        categoryId: location.id
    }).addTo(targetLayer);

    // Create popup content
    const popupContent = `
        <div class="category-info ${categoryConfig.className}">
            <h3>${location.name}</h3>
            <p><strong>Category:</strong> ${location.category}</p>
            <p><strong>Address:</strong> ${location.address}</p>
            <p><strong>Contact:</strong> ${formatContactInfo(location.phone)}</p>
            <p><strong>Hours:</strong> ${location.hours}</p>
            <p><strong>Details:</strong> ${location.details}</p>
            <button class="directions-btn" 
                onclick="getDirections(${location.position[0]}, ${location.position[1]}, '${location.name.replace(/'/g, "\\'")}', ${location.id})">
                Get Directions
            </button>
            <div id="error-${location.id}" class="error-message"></div>
        </div>
    `;

    marker.bindPopup(popupContent);
});

// Add road polylines to map
abeokutaRoads.forEach(road => {
    // Create a rectangle to represent the road area
    const roadArea = L.rectangle(road.bounds, {
        color: "#666",
        weight: 1,
        fillOpacity: 0.1,
        className: 'road-area'
    }).addTo(roadsLayer);
    
    // Add road name label
    roadArea.bindPopup(`
        <div class="road-info">
            <h3>${road.name}</h3>
            <button class="zoom-road-btn" onclick="zoomToRoad('${road.name}')">
                Zoom to Road
            </button>
        </div>
    `);
});



// Function to zoom to a road
window.zoomToRoad = function(roadName) {
    const road = abeokutaRoads.find(r => r.name === roadName);
    if (road) {
        map.fitBounds(road.bounds);
        
        // Highlight the road
        roadsLayer.eachLayer(layer => {
            if (layer instanceof L.Rectangle) {
                if (layer.getBounds().equals(road.bounds)) {
                    layer.setStyle({color: "#ff0000", weight: 3});
                    setTimeout(() => {
                        layer.setStyle({color: "#666", weight: 1});
                    }, 3000);
                }
            }
        });
    }
};


const searchInput = document.getElementById('station-search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    searchResults.innerHTML = '';

    if (searchTerm.length < 2) return;

    // Search petrol stations
    const stationMatches = fillingStations.filter(station =>
        station.name.toLowerCase().includes(searchTerm) || 
        (station.brand && station.brand.toLowerCase().includes(searchTerm)) ||
        station.address.toLowerCase().includes(searchTerm)
    );

    // Search hotels
    const hotelMatches = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(searchTerm) ||
        hotel.address.toLowerCase().includes(searchTerm)
    );

    // Search new categories
    const categoryMatches = allCategories.filter(location =>
        location.name.toLowerCase().includes(searchTerm) ||
        location.category.toLowerCase().includes(searchTerm) ||
        location.address.toLowerCase().includes(searchTerm)
    );

    // Search roads
    const roadMatches = abeokutaRoads.filter(road =>
        road.name.toLowerCase().includes(searchTerm)
    );

    const allMatches = [
        ...stationMatches, 
        ...hotelMatches, 
        ...categoryMatches,
        ...roadMatches.map(road => ({...road, isRoad: true}))
    ];

    if (allMatches.length === 0) {
        searchResults.innerHTML = '<div class="search-item">No locations found</div>';
        return;
    }

    allMatches.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-item';
        
        if (item.isRoad) {
            // Road search result
            resultItem.innerHTML = `
                <strong>🚗 ${item.name}</strong>
                <div class="search-type">Road</div>
            `;
            resultItem.onclick = () => zoomToRoad(item.name);
        } 
        else if (item.brand) {
            // Petrol station
            const brandConfig = brandIcons[item.brand] || brandIcons.default;
            resultItem.className += ` station-item ${brandConfig.className}`;
            resultItem.innerHTML = `
                <strong>⛽ ${item.name}</strong><br>
                <small>${item.brand} • ${item.address}</small>
            `;
            resultItem.onclick = () => {
                map.setView(item.position, 16);
                stationsLayer.getLayers().forEach(layer => {
                    if (layer.options.stationId === item.id) {
                        layer.openPopup();
                    }
                });
                searchResults.innerHTML = '';
                searchInput.value = item.name;
            };
        }
        else if (item.stars !== undefined) {
            // Hotel
            const stars = item.stars ? item.stars.toString() : 'default';
            const hotelConfig = hotelIcons[stars] || hotelIcons.default;
            resultItem.className += ` hotel-item ${hotelConfig.className}`;
            resultItem.innerHTML = `
                <strong>🏨 ${item.name}</strong><br>
                <small>${createStarRating(item.stars)} • ${item.address}</small>
                <div class="price">${item.price || ''}</div>
            `;
            resultItem.onclick = () => {
                map.setView(item.position, 16);
                hotelsLayer.getLayers().forEach(layer => {
                    if (layer.options.hotelId === item.id) {
                        layer.openPopup();
                    }
                });
                searchResults.innerHTML = '';
                searchInput.value = item.name;
            };
        }
        else if (item.category) {
            // Other category
            const categoryConfig = categoryIcons[item.category] || categoryIcons["default"];
            resultItem.className += ` category-item ${categoryConfig.className}`;
            
            let icon = '';
            switch(item.category) {
                case "Church": icon = "⛪"; break;
                case "Hospital": icon = "🏥"; break;
                case "Pharmacy": icon = "💊"; break;
                case "Tourist Center": icon = "🏞️"; break;
                case "Eatery": icon = "🍴"; break;
                case "Event Center": icon = "🎪"; break;
                case "Mosque": icon = "🕌"; break;
                default: icon = "📍";
            }
            
            resultItem.innerHTML = `
                <strong>${icon} ${item.name}</strong><br>
                <small>${item.category} • ${item.address}</small>
            `;
            resultItem.onclick = () => {
                map.setView(item.position, 16);
                
                // Open popup for the category
                let targetLayer;
                switch(item.category) {
                    case "Church": targetLayer = churchesLayer; break;
                    case "Hospital": targetLayer = hospitalsLayer; break;
                    case "Pharmacy": targetLayer = pharmaciesLayer; break;
                    case "Tourist Center": targetLayer = touristCentersLayer; break;
                    case "Eatery": targetLayer = eateriesLayer; break;
                    case "Event Center": targetLayer = eventCentersLayer; break;
                    case "Mosque": targetLayer = mosquesLayer; break;
                    default: targetLayer = churchesLayer;
                }
                
                targetLayer.getLayers().forEach(layer => {
                    if (layer.options.categoryId === item.id) {
                        layer.openPopup();
                    }
                });
                
                searchResults.innerHTML = '';
                searchInput.value = item.name;
            };
        }
        
        searchResults.appendChild(resultItem);
    });
});


// Function to get directions
window.getDirections = function(lat, lng, name, id) {
    if (!navigator.geolocation) {
        document.getElementById(`error-${id}`).textContent = "Geolocation is not supported by your browser";
        return;
    }

    document.getElementById(`error-${id}`).textContent = "Locating...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            // Construct Google Maps URL
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}&travelmode=driving`;
            
            // Open in new tab
            window.open(googleMapsUrl, '_blank');
        },
        (error) => {
            let errorMessage;
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    errorMessage = "An unknown error occurred.";
                    break;
            }
            document.getElementById(`error-${id}`).textContent = errorMessage;
        }
    );
};

// Add layer control for toggling all layers
const overlayLayers = {
    "Petrol Stations": stationsLayer,
    "Hotels": hotelsLayer,
    "Roads": roadsLayer,
    "Churches": churchesLayer,
    "Hospitals": hospitalsLayer,
    "Pharmacies": pharmaciesLayer,
    "Tourist Centers": touristCentersLayer,
    "Eateries": eateriesLayer,
    "Event Centers": eventCentersLayer,
    "Mosques": mosquesLayer
};
L.control.layers(baseLayers, overlayLayers).addTo(map);

// Add scale control
L.control.scale().addTo(map);

// Add button to locate user
const locateControl = L.control({position: 'topleft'});
locateControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    div.innerHTML = '<a href="#" title="Locate me" style="padding: 5px 10px; background: white;">📍</a>';
    div.onclick = function() {
        map.locate({setView: true, maxZoom: 16});
        return false;
    };
    return div;
};
locateControl.addTo(map);



// Handle location found
map.on('locationfound', function(e) {
    const radius = e.accuracy / 2;

    L.marker(e.latlng, {
        icon: L.divIcon({
            className: 'user-location-icon',
            html: '📍',
            iconSize: [24, 24]
        })
    }).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);

    // Update location status
    document.getElementById('location-status').innerHTML = `
<p><strong>Your location:</strong> Found (accuracy: ${Math.round(radius)}m)</p>
    `;
});

//info


// Handle location error
map.on('locationerror', function(e) {
    document.getElementById('location-status').innerHTML = `
<p class="error-message">Location access denied. ${e.message}</p>
    `;
    console.error("Location error:", e.message);
});

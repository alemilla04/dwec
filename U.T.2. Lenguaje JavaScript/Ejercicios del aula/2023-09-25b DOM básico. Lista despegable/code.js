'use strict';

const brands = [
    { key: 'hon', name: 'Honda' },
    { key: 'suz', name: 'Suzuki' },
    { key: 'kaw', name: 'Kawasaki' },
    { key: 'der', name: 'Derbi' },
    { key: 'bul', name: 'Bultaco' },
    { key: 'hdv', name: 'Harley-Davidson' },
    { key: 'bmw', name: 'BMW' },
    { key: 'pia', name: 'Piaggio' },
    { key: 'ind', name: 'Indian' },
    { key: 'kym', name: 'Kymco' },
];


// for(const brand of brands){
//     const nSelect = document.getElementById('tSelBrands');
    
//     const nOption = document.createElement('option');
//     nSelect.appendChild(nOption);
//     nOption.setAttribute('value', brand.key);
    
//     const nText = document.createTextNode(brand.name);
//     nOption.appendChild(nText);    
// }
llenarDespegable();

function llenarDespegable(){
    const nSelect = document.getElementById('tSelBrands');
    brands.forEach(brand => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', brand.key);
    
        const nText = document.createTextNode(brand.name);
        nOption.appendChild(nText);
    
    });
}




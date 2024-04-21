const chocolates = [
    { name: 'Milk Chocolate', price: 250 },
    { name: 'Dark Chocolate', price: 300 },
    { name: 'White Chocolate', price: 200 },
    { name: 'Hazelnut Chocolate', price: 250 },
    { name: 'Bittersweet Chocolate', price: 470 },
    { name: 'Ruby Chocolate', price: 450 },
    { name: 'Semisweeet Chocolate', price: 500 },
    { name: 'Unsweetened Chocolate', price: 400 },
    { name: 'Cocoa Powder', price: 350 },
    { name: 'Sweet German Chocolate', price: 300 },
    { name: 'Couverture Chocolate', price: 200 },
];

function renderChocolateOptions() {
    const chocolateOptions = document.getElementById('chocolate-options');
    chocolateOptions.innerHTML = '';
    chocolates.forEach(chocolate => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" name="chocolate" value="${chocolate.name}" data-price="${chocolate.price}">
            ${chocolate.name} - ₹${chocolate.price.toFixed(2)}
        `;
        chocolateOptions.appendChild(label);
    });
}

function updateTotalPrice() {
    const selectedChocolates = document.querySelectorAll('input[name="chocolate"]:checked');
    let totalPrice = 0;
    let itemCount = 0;
    selectedChocolates.forEach(chocolate => {
        totalPrice += parseFloat(chocolate.dataset.price);
        itemCount++;
    });
    if (itemCount > 8) {
        const lastSelectedChocolate = selectedChocolates[selectedChocolates.length - 1];
        alert("You can only select up to 8 chocolates.");
        lastSelectedChocolate.checked = false;
        itemCount--;
    }
    document.getElementById('total-price').textContent = `₹${totalPrice.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderChocolateOptions();
    const checkboxes = document.querySelectorAll('input[name="chocolate"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalPrice);
    });
});

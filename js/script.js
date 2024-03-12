document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const foodInputs = document.querySelectorAll('input[name="food"]:checked');
    let food = [];
    foodInputs.forEach(input => {
        food.push(input.value);
    });
    food = food.join(', ');

    // Append values to table
    const tableBody = document.getElementById("tableBody");
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${firstName} ${lastName}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${address}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${food}</td>
    `;

    clearForm();
});

function clearForm() {
    document.getElementById("form").reset();
}

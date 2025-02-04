
// Select the input and heading elements
const inputField = document.getElementById("nameInput");
const heading = document.getElementById("dynamicHeading");

// Add an event listener to the input field
inputField.addEventListener("input", (event) => {
    // Get the input value
    let name = event.target.value;

    // Remove invalid characters (anything that's not A-Z, a-z, or space)
    name = name.replace(/[^a-zA-Z ]/g, "");

    // Update the input field to show only valid characters
    event.target.value = name;

    // Update the heading dynamically
    heading.textContent = name || "Your name will appear here...";
});
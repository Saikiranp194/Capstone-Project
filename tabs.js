// Function to switch tabs
function openTab(event, tabName, tableName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    const tableContents = document.querySelectorAll('.table-content');
    tableContents.forEach(content => {
        content.classList.remove('active');
    });
 
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the current tab and add active class to the clicked button
    document.getElementById(tabName).classList.add('active');
    document.getElementById(tableName).classList.add('active');
    event.currentTarget.classList.add('active');
}
async function main() {
    const getData = await fetchData();
    const processData = await processingData();
    const saveData = await storeData();
}

setTimeout(function fetchData() {
    console.log("Fetching data from server.");
}, 2000);

setTimeout(function processingData() {
    console.log("Processing the data.");
}, 3000);

setTimeout(function storeData() {
    console.log("Storing data in the DB.");
}, 2000);



async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/5');
    let data = await response.json(); // Waits for the JSON conversion
    console.log(data);
}
fetchData();


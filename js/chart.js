'use strict';

let canvasElem = document.getElementById('chart')
const productVotes = []
const productName = []

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
    const productsFromLs = JSON.parse(localStorage.getItem("allSavedProducts"))
    console.log(productsFromLs)

    for (let i =0; i < productsFromLs.length; i++){
        productName.push(productsFromLs[i].name)
        productVotes.push(productsFromLs[i].timesClicked)

        console.log(productName)
        console.log(productVotes)
    }

    const data = {
        labels: productName,
        datasets:[
            {
                label: "votes",
                data: productVotes,
                backgroundColor: ["yellow"],
                borderColor: ["black"],
                borderWidth: 1,
            },
        ]
    }
    const config = {
        type: "bar",
        data: data,
    }

    const productChart = document.getElementById("chart")

    const resultChart  = new Chart(productChart,config)
}

renderChart();

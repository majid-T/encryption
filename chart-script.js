var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
        labels: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ],
        datasets: [
            {
                label: "After ciphering",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [1, 100, 200],
            },
            {
                label: "After ciphering",
                backgroundColor: "rgb(0, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [10, 50, 75],
            },
        ],
    },

    // Configuration options go here
    options: {},
});

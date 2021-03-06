// TODO:
// Make key from user input
// clear chart with new phrase
// add sample text function
// resolve the bug on letter x

//App data
const letters = [
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
];

//Initiating Chart
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: letters,
    datasets: [
      {
        label: "before ciphering",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
      {
        label: "After ciphering",
        backgroundColor: "rgb(0, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  },
});

//Passing letter distribuation to chart
const showLetterDist = (e) => {
  let phrase;
  let index;
  if (e) {
    phrase = e.target.value;
    index = e.target.dataset.index;
  } else {
    phrase = document.getElementById("cipheredText").value;
    index = 1;
  }

  phrase = phrase.toLowerCase();
  let dis = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  for (word of phrase) {
    let index = letters.indexOf(word);
    if (index === -1) {
      continue;
    }
    dis[index] += 1;
  }
  chart.data.datasets[index].data = dis;
  chart.update();
};

//cyphering the phrase
const cipherPhrase = (phrase) => {
  let encryptBy = 3;
  let encrypted = "";
  for (word of phrase) {
    let index = letters.indexOf(word);
    if (index === -1) {
      encrypted += word;
      continue;
    }

    index += encryptBy;

    if (index >= 26) {
      index -= 26;
    }

    encrypted += letters[index];
  }

  return encrypted;
};

//Handling cipher btn click
const cipher = () => {
  let inputText = document.getElementById("textToCipher").value;
  inputText = inputText.toLowerCase();

  let result = cipherPhrase(inputText);
  document.getElementById("cipheredText").value = result;
  showLetterDist();
};

//adding event listener

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
        label: "After ciphering",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
      //   {
      //     label: "After ciphering",
      //     backgroundColor: "rgb(0, 99, 132)",
      //     borderColor: "rgb(255, 99, 132)",
      //     data: [10, 50, 75],
      //   },
    ],
  },

  // Configuration options go here
  options: {},
});

//Passing letter distribuation to chart
const showLetterDist = () => {
  let phrase = document.getElementById("textToCipher").value;
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
  chart.data.datasets[0].data = dis;
  chart.update();
};

//cyphering the phrase
const cipherPhrase = (phrase) => {
  let encyptBy = 5;
  let encrypted = "";
  for (word of phrase) {
    let index = letters.indexOf(word);
    if (index === -1) {
      encrypted += word;
      continue;
    }

    index += encyptBy;

    if (index > 26) {
      index -= 26;
    }

    encrypted += letters[index];
  }

  console.log(encrypted);
  document.getElementById("cipheredText").value = encrypted;
};

//Handling cipher btn click
const cipher = () => {
  let inputText = document.getElementById("textToCipher").value;
  inputText = inputText.toLowerCase();

  //calculate letter distribution on a phrase
  showLetterDist();
  cipherPhrase(inputText);
};

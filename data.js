let faker = require("faker");
const fs = require("fs");
generateCards = numberOfCards => {
  let arr = [];
  let numrOfCards = numberOfCards;
  let moduleStatusName = [
    "In progress",
    "Submitted",
    "High priority",
    "Ready to release",
    "Done"
  ];
  let keyName = [
    "in_progress",
    "submitted",
    "high_priority",
    "ready_to_release",
    "done"
  ];
  for (let i = 0; i < numrOfCards; i++) {
    //number of course cards
    let guid = faker.random.uuid();
    let courseTitle = faker.finance.accountName();
    let moduleGUID = faker.random.uuid();
    let key = Math.floor(Math.random() * (5 - 0) + 0);
    let moduleTitle = faker.finance.currencyName();
    arr.push({
      guid: guid,
      courseTitle: courseTitle,
      modules: [
        moduleGUID, //'moduleGUID' =
        moduleTitle //'moduleTitle' =
      ],
      moduleStatus: {
        key: keyName[key],
        moduleStatusName: moduleStatusName[key]
      }
    });
  }
  return arr;
};
//console.log(generateCards());
let cardsData = generateCards(100); //call function
fs.writeFile("cardsData.json", "", err => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});

fs.writeFileSync("cardsData.json", JSON.stringify(cardsData, null, "\t"));

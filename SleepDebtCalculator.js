/*
function getSleepHours(day) {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 7;
    case "thursday":
      return 9;
    case "friday":
      return 8;
    case "saturday":
      return 8;
    case "sunday":
      return 9;
    default:
      return "Invalid day inserted. ";
  }
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
*/

// step 12 change
const getActualSleepHours = () => 5 + 8 + 8 + 8 + 12 + 8 + 8;

/*
function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}
*/

// step 12 change
const getIdealSleepHours = idealHours => idealHours * 7;

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    const sleepDebt = idealSleepHours - actualSleepHours;

    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You slept ${-sleepDebt} hour(s) more than you needed.`);
    } else {
        console.log(
            `You should get some rest, you have a ${sleepDebt}-hour sleep debt.`
        );
    }
}

calculateSleepDebt();

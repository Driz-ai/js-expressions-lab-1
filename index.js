
//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};


const day1TempC = (32 - 32) * 5 / 9
const day2TempF = (25 * 9 / 5) + 32
const day3TempC = (70 - 32) * 5 / 9
const day4TempF = (18 * 9 / 5) + 32
const day5TempC = (80 - 32) * 5 / 9
const day6TempF = (15 * 9 / 5) + 32
const day7TempC = (72 - 32) * 5 / 9
const day8TempF = (28 * 9 / 5) + 32
const day9TempC = (68 - 32) * 5 / 9
const day10TempF = (20 * 9 / 5) + 32
const day11TempC = (75 - 32) * 5 / 9
const day12TempF = (23 * 9 / 5) + 32
const day13TempC = (82 - 32) * 5 / 9
const day14TempF = (30 * 9 / 5) + 32
const day15TempC = (65 - 32) * 5 / 9
const day16TempF = (22 * 9 / 5) + 32
const day17TempC = (77 - 32) * 5 / 9
const day18TempF = (26 * 9 / 5) + 32
const day19TempC = (78 - 32) * 5 / 9
const day20TempF = (24 * 9 / 5) + 32
const day21TempC = (73 - 32) * 5 / 9
const day22TempF = (21 * 9 / 5) + 32
const day23TempC = (79 - 32) * 5 / 9
const day24TempF = (27 * 9 / 5) + 32
const day25TempC = (71 - 32) * 5 / 9
const day26TempF = (19 * 9 / 5) + 32
const day27TempC = (74 - 32) * 5 / 9
const day28TempF = (17 * 9 / 5) + 32
const day29TempC = (76 - 32) * 5 / 9
const day30TempF = (29 * 9 / 5) + 32



// ---------- Totals ----------
const tot_temperature_in_celsius =
  day1TempC + day3TempC + day5TempC + day7TempC + day9TempC +
  day11TempC + day13TempC + day15TempC + day17TempC + day19TempC +
  day21TempC + day23TempC + day25TempC + day27TempC + day29TempC

const tot_temperature_in_fahrenheit =
  day2TempF + day4TempF + day6TempF + day8TempF + day10TempF +
  day12TempF + day14TempF + day16TempF + day18TempF + day20TempF +
  day22TempF + day24TempF + day26TempF + day28TempF + day30TempF

// ---------- Averages ----------
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30

// ---------- Display ----------
console.log("Total Celsius:", tot_temperature_in_celsius)
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit)
console.log("Average Celsius:", avg_temperature_in_celsius)
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit)




      























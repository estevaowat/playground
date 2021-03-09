const _ = require('lodash');

const result = [
  {
    sectorId: '682',
    sectorCode: 'Maria Bonita',
    month: 1,
    year: 2020,
    decendial: 1,
    percentage: 0.9651705389004356,
  },
  {
    sectorId: '682',
    sectorCode: 'Maria Bonita',
    month: 1,
    year: 2020,
    decendial: 2,
    percentage: 0.9659750481376875,
  },
  {
    sectorId: '682',
    sectorCode: 'Maria Bonita',
    month: 1,
    year: 2020,
    decendial: 3,
    percentage: 0.7869329789590498,
  },
  {
    sectorId: '682',
    sectorCode: 'Maria Bonita',
    month: 2,
    year: 2020,
    decendial: 1,
    percentage: 0.9651705389004356,
  },
  {
    sectorId: '682',
    sectorCode: 'Maria Bonita',
    month: 2,
    year: 2020,
    decendial: 2,
    percentage: 0.9659750481376875,
  },
  {
    sectorId: '682',
    sectorCode: 'Maria Bonita',
    month: 2,
    year: 2020,
    decendial: 3,
    percentage: 0.7869329789590498,
  },
];
const years = [2020, 2021];
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sectors = ['Maria Bonita'];

console.log(new Set(result.map((item) => item.sectorCode)));

const monthsResult = [];

years.forEach((year) => {
  sectors.forEach((sector) => {
    months.forEach((month) => {
      const months = result.filter(
        (res) =>
          res.month === month && res.year === year && res.sectorCode === sector
      );
      const monthsDecendialSorted = months.sort(
        (a, b) => a.decendial - b.decendial
      );

      monthsResult.push({
        year,
        month,
        sector,
        percentages: monthsDecendialSorted.map((decendial, index) => {
          return index + 1 === decendial.decendial ? decendial.percentage : '';
        }),
      });
    });
  });
});

console.log(monthsResult);

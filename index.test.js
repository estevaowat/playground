describe('Comparisons on jest', () => {
  it('should return true to test', () => {
    const expected = [
      {
        farmCode: '100',
        fieldId: 2,
        fireRisk: 3,
        forecastDate: '2019-07-20',
        radiationShortwave: null,
        rain: 1,
        tmax: null,
        tmin: null,
        updatedAt: expect.any(String),
      },
      {
        farmCode: '100',
        fieldId: 2,
        fireRisk: 4,
        forecastDate: '2019-07-21',
        radiationShortwave: null,
        rain: 2,
        tmax: null,
        tmin: null,
        updatedAt: expect.any(String),
      },
      {
        farmCode: '200',
        fieldId: 3,
        fireRisk: 5,
        forecastDate: '2019-07-22',
        radiationShortwave: null,
        rain: 4,
        tmax: null,
        tmin: null,
        updatedAt: expect.any(String),
      },
    ];

    const result = [
      {
        farmCode: '200',
        fieldId: 3,
        fireRisk: 5,
        forecastDate: '2019-07-22',
        radiationShortwave: null,
        rain: 4,
        tmax: null,
        tmin: null,
        updatedAt: '2021-05-21 15:59:28',
      },
      {
        farmCode: '100',
        fieldId: 2,
        fireRisk: 3,
        forecastDate: '2019-07-20',
        radiationShortwave: null,
        rain: 1,
        tmax: null,
        tmin: null,
        updatedAt: '2021-05-21 15:59:28',
      },
      {
        farmCode: '100',
        fieldId: 2,
        fireRisk: 4,
        forecastDate: '2019-07-21',
        radiationShortwave: null,
        rain: 2,
        tmax: null,
        tmin: null,
        updatedAt: '2021-05-21 15:59:28',
      },
    ];

    const resultFormatted = result
      .sort((a, b) => a.farmCode - b.farmCode)
      .sort((a, b) => a.fieldId - b.fieldId);
    console.log(resultFormatted);

    expect(resultFormatted).toEqual(expected);
  });
});

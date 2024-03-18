import FormatDate from '../components/FormatDate';

describe('FormatDate function', () => {
  it('formats the date correctly', () => {
    // Arrange
    const dateString = 'Sun, 17 Mar 2024 11:34:00.000000000 UTC +00:00';
    const expectedFormattedDate = '03/17/2024';

    // Act
    const formattedDate = FormatDate(dateString);

    // Assert
    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it('returns an empty string if the input is invalid', () => {
    // Arrange
    const invalidDateString = 'Invalid Date';

    // Act
    const formattedDate = FormatDate(invalidDateString);

    // Assert
    expect(formattedDate).toEqual('');
  });
});
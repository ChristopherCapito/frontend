// Format the section number to look nice.
export const FormatSectionNumber = (num) => (num < 10 ? `0${num}.` : `${num}.`);

// Assemble the complete URL.
export const getUrl = (input) => (process.env.NODE_ENV !== 'development' ? input : process.env.API_URL + input);

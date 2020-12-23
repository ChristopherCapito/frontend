// Format the section number to look nice.
export const FormatSectionNumber = (num) => (num < 10 ? `0${num}.` : `${num}.`);

// Assemble the complete URL.
export const getUrl = (input, size) => {
  if (input !== null)
    return process.env.NODE_ENV !== 'development'
      ? [input.slice(0, 74), `${size}_`, input.slice(74)].join('')
      : process.env.API_URL + input;
  // return console.warn('getURL got "null" as a URL. Nothing will be displayed');
};

export const switchLanguage = (language) => {
  return {
      type: 'LANGUAGE_SELECT',
      payload: language
  }
};

export const switchPage = (page) => {
  return {
      type: 'PAGE_SELECT',
      payload: page
  }
};

export const scrollToById = (id: string) => {
  const test = document.getElementById(id);
  if (test) {
    test.scrollIntoView();
  }
};

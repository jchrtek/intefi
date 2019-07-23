export const getElementOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};

export const scrollToAnchor = (event, id, shift = 0, behavior = 'smooth') => {
  if (window.scrollTo) {
    event.preventDefault()
    const element = document.getElementById(id)

    if (element) {
      const rect = getElementOffset(element)

      window.scrollTo({
        left: 0,
        top: rect.top - shift,
        behavior,
      });
    }
  }
};

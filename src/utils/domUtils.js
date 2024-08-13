// Utility function to create a DOM element with attributes
export function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);

  Object.keys(attributes).forEach((key) => {
    element[key] = attributes[key];
  });

  return element;
}

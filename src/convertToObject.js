'use strict';

/**
 * Converts a CSS style string to an object
 * @param {string} stylesString - The CSS style string to convert
 * @return {object} - Object with CSS properties as keys and values
 */
function convertToObject(stylesString) {
  // Handle empty or whitespace-only strings
  if (!stylesString || !stylesString.trim()) {
    return {};
  }

  const result = {};

  // Split by semicolons and filter out empty declarations
  const declarations = stylesString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0);

  for (const declaration of declarations) {
    // Split by the first colon to separate property and value
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue;
    } // Skip if no colon found

    const property = declaration.substring(0, colonIndex).trim();
    const value = declaration.substring(colonIndex + 1).trim();

    // Skip if property or value is empty
    if (!property || !value) {
      continue;
    }

    // Remove extra spaces from property name (but keep hyphens)
    const cleanProperty = property.replace(/\s+/g, '');

    result[cleanProperty] = value;
  }

  return result;
}

module.exports = convertToObject;

function convertHTML(string) {
  // Create a map to map the HTML entities.
  let htmlCorrespondingEntities = new Map([
    ["&","&amp;"],
    ["<","&lt;"],
    [">","&gt;"],
    ['"',"&quot;"],
    ["'","&apos;"]
  ]);

  // Create a string to accept replaced strings.
  // Pass the original string as the value.
  let converted = string;

  // Iterate through the entities in the map.
  for (let entity of htmlCorrespondingEntities.keys()) {
    // Replace all instances of the entity.
    converted = converted.replaceAll(entity,htmlCorrespondingEntities.get(entity));
  }

  // Return the converted string.
  return converted;
}

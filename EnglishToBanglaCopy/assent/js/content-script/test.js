const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  // Check if both date and heading are null
  if (date || heading) {
    // Use date if it exists, otherwise use heading
    const targetElement = date || heading;
    // Insert the badge element after the target element
    targetElement.insertAdjacentElement("afterend", badge);
  } else {
    // Handle case when neither date nor heading is found
    console.log("Neither date nor heading found.");
  }
}

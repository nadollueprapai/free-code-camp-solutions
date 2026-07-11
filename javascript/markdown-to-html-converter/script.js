// Certain parts of this document may have been debugged or modified by ChatGPT. 
// In no way do these modifications intend to be academically dishonest.

// Reference the elements using query selector to select ids.
const markdownInputEl = document.querySelector("#markdown-input");
const htmlOutputEl = document.querySelector("#html-output");
const htmlPreviewEl = document.querySelector("#preview");

function convertHeadings(markdownInput) {
    // Iterate through heading levels 1-3, for #, ##, and ###.
    // Credit to: ChatGPT for helping me understand regex better and coding the next segment.
    for (let headingLevel = 1; headingLevel <= 6; headingLevel++) {
        // Create the regex pattern variable, explanation below.
        /*
          "^" and "$" ensures that it can't be recognized in the 
          middle of a line.
    
          "(?<level>#{${headingLevel})" checks for # characters 
          matching the count provided by headingLevel (1, 2, 3...).
    
          "\\s+" is used instead of "\s+" because we are forming the RegExp using a string literal.
          We want the "\s+" to be preserved for the regex to recognize spaces.
          The string literal would parse over the \s and then cancel it out.
          We need to use a precursor \ to cancel the \ before the s to preserve "\s" for the 
          RegExp.
          The "+" at the end signifies multiple spaces.
    
          "(?<heading>.+)" assigns a capture group named "heading" to ".+".
          ".+" signifies at least one non-endline character(s).
        */
        // Notice that we use "gm" flags to make multiple matches over multiple lines.
        let headingRegex = new RegExp(
            `^(?<level>#{${headingLevel}})\\s+(?<heading>.+)$`,
            "gm"
        );

        // Replace the headings using the regex.
        markdownInput = markdownInput.replace(
            headingRegex,
            `<h${headingLevel}>$<heading></h${headingLevel}>`
        );
    }

    return markdownInput;
}

function convertBoldText(markdownInput) {
    // Handle bold text like "**bold text**" into "<strong>bold text</strong>"
    let boldRegex = new RegExp(
        `[*_][*_](?<boldText>.+?)[*_][*_]`,
        "gm"
    );

    markdownInput = markdownInput.replace(
        boldRegex,
        `<strong>$<boldText></strong>`
    );

    return markdownInput;
}

function convertItalicText(markdownInput) {
    // Handle italic text like "*italic text*" into "<em>italic text</em>"
    let italicRegex = new RegExp(
        `[*_](?<italicText>.+?)[*_]`,
        "gm"
    );

    markdownInput = markdownInput.replace(
        italicRegex,
        `<em>$<italicText></em>`
    );

    return markdownInput;
}

function convertImages(markdownInput) {
    // The following line was written with the help of ChatGPT.
    let imagesRegex = /!\[(.*?)\]\((.*?)\)/gm;

    markdownInput = markdownInput.replace(
        imagesRegex,
        `<img alt="$1" src="$2">`
    );

    return markdownInput;
}

function convertLinks(markdownInput) {
    // The following line was written with the help of ChatGPT.
    let linksRegex = new RegExp(
        `\\[(?<linkText>.+?)\\]\\((?<URL>.+?)\\)`,
        "gm"
    );

    markdownInput = markdownInput.replace(
        linksRegex,
        `<a href="$<URL>">$<linkText></a>`,
    );

    return markdownInput;
}

function convertQuotes(markdownInput) {
    // Handle quotes like "> quote" into "<blockquote>quote</blockquote>"
    let quoteRegex = new RegExp(
        `^>\\s+(?<quote>.+)$`,
        "gm"
    );

    markdownInput = markdownInput.replace(
        quoteRegex,
        `<blockquote>$<quote></blockquote>`
    );

    return markdownInput;
}

// The User Stories specify that the convertMarkdown() functio should take no parameters.
function convertMarkdown() {
    // Create the string of HTML code to return.
    let htmlCode = new String();

    // Get the actual input from the textarea input box element.
    let markdownInput = markdownInputEl.value;

    markdownInput = convertHeadings(markdownInput);

    markdownInput = convertBoldText(markdownInput);

    markdownInput = convertItalicText(markdownInput);

    markdownInput = convertImages(markdownInput);

    markdownInput = convertLinks(markdownInput);

    markdownInput = convertQuotes(markdownInput);

    // Set the htmlCode variable to the regex replaced markdown, which, at this point, should be HTML.
    htmlCode = markdownInput;

    htmlOutputEl.textContent = htmlCode;
    htmlPreviewEl.innerHTML = htmlCode;

    // Return the string of HTML code.
    return htmlCode;
}

// Add a listener to trigger convertMarkdown() function whenever the textarea input box element is editted.
markdownInputEl.addEventListener("input", () => {
    convertMarkdown();
})
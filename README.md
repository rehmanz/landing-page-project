# [Landing Page Project](https://rehmanz.github.io/udacity-landing-page/)

## Table of Contents

* [Requirements](#requirements)
* [Design](#design)

## Requirements

Build a mult-section landing page that dynamically adds content to the page using JavaScript. Demonstrate this will by 

- dynamically building the navigational menu to develop understaing of the virtual DOM in Java Script
- differentiating sections actively being viewed 
- scrolling to the item when a user clicks on a navigation item rather than the default jump

Formulate an ideal workflow and a JavaScript structure. Consider tradeoffs for modifying HTML or CSS. Readability and performance also important factors in developing a scalable and robust application.

## Design

### Navigation Menu

Use [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) before navigation is built
```
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Implement dynamic menu logic!');
});
```

Find all sections and use [document fragments](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) to reference each section to create nav bar & update CSS styling
```
<p><a href="#section1">Section 1</a></p>
```

Find the `nav` element and add the nav bar as unsorted list items
```
  <header class="page__header">
    <nav class="navbar__menu">
      <!-- Navigation starts as empty UL that will be populated with JS -->
      <ul id="navbar__list"></ul>
    </nav>
  </header>
```

Performance considerations include
- using `DocumentFragment` to rebuild the entire page for limiting the reflow and paint to one
- using `document.querySelectorAll("section")` to fetch all sections in one call


## Active Section

Approach to making a section active involves [detecting](https://knowledge.udacity.com/questions/85408#96950%20.) which section on the page is in viewport.

Add `scroll` event call `makeActive()`
```
// Make sections active
document.addEventListener("scroll", function() {
  makeActive();
});
```

The use `getBoundingClientReact()` to determine if section is closest to the top and activate it accordingly
```
// Add class 'active' to section when it is near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate. 
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
    } else {
      // Remove active state from other section and corresponding Nav link.
    }
  }
}
```
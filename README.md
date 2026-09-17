# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email dynamically inserted after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size (Mobile & Desktop)
- See hover and focus states for all interactive elements on the page
- Dismiss the success message and return to a clean sign-up state

### Screenshot

![Newsletter sign-up form preview](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/resad505/newsletter-sign-up)
- Live Site URL: [Live Demo](https://newsletter-sign-up-pi-umber.vercel.app/)

---

## My process

### Built with

- Semantic HTML5 markup (`<main>`, `<ul>`, `<li>`, `<form>`, `<footer>`)
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first styling via browser CDN
- Flexbox & Responsive design (Mobile-first responsive adaptations)
- Vanilla JavaScript (ES6+)
- Regular Expression (RegEx) for RFC-compliant email pattern validation
- Accessibility (A11y) enhancements (`novalidate`, `aria-live="polite"`, `aria-invalid`)

### What I learned

Throughout this project, I strengthened my frontend fundamentals, particularly focusing on the bridge between clean HTML structure, utility styling, and robust JavaScript event handling:

1. **Form Validation & Preventing Default Submission:**
   Preventing native browser page reloads using `e.preventDefault()` and suppressing standard browser tooltips via `<form novalidate>` to provide a custom UI error state.

2. **Dynamic Error Feedback & Separation of Concerns:**
   Separating JavaScript logic completely from HTML by using `addEventListener` instead of inline `onclick` handlers, and dynamically listening to the `input` event to instantly clear errors as soon as the user starts typing:
   ```javascript
   input.addEventListener("input", hideError);

   function hideError() {
       input.classList.remove("bg-red-100", "border-red-500");
       error__msg.classList.add("!hidden");
   }
   ```

3. **Accessibility (A11y) Best Practices:**
   Using `aria-live="polite"` on the error container so screen reader users are promptly notified of validation errors, and dynamically updating `aria-invalid` (`true` when invalid, `false` when valid).

### Continued development

In upcoming projects, I plan to:
- Deepen my knowledge of advanced client-side form validation patterns and micro-animations.
- Transition from CDN-based Tailwind to a dedicated build toolchain (such as Vite) for production-optimized asset bundling.
- Implement comprehensive unit and end-to-end testing for UI interactions.

### Useful resources

- [MDN Web Docs - Client-side form validation](https://developer.mozilla.org) - Invaluable reference for accessible form patterns and HTML form attributes.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Great reference for utility classes, gradient setups, and theme customization.

---

## Author

- GitHub - [@resad505](https://github.com/resad505)
- LinkedIn - [Reshad Mammedov](https://www.linkedin.com/in/reshadmammedov)
- Frontend Mentor - [@resad505](https://www.frontendmentor.io/profile/resad505)

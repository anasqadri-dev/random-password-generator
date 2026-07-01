# Random Password Generator

> A random password generator built with vanilla JavaScript — 16-character passwords combining uppercase, lowercase, numbers, and symbols with one-click copy to clipboard.

## Demo

[▶ Generate an strong password for yourself](YOUR_LINKEDIN_POST_LINK)

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Warm dark design with 3D button press effect |
| JavaScript (ES6) | Password generation, clipboard API, DOM manipulation |

---

## Features

- Generates a 16-character password on page load automatically
- Combines uppercase, lowercase, numbers, and symbols
- One-click copy to clipboard
- 3D press effect on the generate button using CSS box-shadow
- SVG icons — no icon library dependency
- Responsive design for mobile and desktop

---

## Project Structure

```
random-password-generator/
├── index.html     # Page structure and SVG icons
├── style.css      # Warm dark brown design system, 3D button
└── script.js      # Password generation and clipboard logic
```

---

## Setup

No build step. No dependencies. No server.

```bash
git clone https://github.com/anasqadri-dev/random-password-generator.git
cd random-password-generator
```

Open `index.html` directly in any browser.

---

## How It Works

1. On `DOMContentLoaded`, `generatePassword()` runs automatically — the user sees a password immediately
2. `generatePassword()` builds a string from all character sets and picks random characters until the password reaches 16 characters
3. `copyPassword()` selects the input value and writes it to the clipboard
4. Clicking Generate calls `generatePassword()` again and replaces the current password

---

## Character Set

```javascript
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers   = "0123456789";
const symbols   = "!@#$%^&*()_+[]{}|;:,.<>?";
```

All four are combined into one pool. Each character is selected independently using `Math.floor(Math.random() * allCharacters.length)`.

---

## Known Limitations

**`Math.random()` is not cryptographically secure**

`Math.random()` generates pseudorandom numbers seeded by the JavaScript engine. Its output is theoretically predictable. For a real password manager or security-critical tool, the correct API is:

```javascript
const array = new Uint32Array(1);
crypto.getRandomValues(array);
const index = array[0] % allCharacters.length;
```

`crypto.getRandomValues()` uses the operating system's cryptographically secure random number generator. This project uses `Math.random()` for simplicity as a learning exercise.

**`document.execCommand("copy")` is deprecated**

The modern clipboard API is:

```javascript
navigator.clipboard.writeText(text);
```

---

## What I Learned

- How character sets combine into a single pool — the selection is uniform across the entire string, which is why every character type appears naturally
- Why `DOMContentLoaded` is the right place to auto-run logic — it fires after the HTML is parsed but before images load, so the DOM is ready but the page is not blocked
- The difference between `Math.random()` and `crypto.getRandomValues()` — one is convenient, one is actually safe for security-sensitive use
- How the 3D button press effect works — `box-shadow` simulates depth at rest, `translateY` moves the button down on click, and reducing the shadow makes it feel physically pressed

---

## License

MIT
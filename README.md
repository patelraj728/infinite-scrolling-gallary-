# Infinite Scrolling Gallery

A simple React application that displays an infinite scrolling image gallery using the Picsum Photos API.

## Features

* Infinite scrolling
* Lazy loaded images
* Responsive gallery layout
* Fetches random images from Picsum API
* Built with React and Axios
* Styled using Tailwind CSS

---

## Demo

Scroll down continuously to load more images automatically.

---

## Technologies Used

* React
* Axios
* Tailwind CSS
* Picsum Photos API

---

## Installation

Clone the repository:

```bash
git clone https://github.com/patelraj728/infinite-gallery.git
```

Move into the project folder:

```bash
cd infinite-gallery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Project Structure

```bash
src/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## API Used

Picsum Photos API:

```bash
https://picsum.photos/v2/list?page=1&limit=10
```

---

## How Infinite Scroll Works

The application listens for the window scroll event.

When the user reaches near the bottom of the page:

1. The page state increases
2. A new API request is triggered
3. New images are appended to the existing gallery

---

## Main Logic

```js
const bottom =
  window.innerHeight + window.scrollY >=
  document.documentElement.scrollHeight - 100;

if (bottom && !loading) {
  setPage((prev) => prev + 1);
}
```

---

## Screenshot

Add your project screenshot here.

```bash
/public/screenshot.png
```

---

## Future Improvements

* Masonry grid layout
* Search functionality
* Image modal preview
* Dark/light theme
* Better loading skeletons

---

## Author

Raj patel

---


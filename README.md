# React Date Counter

A simple React application that calculates a past or future date based on a user-controlled counter.

The user can change the step value, increase or decrease the count, and instantly view the corresponding date relative to today.

---

## Overview

This project was built to practise React state management and date manipulation.

The application uses two state variables:

- `step` controls how much the count changes
- `count` represents the number of days before or after today

Based on the count value, the application calculates and displays a past or future date.

---

## Features

- Increase or decrease the step value
- Prevent the step value from going below `1`
- Increase the count using the current step
- Decrease the count using the current step
- Display today's date when the count is `0`
- Display a future date when the count is positive
- Display a past date when the count is negative
- Update the date dynamically whenever the state changes

---

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- CodeSandbox

---

## React Concepts Practised

This project helped me practise:

- Functional components
- `useState` Hook
- Event handling
- Functional state updates
- Conditional rendering
- Component composition
- Dynamic UI updates
- JavaScript Date object
- Date manipulation
- Ternary operators

---

## How It Works

The application maintains two state variables:

```js
const [step, handleStep] = useState(1);
const [count, handleCount] = useState(0);
```

The `step` value determines how much the count changes.

For example, when the step is `2`:

- Clicking the count increment button adds `2`
- Clicking the count decrement button subtracts `2`

The application creates a new date based on today's date:

```js
const date = new Date();

date.setDate(date.getDate() + count);
```

The count is added to the current date to calculate a future or past date.

---

## Date Message Logic

The application displays different text depending on the count value:

- When `count === 0`, it displays today's date
- When `count > 0`, it displays the future date
- When `count < 0`, it displays the past date

Example:

```text
Today is Fri Jul 24 2026
```

```text
5 days from today is Wed Jul 29 2026
```

```text
3 days ago Tue Jul 21 2026
```

---

## Project Structure

```text
react-date-counter/
├── src/
│   ├── App.js
│   ├── styles.css
│   └── index.js
├── public/
├── package.json
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone <your-repository-url>
```

### Navigate to the Project

```bash
cd react-date-counter
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

The application will run in your browser.

---

## Run on CodeSandbox

This project was initially created using CodeSandbox.

You can open the project directly in CodeSandbox and edit or run it without installing anything locally.

---

## Learning Outcome

While building this project, I learned:

- How React state stores changing data
- How functional state updates work
- How one state value can affect another action
- How React re-renders the UI after a state update
- How to use the JavaScript Date object
- How to calculate past and future dates
- How to display different messages using conditional rendering

---

## Future Improvements

- Add a reset button
- Replace the alert with disabled step controls
- Prevent invalid step values
- Allow users to select a custom starting date
- Add an input field for direct count entry
- Improve the user interface
- Add smooth button animations
- Improve mobile responsiveness

---

## Author

**Yash Guram**

Computer Engineering graduate learning React and full-stack web development.

---

## Project Status

Completed as a React state and date manipulation practice project.

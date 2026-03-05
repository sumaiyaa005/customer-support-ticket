- What is JSX, and why is it used?
  \*\* JSX is like HTML, but written inside JavaScript.
  1. Improves readability – UI structure looks similar to HTML.

  2. Easy to write UI components – Developers can combine JavaScript logic and UI in the same place.

  3. Better development experience – Errors can be detected more easily during development.

  4. React compiles JSX into React.createElement() calls behind the scenes:



- What is the difference between State and Props?
  - Props are used to pass data from parent to child components.

  - State is used to store and manage data inside a component.

  - Props cannot be changed by the child component.

  - State can be updated inside the component using useState.



- What is the useState hook, and how does it work?

  \*The useState hook is a built-in React hook used to manage state inside functional components. It allows a component to store data that can change over time and automatically re-render when that data is updated. The hook returns two things: the current state value and a function that is used to update that value. An initial value is passed as an argument when declaring useState. When the update function is called, React updates the state and re-renders the component to reflect the new data. It can handle different data types such as numbers, strings, arrays, objects, and booleans. State updates are asynchronous and affect only the component where they are defined (and its children if passed as props).



- How can you share state between components in React?
  \*\* State is shared between components by lifting the state up to a common parent and passing it down as props to child components



- How is event handling done in React?
  Event handling in React is done by attaching event functions (like onClick, onChange) directly to elements



## 🔗 Submission

- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE

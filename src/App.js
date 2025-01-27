import React, { useReducer } from "react";

// Reducer function to handle counter actions
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_BY_5":
      return { ...state, count: state.count + 5 };
    case "DECREMENT_BY_5":
      return { ...state, count: state.count - 5 };
    case "RESET":
      return { ...state, count: action.initialValue }; // Reset to initial value
    default:
      return state;
  }
};

function Counter({ name, state, dispatch, initialValue }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_5" })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_5" })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "RESET", initialValue })}>
        Reset
      </button>
    </div>
  );
}

function App() {
  // Initialize two counters using useReducer
  const [counter1, dispatch1] = useReducer(counterReducer, { count: 0 });
  const [counter2, dispatch2] = useReducer(counterReducer, { count: 10 }); // Initial value for second counter is 10

  return (
    <div>
      <h1>Two Counters</h1>
      <Counter
        name="First Counter"
        state={counter1}
        dispatch={dispatch1}
        initialValue={0} // Initial value for first counter
      />
      <Counter
        name="Second Counter"
        state={counter2}
        dispatch={dispatch2}
        initialValue={10} // Initial value for second counter
      />
    </div>
  );
}

export default App;

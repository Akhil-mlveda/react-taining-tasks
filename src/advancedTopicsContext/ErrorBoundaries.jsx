import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

// export default class ErrorBoundaries extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     try {
//         throw new Error("can't do operations")
//     } catch (error) {
//       this.setState({ error });
//     }
//   }

//   render() {
//     if (this.state.error) {
//       return <h1>Caught an error.</h1>
//     }
//     return <button onClick={this.handleClick}>Click Me</button>
//   }
// }

// function ErrorBoundaries() {
//   const [errorState, setErrorState] = useState(false);
//   const handleClick = () => {
//     try {
//       throw new Error("can't do operations");
//     } catch {
//       setErrorState({ errorState });
//     }
//   };
//   return (
//     <>
//       {errorState ? (
//         <h1>Caught an error.</h1>
//       ) : (
//         <button onClick={handleClick}>Click Here</button>
//       )}
//     </>
//   );
// }

// export default ErrorBoundaries;



export default function ErrorBoundaries() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} input={userInput} />
      {!validInput && (
        <p className="center">Enter a duration grater than zero.</p>
      )}
      {validInput && <Results input={userInput} />}
    </>
  );
}

export default App;

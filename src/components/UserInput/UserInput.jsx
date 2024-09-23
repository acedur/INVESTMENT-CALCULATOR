import "./UserInput.css";

function UserInput({ onInputChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={input.initialInvestment}
            required
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            value={input.annualInvestment}
            required
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={input.expectedReturn}
            required
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={input.duration}
            required
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;

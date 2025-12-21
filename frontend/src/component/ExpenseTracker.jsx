import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

class ExpenseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      total: 0,
      error: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses !== this.state.expenses) {
      const total = this.state.expenses.reduce(
        (sum, item) => sum + item.amount,
        0
      );
      this.setState({ total });
    }
  }

  addExpense = (product, amount) => {
    if (!product || amount === "") {
      this.setState({ error: "Please fill in this field." });
      return;
    }

    if (amount < 0) {
      this.setState({ error: "Invalid amount: Please enter a positive value." });
      return;
    }

    this.setState({ error: "" });

    const existingIndex = this.state.expenses.findIndex(
      (item) => item.product === product
    );

    let updatedExpenses = [...this.state.expenses];

    if (existingIndex !== -1) {
      updatedExpenses[existingIndex].amount += amount;
    } else {
      updatedExpenses.push({ product, amount });
    }

    this.setState({ expenses: updatedExpenses });
  };

  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>

        <ExpenseForm addExpense={this.addExpense} error={this.state.error} />

        <h2>Expenses</h2>

        <ExpenseList expenses={this.state.expenses} />

        <h3>Total: ${this.state.total.toFixed(2)}</h3>
      </div>
    );
  }
}

export default ExpenseTracker;


/* ExpenseForm.jsx
import React, { Component } from "react";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      amount: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(
      this.state.product,
      Number(this.state.amount)
    );
    this.setState({ product: "", amount: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Product"
          value={this.state.product}
          onChange={(e) => this.setState({ product: e.target.value })}/>

        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}/>

        <button type="submit">Add Expense</button>

        {this.props.error && (
          <p style={{ color: "red" }}>{this.props.error}</p>
        )}
      </form>
    );
  }
}

export default ExpenseForm;
*/


/* ExpenseList.jsx

import React from "react";

class ExpenseList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.expenses.map((item, index) => (
          <li key={index}>
            {item.product} - ${item.amount}
          </li>
        ))}
      </ul>
    );
  }
}

export default ExpenseList;
*/
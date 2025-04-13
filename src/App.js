import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Software Development",
      description: "School fees",
      category: "personal",
      amount: 174000,
      date: "2025-02-03",
    },
    {
      id: 2,
      name: "Rent",
      description: "Rent for NBO house",
      category: "bills",
      amount: 25000,
      date: "2025-04-10",
    },
    {
      id: 3,
      name: "Wi-Fi",
      description: "Wi-Fi subscription",
      category: "utilities",
      amount: 5000,
      date: "2025-04-01",
    },
    {
      id: 4,
      name: "Electricity",
      description: "Power bill",
      category: "utilities",
      amount: 2500,
      date: "2025-04-01",
    },
    {
      id: 5,
      name: "Supplies",
      description: "Household items",
      category: "general",
      amount: 15000,
      date: "2025-04-05",
    },
    {
      id: 6,
      name: "Fare",
      description: "Bus fare to town",
      category: "travel",
      amount: 100,
      date: "2025-04-11",
    },
  ]);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [sortOrder, setSortOrder] = useState({
    key: null,
    direction: "ascending",
  });

  const handleAdd = (formData) => {
    const newExpenses = {
      id: expenses.length + 1,
      ...formData,
    };
    setExpenses([...expenses, newExpenses]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSearch = (event) => {
    setSearchPhrase(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchPhrase.toLowerCase())
    );
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortOrder.key === key && sortOrder.direction === "ascending") {
      direction = "descending";
    }
    setSortOrder({ key, direction });
  };

  const sortedExpenses = [...filteredExpenses].sort((x, y) => {
    if (sortOrder.key) {
      const xValue = x[sortOrder.key];
      const yValue = y[sortOrder.key];

      if (xValue < yValue) {
        return sortOrder.direction === "ascending" ? -1 : 1;
      }
      if (xValue > yValue) {
        return sortOrder.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-3">Expense Tracker</h1>
      <p className="text-muted mb-4 col-4">
        Start taking control of your finances and life. Record, categorize, and
        analyze your spending.
      </p>
      <div className="row">
        <div id="expense-form" className="col-md-4 mb-4">
          <ExpenseForm onAdd={handleAdd} />
        </div>
        <div id="expense-table" className="col-md-8">
          <div className="card">
            <div className="card-body">
              <ExpenseTable
                expenses={sortedExpenses}
                searchPhrase={searchPhrase}
                onSearch={handleSearch}
                onSort={handleSort}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

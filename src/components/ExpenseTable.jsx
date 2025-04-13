import ExpenseRow from "./ExpenseRow";
import ExpenseTotal from "./ExpenseTotal";
export default function ExpenseTable({ expenses, onDelete, onSort, searchPhrase, onSearch }) {
  return (
    <>
      <div className="mb-3 row">
        <div className="d-flex align-items-between justify-content-between gap-2">
          <div className="d-flex mb-0">
            <input
              id="expense-search"
              type="text"
              className="form-control"
              style={{ width: "300px" }}
              placeholder="Search expenses..."
              value={searchPhrase}
              onChange={onSearch}
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
          <label htmlFor="sortSelect" className="mb-0">
            Sort by:
          </label>
          <select
            id="sortSelect"
            className="form-select"
            style={{ width: "200px" }}
            onChange={(event) => onSort(event.target.value)}
          >
            <option value="">-- Choose field --</option>
            <option value="description">Description</option>
            <option value="category">Category</option>
          </select>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount (Ksh)</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseRow
                key={expense.id}
                expense={expense}
                onDelete={onDelete}
              />
            ))}
          </tbody>
          <ExpenseTotal expenses={expenses} />
        </table>
      </div>
    </>
  );
}

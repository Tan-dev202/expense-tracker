import ExpenseRow from "./ExpenseRow";
export default function ExpenseTable({ expenses, onDelete, onSort }) {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th onClick={() => onSort('name')} style={{cursor: 'pointer'}}>Expense</th>
              <th onClick={() => onSort('description')} style={{cursor: 'pointer'}}>Description</th>
              <th onClick={() => onSort('category')} style={{cursor: 'pointer'}}>Category</th>
              <th onClick={() => onSort('amount')} style={{cursor: 'pointer'}}>Amount (Ksh)</th>
              <th onClick={() => onSort('date')} style={{cursor: 'pointer'}}>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <ExpenseRow 
                key={expense.id} 
                expense={expense} 
                onDelete={onDelete} 
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }  
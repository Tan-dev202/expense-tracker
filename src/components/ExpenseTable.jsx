import ExpenseRow from "./ExpenseRow";
import ExpenseTotal from "./ExpenseTotal";
export default function ExpenseTable({ expenses, onDelete, onSort }) {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th style={{cursor: 'pointer'}} onClick={() => onSort('name')}>Expense</th>
              <th style={{cursor: 'pointer'}} onClick={() => onSort('description')}>Description</th>
              <th style={{cursor: 'pointer'}} onClick={() => onSort('category')}>Category</th>
              <th style={{cursor: 'pointer'}} onClick={() => onSort('amount')}>Amount (Ksh)</th>
              <th style={{cursor: 'pointer'}} onClick={() => onSort('date')}>Date</th>
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
          <ExpenseTotal expenses={expenses} />
        </table>
      </div>
    );
  }  
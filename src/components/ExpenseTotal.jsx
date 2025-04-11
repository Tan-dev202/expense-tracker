export default function ExpenseTotal({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <tfoot className="table border border-bottom-1">
      <tr>
        <td></td>
        <td></td>
        <td className="fw-bold">Total:</td>
        <td className="fw-bold">{total}</td>
        <td></td>
      </tr>
    </tfoot>
  );
}

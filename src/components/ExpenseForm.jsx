import { useState } from "react";
export default function ExpenseForm({ onAdd }) {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
    
    const handleOnChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      onAdd({
        ...formData,
        amount: parseFloat(formData.amount)
      });
      setFormData({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: ""
      });
    };
    
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-3">Add Expense</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter expense name"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter expense category"
                name="category"
                value={formData.category}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount (in Ksh)"
                name="amount"
                value={formData.amount}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  
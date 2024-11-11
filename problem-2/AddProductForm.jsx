// AddProductForm.js
import  { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [formState, setFormState] = useState({ name: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name: formState.name, price: formState.price });
    setFormState({ name: '', price: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formState.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formState.price}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;

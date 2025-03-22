import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "", password: "" }); // Clear form
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>React Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.formGroup}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.formGroup}>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input} />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Inline Styling Object
const styles = {
  container: { maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f9f9f9" },
  heading: { textAlign: "center", color: "#333" },
  form: { display: "flex", flexDirection: "column" },
  formGroup: { marginBottom: "10px" },
  input: { width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" },
  button: { backgroundColor: "blue", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" },
  error: { color: "red", fontSize: "12px" },
};

export default Form;

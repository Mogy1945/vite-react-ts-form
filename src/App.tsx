import React, { ChangeEvent, useState } from "react";
import "./App.css";
import "./style.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // 送信ロジックをこちらに実装します
    // sendDataToServer(formData);
    alert("Data submitted!");
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form__item-box">
          <label className="form__name-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form__name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__item-box">
          <label className="form__email-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form__email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__item-box">
          <label className="form__message-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form__message"
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </section>
      <section id="previewSection">
        <h2>Preview:</h2>
        <div>
          Name: <span>{formData.name}</span>
        </div>
        <div>
          Email: <span>{formData.email}</span>
        </div>
        <div>
          Message: <span>{formData.message}</span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;

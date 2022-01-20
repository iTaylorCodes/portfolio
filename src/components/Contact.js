import { send } from "emailjs-com";
import { useState } from "react";
import "../stylesheets/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="Contact row">
      <div className="col-md-10 col-xl-8 transition-width">
        <div className="Contact-header">
          <p className="bg-tag">{"< h2 >"}</p>

          <h2>Contact Me</h2>

          <p className="bg-tag">{"< / h2 >"}</p>
        </div>

        <div className="Contact-description">
          <p className="bg-tag">{"< p >"}</p>

          <p className="Contact-description-about">
            I'm interested in front end or full-stack based roles. Remote
            positions preferred, however I am open to opportunities in the Los
            Angeles area as well.
          </p>

          <p className="bg-tag">{"< / p >"}</p>
        </div>

        <form
          className="Contact-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <p className="bg-tag">{"< form >"}</p>

          <ul>
            <li className="row">
              <input
                placeholder="Name"
                className="half col"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                placeholder="Email"
                className="half col ms-2"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                style={{ height: "150px" }}
                onChange={handleChange}
              />
            </li>
          </ul>

          <div className="Contact-button-div">
            <button className="cy-button">Send Message!</button>
          </div>

          <p className="bg-tag">{"< / form >"}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;

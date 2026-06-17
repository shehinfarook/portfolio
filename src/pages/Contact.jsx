import { site } from "../data/site";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_raeiwbp",
        "template_jjeyuwi",
        e.target,
        "XOpBlffoo7c2kyMqA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message recieved successfully! I will get back to you soon.");

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something meaningful together.</h2>
        <p className="lead-copy">
  Whether it’s a full-stack application or a frontend project, I can help turn your ideas into scalable, reliable web solutions.
</p>
      </section>

      <section className="content-section contact-grid">
        <article className="glass-card">
          <p className="eyebrow">Direct contact</p>
          <div className="stacked-list">
            <div>
              <span className="label">Email</span>
              <p>{site.email}</p>
            </div>
            <div>
              <span className="label">Phone</span>
              <p>{site.phone}</p>
            </div>
            <div>
              <span className="label">Availability</span>
              <p>{site.availability}</p>
            </div>
          </div>
        </article>

<form onSubmit={handleSubmit} className="contact-form glass-card">
  <p className="eyebrow">Contact</p>
  <label>
   Name
  <input name="user_name" type="text" placeholder="Your name" required />
    </label>

    < label>
       Email
      <input name="user_email" type="email" placeholder="Your email" required />
     </label>

  <label>
    Message
    <textarea name="message"
      placeholder="Tell me about your project or opportunity..."
      rows="5"
      required
    />
  </label>

  <button type="submit" className="button button--primary">
    Send Message
  </button>
</form>
      </section>
    </main>
  );
};

export default Contact;

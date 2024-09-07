import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="SectionTitle">Contact</h1>
        <forms action="https://formspree.io/f/mblrbpez" method="POST">
        <div className="formGroup">
            <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" 
                name="name" 
                id="name"
                placeholder="Name" 
                required 
                />
            </div>
        <div className="formGroup">
            <label htmlFor="Email" hidden>
                    Email
                </label>
                <input type="email" 
                name="email" 
                id="email"
                placeholder="email" 
                required 
                />
            </div>

            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                name="message" 
                id="message"
                placeholder="Message" 
                required >
                </textarea>
            </div>
            <input className="hover btn" 
            type="submit" 
            value="Submit"
            />
        </forms>
    </section>
  );
}

export default Contact;
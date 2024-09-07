import styles from './ContactStyles.module.css';
import { useForm} from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mblrbpez");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section id="contact" className={styles.container}>
        <h1 className="SectionTitle">Contact</h1>
        <form onSubmit = {handleSubmit}>
        <div className={styles.formGroup}> 
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
        <div className={styles.formGroup}>
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

            <div className={styles.formGroup}>
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
        </form>
    </section>
  );
}

export default Contact;
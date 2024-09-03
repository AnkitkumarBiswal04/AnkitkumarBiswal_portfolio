import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="SectionTitle">Contact</h1>
        <forms action="">
        <div className="formGroup">
            <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" 
                name="name" 
                id="name"
                placeholder="Name" 
                reguired 
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" 
                name="email" 
                id="email"
                placeholder="Email" 
                reguired 
                />
            </div>

        </forms>
    </section>
  );
}

export default Contact;
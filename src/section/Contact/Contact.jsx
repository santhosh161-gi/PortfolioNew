import React from 'react'
import styles from '../../section/Contact/ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
       <h1 className='sectionTitle'>Contact</h1>
       <form>
        <div className='formGroup'>
            <label htmlFor="name" hidden>Name</label>
            <input type="text" 
            name='name'
            id='name'
            placeholder='Name'
            required
            />
        </div>
        <div className='formGroup'>
            <label htmlFor="Email" hidden>Email</label>
            <input type="text" 
            name='email'
            id='email'
            placeholder='Email'
            required
            />
        </div>
           <div className='formGroup'>
            <label htmlFor="Mess" hidden>Message</label>
            <textarea type="text" 
            name='Mess'
            id='Mess'
            placeholder='Message'
            required
            />
        </div>
        <input type="submit" className='hover btn'  value="submit"/>
       </form>
    </section>
  )
}

export default Contact

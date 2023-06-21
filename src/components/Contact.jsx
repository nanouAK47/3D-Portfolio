import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from './hoc';
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_43mk1ze',
      'template_2yho4ef',
      {
        from_name: form.name,
        to_name: 'Nael',
        form_email: form.email,
        to_email: 'nael.boulayoune@gmail.com',
        message: form.message,
      },
      'bg4e6GUn_YU3faDmN'
      )
      .then(() => {
        setLoading(false);
        alert('Merci de m\'avoir contacté, je vous répond au plus vite, à bientôt !');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);

        alert('Il y a une erreur quelque part, merci de réessayer !')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Discuter avec moi</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre nom et prénom</span>
            <input
              required
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Mehdi Cament"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre e-mail</span>
            <input
              required
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votremail@blabla.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre message</span>
            <textarea
              required
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Bonjour Nael, je veux un site internet qui déchire !"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Chargement...' : 'Envoyer'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 wl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact, "contact");
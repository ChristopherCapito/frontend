import { m as motion } from 'framer-motion';
import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const ContactForm = ({ formVisible }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={`w-full font-light text-lg md:text-xl lg:text-2xl ${formVisible ? '' : 'hidden'}`} id="mailing">
      <motion.div variants={container} initial="hidden" animate="show" exit="hidden">
        <motion.div variants={listItem}>
          <p className="py-8 text-xl md:text-2xl lg:text-3xl font-bold">Solving your problem starts here.</p>
        </motion.div>

        <form name="contact" method="POST" action="/success" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <motion.div variants={listItem}>
            <label className="p-0 m-0" htmlFor="name">
              <p>What's your name?</p>
              <input
                className="w-full p-0 font-bold text-accent bg-transparent mb-12 md:mb-24 placeholder-gray-900"
                type="text"
                required
                autoComplete="true"
                netlify="true"
                name="name"
                id="name"
                placeholder="Your name."
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Your name.')}
              />
            </label>
          </motion.div>
          <motion.div variants={listItem}>
            <label htmlFor="email">
              <p>What's your email?</p>
              <input
                className="w-full p-0 font-bold text-accent bg-transparent mb-12 md:mb-24 placeholder-gray-900"
                type="email"
                autoComplete="true"
                required
                netlify="true"
                name="email"
                id="email"
                placeholder="Your email."
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Your email.')}
              />
            </label>
          </motion.div>
          <motion.div variants={listItem}>
            <label htmlFor="phone">
              <p>
                What's your phone number? <span className="text-lg text-dark">(optional)</span>
              </p>
              <input
                className="w-full p-0 font-bold text-accent bg-transparent mb-12 md:mb-24 placeholder-gray-900 "
                type="tel"
                autoComplete="true"
                netlify="true"
                name="phone"
                id="phone"
                placeholder="Your phone number."
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Your phone number.')}
              />
            </label>
          </motion.div>
          <motion.div variants={listItem}>
            <label htmlFor="message">
              <p className="">How can I help?</p>
              <TextareaAutosize
                className="w-full font-bold text-accent  p-0 bg-transparent mb-12 md:mb-24 placeholder-gray-900"
                type="text"
                required
                netlify="true"
                name="message"
                id="message"
                placeholder="How can I help?"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Your message.')}
              />
            </label>
          </motion.div>
          <motion.div variants={listItem}>
            <button className="bg-light text-black px-8" type="submit">
              Send
            </button>
            <p className="hidden">
              <label htmlFor="bot-field">
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;

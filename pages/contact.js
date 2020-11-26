import { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import Icon from '@iconify/react';
import xing from '@iconify/icons-simple-icons/xing';
import linkedin from '@iconify/icons-simple-icons/linkedin';
import instagram from '@iconify/icons-simple-icons/instagram';
import gmailIcon from '@iconify/icons-mdi/gmail';

const Contact = () => {
  // const [formButtonDisabled, setFormButtonDisabled] = useState(true);
  // const [formButtonText, setFormButtonText] = useState('Send');
  // const [name, setName] = useState('');
  // const [mail, setMail] = useState('');
  // const [formContent, setFormContent] = useState('');
  const [active, setActive] = useState(false);

  const formStyle = active ? '' : 'hidden';
  const selectionStyle = active ? 'hidden' : 'flex flex-col items-center';

  return (
    <div className="container mx-auto px-8 text-light text-2xl">
      <div className={selectionStyle}>
        <div className="flex">
          <a className="m-8" href="https://de.linkedin.com/in/christopher-capito-41863b145">
            <Icon icon={linkedin} />
          </a>
          <a className="m-8" href="https://www.xing.com/profile/Christopher_Capito">
            <Icon icon={xing} />
          </a>
        </div>
        <div className="flex">
          <a className="m-8" href="https://www.instagram.com/capito.rocks/">
            <Icon icon={instagram} />
          </a>
          <a className="m-8 cursor-pointer" onClick={(e) => setActive(true)}>
            <Icon icon={gmailIcon} />
          </a>
        </div>
      </div>
      <div className={`w-full ${formStyle}`} id="mailing">
        <input
          ref="jim"
          className="w-full bg-dark p-0 placeholder-gray-900"
          type="text"
          required
          netlify
          name="name"
          id="name"
          placeholder="What's your name?"
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = "What's your name?")}
        />
        <input
          className="w-full bg-dark p-0"
          type="email"
          required
          netlify
          name="email"
          id="email"
          placeholder="What's your email?"
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = "What's your email?")}
        />
        <input
          className="w-full bg-dark p-0"
          type="text"
          required
          netlify
          name="phone"
          id="phone"
          placeholder="What's your phone number?"
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = "What's your phone number?")}
        />
        <TextareaAutosize
          className="w-full bg-dark p-0"
          type="text"
          required
          netlify
          autoFocus
          name="message"
          id="message"
          placeholder="How can I help?"
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'How can I help')}
        />
      </div>
    </div>
  );
};

export default Contact;

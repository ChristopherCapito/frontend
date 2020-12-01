import { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import Icon from '@iconify/react';
import xing from '@iconify/icons-simple-icons/xing';
import linkedin from '@iconify/icons-simple-icons/linkedin';
import instagram from '@iconify/icons-simple-icons/instagram';
import gmailIcon from '@iconify/icons-mdi/gmail';

const Contact = () => {
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
          <a
            className="m-8 cursor-pointer"
            onClick={() => setActive(true)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setActive(true)}
          >
            <Icon icon={gmailIcon} />
          </a>
        </div>
      </div>
      <div className={`w-full ${formStyle}`} id="mailing">
        <form name="contact" method="POST" action="/success" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input
            className="w-full bg-transparent mb-4 p-0 placeholder-gray-900"
            type="text"
            required
            netlify="true"
            name="name"
            id="name"
            placeholder="What's your name?"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = "What's your name?")}
          />
          <input
            className="w-full bg-transparent mb-4 p-0 placeholder-gray-900"
            type="email"
            required
            netlify="true"
            name="email"
            id="email"
            placeholder="What's your email?"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = "What's your email?")}
          />
          <input
            className="w-full bg-transparent mb-4 p-0 placeholder-gray-900 "
            type="text"
            required
            netlify="true"
            name="phone"
            id="phone"
            placeholder="What's your phone number?"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = "What's your phone number?")}
          />
          <TextareaAutosize
            className="w-full bg-transparent p-0 placeholder-gray-900"
            type="text"
            required
            netlify="true"
            autoFocus
            name="message"
            id="message"
            placeholder="How can I help?"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'How can I help')}
          />
          <button className="bg-light text-black px-8" type="submit">
            Send
          </button>
        </form>
        <form className="hidden" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="text" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;

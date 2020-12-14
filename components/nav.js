import Link from 'next/link';
import Links from './links';

const Nav = () => (
  <nav className="text-light">
    <div className="py-12 mx-auto block md:flex container px-8 justify-between items-end">
      <div name="Name Tag" className="flex-grow  mr-6 md:mr-0">
        <Links nextLink href="/">
          <span className="text-md font-bold tracking-tight">Christopher Capito</span>
        </Links>

        <hr />
      </div>
      <div name="Regular Menu">
        <div className="flex block md:items-center md:w-auto block">
          <div className="text-sm">
            <Links nextLink href="/" text="Home" additionalClasses="mt-4 inline-block lg:mt-0  font-medium mr-4" />
            <Links
              nextLink
              href="/portfolio"
              text="Portfolio"
              additionalClasses="mt-4 inline-block lg:mt-0  font-medium mr-4"
            />
            <Links
              nextLink
              href="/contact"
              text="Contact"
              additionalClasses="mt-4 inline-block lg:mt-0  font-medium mr-4"
            />
          </div>
        </div>
        <hr className="hidden md:block" />
      </div>
    </div>
  </nav>
);

export default Nav;

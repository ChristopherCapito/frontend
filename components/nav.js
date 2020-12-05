import Link from 'next/link';

const Nav = () => (
  <nav className="text-light">
    <div className="py-12 mx-auto block md:flex container px-8 justify-between items-end">
      <div name="Name Tag" className="flex-grow  mr-6 md:mr-0">
        <Link scroll={false} href="/">
          <a>
            <span className="text-md font-bold tracking-tight">Christopher Capito</span>
          </a>
        </Link>
        <hr />
      </div>
      <div name="Regular Menu">
        <div className="flex block md:items-center md:w-auto block">
          <div className="text-sm">
            <Link scroll={false} href="/">
              <a className="mt-4 inline-block lg:mt-0  font-medium mr-4">Home</a>
            </Link>
            <Link scroll={false} href="/portfolio">
              <a className="mt-4 inline-block lg:mt-0  font-medium mr-4">Portfolio</a>
            </Link>
            <Link scroll={false} href="/contact">
              <a className="mt-4 inline-block lg:mt-0   font-medium mr-4">Contact</a>
            </Link>
          </div>
        </div>
        <hr className="hidden md:block" />
      </div>
    </div>
  </nav>
);

export default Nav;

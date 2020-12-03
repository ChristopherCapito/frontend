import Link from 'next/link';

const Nav = () => (
  <nav className="">
    <div className="py-12 mx-auto flex container px-8 justify-between items-end">
      <div name="Name Tag" className="flex-grow text-light mr-6 lg:mr-0">
        <Link scroll={false} href="/">
          <span className="text-md font-bold tracking-tight">Christopher Capito</span>
        </Link>
        <hr />
      </div>
      <div name="Regular Menu">
        <div className="flex hidden lg:block lg:items-center lg:w-auto block">
          <div className="text-sm">
            <Link scroll={false} href="/">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">Home</a>
            </Link>
            <Link scroll={false} href="/portfolio">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">Portfolio</a>
            </Link>
            <Link scroll={false} href="/contact">
              <a className="mt-4 lg:inline-block lg:mt-0 text-light hover:text-light font-medium mr-4">Contact</a>
            </Link>
          </div>
        </div>
        <hr className="hidden lg:block" />
      </div>
    </div>
  </nav>
);

export default Nav;

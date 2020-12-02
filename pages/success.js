import Link from 'next/link';

const Success = () => (
  <div className="container mx-auto px-8 text-light">
    <h1 className="text-lg md:text-3xl font-bold">Submitted!</h1>
    <p className=" md:text-lg font-light mb-8">Thank you for your message! I'll be in touch as soon as possible!</p>
    <Link scroll={false} href="/">
      <a className="py-4 px-8 bg-light text-black font-bold md:text-lg">Home</a>
    </Link>
  </div>
);

export default Success;

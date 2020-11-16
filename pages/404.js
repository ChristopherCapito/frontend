// pages/404.js

export default function Custom404() {
  return (
    <div className="w-full container px-8 mx-auto">
      <div className="mb-32 w-7/12 ">
        <h1 className="text-light text-lg lg:text-xl">
          I could not find what you are looking for. <span className="text-base">(This is a 404 page)</span>
        </h1>
        <p className="text-light pb-6">Do you hate it when your customers see 404 pages? Me too.</p>
        <a className="bg-white  p-4 px-6 font-bold" href="/contact">
          Call me
        </a>
      </div>
    </div>
  );
}

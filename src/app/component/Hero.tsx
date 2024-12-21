const Hero = () => {
  return (
    <section className="bg-[#0A2540] text-white py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight">
            Get More Done with Whitepace
          </h1>
          <p className="mt-4 text-lg">
            Project management software that enables your teams to collaborate,
            plan, analyze, and manage everyday tasks.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            Try Whitepace free →
          </button>
        </div>

        {/* Right Section: Tailwind Blue Box */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div
            className="bg-blue-200"
            style={{
              width: "824px",
              height: "549px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

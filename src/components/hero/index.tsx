export default function Hero() {
  return (
    <section className="w-full max-w-[1512px] px-14 grid grid-cols-2 gap-6 mx-auto items-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-poppins font-bold text-[64px] text-black-100 uppercase leadind-[80px] tracking-[4%]">
            your <span className="text-gold-100">perfect home</span> is our goal
          </h1>
          <p className="font-montserrat font-medium text-black-100 text-xl">
            At 19Homes We Focus On Services Like House And Land Sales, Building
            And Architectural Designs. Work With Us To Bring Your Dream Home
            Into Reality.
          </p>
        </div>
        <button className="bg-gold-100 px-6 py-4 rounded-sm font-montserrat font-bold text-white text-sm w-fit cursor-pointer hover:bg-gold-75 hover:text-black-100 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="bg-gold-50 h-[620px]"></div>
    </section>
  );
}

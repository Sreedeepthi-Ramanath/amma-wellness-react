function BirthdayBanner() {
  return (
    <div className="bg-white/90 backdrop-blur rounded-[2rem] shadow-2xl border border-pink-100 p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-pink-100 rounded-3xl"></div>

          <img
            src="/src/assets/images/amma.jpg"
            alt="Amma"
            className="relative w-full h-[550px] object-contain rounded-3xl shadow-xl border-8 border-white bg-white"
          />
        </div>

        <div>
          <p className="text-5xl mb-3">🎂</p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-pink-600 leading-tight">
            Happy Birthday Amma!
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            You are our strength, our inspiration, and our world. Thank you for
            everything you do for our family every single day.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-8">
            May this year bring you good health, peace, happiness, and many
            beautiful moments.
          </p>

          <p className="mt-6 text-2xl font-bold text-rose-600">
            With love, your daughters ❤️
          </p>

          <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-lg">
            🎉 Begin Your Special Day
          </button>
        </div>
      </div>
    </div>
  );
}

export default BirthdayBanner;
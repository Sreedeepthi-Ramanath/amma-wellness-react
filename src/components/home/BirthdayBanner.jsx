import ammaPhoto from "../../assets/images/amma.jpg";

function BirthdayBanner() {
  return (
    <div className="bg-white/90 backdrop-blur rounded-[2rem] shadow-2xl border border-pink-100 p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-[2rem] shadow-2xl">
            <img
              src={ammaPhoto}
              alt="Amma"
              className="max-w-[380px] w-full h-auto rounded-3xl object-contain"
            />
            <p className="text-center mt-4 text-pink-600 font-bold">
              Our Beautiful Amma ❤️
            </p>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default BirthdayBanner;
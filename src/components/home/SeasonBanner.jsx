function SeasonBanner() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-pink-200 via-orange-100 to-green-100 shadow-xl p-8 mb-8">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_#fb7185,_transparent_30%),radial-gradient(circle_at_bottom_left,_#86efac,_transparent_35%)]"></div>

      <div className="relative z-10 text-center py-10">
        <p className="text-2xl font-bold text-rose-700">
          🌷 Beautiful Birthday Morning
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mt-4">
          Today is all about you, Amma ❤️
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Smile more, rest more, and feel loved more today.
        </p>
      </div>
    </div>
  );
}

export default SeasonBanner;
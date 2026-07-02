function Greeting() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-6">
      <p className="text-pink-600 font-semibold text-lg">
        🌸 Amma Wellness Companion
      </p>

      <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 mt-2">
        ಶುಭೋದಯ Amma 🌸
      </h1>

      <p className="text-orange-600 font-semibold mt-3">{today}</p>

      <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 max-w-2xl">
        You are our strength, our inspiration, and the heart of our family. ❤️
      </p>
    </div>
  );
}

export default Greeting;
import { weeklyMenu } from "../../data/dietPlan";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function MenuBlock({ title, menu, isTomorrow = false }) {
  return (
    <div className={isTomorrow ? "bg-orange-50 rounded-2xl p-4" : ""}>
      <h3 className="text-xl font-bold text-rose-600 mb-3">{title}</h3>

      <div className="space-y-3 text-gray-700">
        <p>
          <b>Breakfast:</b> {menu.breakfast}
        </p>
        <p>
          <b>Lunch:</b> {menu.lunch}
        </p>
        <p>
          <b>Dinner:</b> {menu.dinner}
        </p>
        <p className="bg-pink-50 rounded-2xl p-4">
          🌙 <b>Night prep:</b> {menu.prep}
        </p>
      </div>
    </div>
  );
}

function MenuCard() {
  const todayIndex = new Date().getDay();
  const today = days[todayIndex];
  const tomorrow = days[(todayIndex + 1) % 7];

  const todayMenu = weeklyMenu[today];
  const tomorrowMenu = weeklyMenu[tomorrow];

  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-6 border border-pink-100 md:col-span-2">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">
        🍽️ Meal Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <MenuBlock title={`Today - ${today}`} menu={todayMenu} />
        <MenuBlock
          title={`Tomorrow - ${tomorrow}`}
          menu={tomorrowMenu}
          isTomorrow
        />
      </div>
    </div>
  );
}

export default MenuCard;
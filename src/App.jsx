import {
  requestNotificationPermission,
  scheduleTodayNotifications,
  sendNotification,
} from "./utils/notifications";
import Hero from "./components/home/Hero";
import MenuCard from "./components/menu/MenuCard";
import ReminderCard from "./components/reminders/ReminderCard";
import { medicines, waterTimes, walks } from "./data/reminders";

function App() {
  async function enableNotifications() {
  const allowed = await requestNotificationPermission();

  if (allowed) {
    sendNotification(
      "🌸 Amma Wellness",
      "Notifications are enabled for today."
    );
    

    scheduleTodayNotifications();
  }
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-end">
  <button
    onClick={enableNotifications}
    className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-5 py-3 rounded-full shadow-lg"
  >
    🔔 Enable Today’s Notifications
  </button>
</div>
        <Hero />

        <div className="grid md:grid-cols-2 gap-6">
          <MenuCard />
          <ReminderCard title="💊 Medicines" items={medicines} />
          <ReminderCard title="💧 Water Tracker" items={waterTimes} />
          <ReminderCard title="🚶 Walk Reminders" items={walks} />
        </div>
      </div>
    </div>
  );
}

export default App;
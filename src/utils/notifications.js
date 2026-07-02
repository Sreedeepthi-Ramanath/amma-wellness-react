export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("This browser does not support notifications.");
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === "granted";
}

export function sendNotification(title, body) {
  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "/icon-192.png",
    });
  }
}

export function scheduleTodayNotifications() {
  const reminders = [
    ["07:00", "💊 Sugar tablet", "Take sugar tablet before breakfast."],
    ["08:00", "💊 BP tablet", "Take BP tablet after breakfast."],
    ["10:30", "🍎 Fruit time", "Please eat your fruit snack."],
    ["13:00", "🍽️ Lunch time", "Have your planned lunch slowly."],
    ["13:30", "🚶 Walk time", "Walk gently for 10 minutes after lunch."],
    ["16:30", "🌼 Evening snack", "Have your healthy evening snack."],
    ["20:00", "💊 BP tablet", "Take BP tablet after dinner."],
    ["20:30", "🚶 Walk time", "Walk gently for 10 minutes after dinner."],
    ["21:00", "🌙 Tomorrow prep", "Soak nuts and prepare tomorrow’s meal items."],
  ];

  const waterTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  waterTimes.forEach((time) => {
    reminders.push([time, "💧 Water time", "Please drink one glass of water."]);
  });

  const now = new Date();

  reminders.forEach(([time, title, body]) => {
    const [hour, minute] = time.split(":").map(Number);

    const reminderTime = new Date();
    reminderTime.setHours(hour, minute, 0, 0);

    if (reminderTime > now) {
      setTimeout(() => {
        sendNotification(title, body);
      }, reminderTime - now);
    }
  });
}
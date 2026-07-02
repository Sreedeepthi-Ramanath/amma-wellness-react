function ReminderCard({ title, items }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-6 border border-pink-100">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">{title}</h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-3 bg-pink-50 rounded-2xl p-3"
          >
            <input type="checkbox" className="w-5 h-5 accent-pink-500" />
            <span className="text-gray-700">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ReminderCard;
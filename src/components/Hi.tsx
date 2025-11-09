export default function Hi() {
  return (
    <section className="bg-[#F5F8FF] w-full py-16 flex flex-col items-center">
      <div className="text-center mb-10">
        <button className="bg-white py-2 px-4 rounded-full shadow text-sm flex items-center gap-2 mx-auto">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Market Data
        </button>
        <h2 className="text-3xl font-bold mt-4">How FX Master Works</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Get the best exchange rates with zero markup. Our rates are updated every minute and always show you the real mid-market rate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/hiii.png"
            alt="FX Master Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-md p-6 rounded-xl flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
            <div>
              <h4 className="font-semibold text-lg">Enter Transfer Details</h4>
              <p className="text-gray-600 text-sm">Choose amount, currency, and recipient country. See live exchange rates instantly with no hidden fees.</p>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl flex gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">2</div>
            <div>
              <h4 className="font-semibold text-lg">Add Recipient Information</h4>
              <p className="text-gray-600 text-sm">Securely save recipient details with bank-level 256-bit encryption for quick future transfers.</p>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl flex gap-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">3</div>
            <div>
              <h4 className="font-semibold text-lg">Confirm & Track</h4>
              <p className="text-gray-600 text-sm">Verify details and track your transfer in real-time with instant notifications until it reaches the recipient.</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition">Start Transfer</button>
            <button className="bg-white px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition">View Exchange Rates</button>
          </div>
        </div>
      </div>
    </section>
  );
}

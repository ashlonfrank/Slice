export default function ExpediaCheckout({ onPayAsGroupClick }: { onPayAsGroupClick: () => void }) {
  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      {/* Status Bar */}
      <div className="h-[59px] bg-[#0a1f44] flex items-center justify-between px-4">
        <span className="text-white text-[17px] font-semibold">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#0a1f44] text-white px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <button className="text-white text-[16px]">← Back</button>
          <h1 className="text-[18px] font-semibold">Review and book</h1>
          <div className="w-[50px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Trip Summary */}
        <div className="mb-6">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">Your trip</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex gap-3 mb-3">
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-[16px] text-[#1a1a1a]">Hilton Garden Inn</h3>
                <p className="text-[14px] text-gray-600">San Francisco Downtown</p>
                <div className="flex gap-1 mt-1">
                  <span className="text-yellow-500">★★★★</span>
                </div>
              </div>
            </div>
            <div className="text-[14px] text-gray-700 space-y-1">
              <p>Check-in: Feb 15, 2026</p>
              <p>Check-out: Feb 18, 2026</p>
              <p>2 guests · 1 room</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">Payment method</h2>
          
          {/* Debit/Credit Card */}
          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg mb-3 cursor-pointer hover:border-blue-500">
            <input type="radio" name="payment" className="mt-1" defaultChecked />
            <div className="flex-1">
              <div className="font-semibold text-[16px] text-[#1a1a1a]">Debit or Credit Card</div>
              <div className="text-[14px] text-gray-600 mt-1">Visa, Mastercard, Amex, and more</div>
            </div>
          </label>

          {/* Click-to-Pay */}
          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg mb-3 cursor-pointer hover:border-blue-500">
            <input type="radio" name="payment" className="mt-1" />
            <div className="flex-1">
              <div className="font-semibold text-[16px] text-[#1a1a1a]">Click-to-Pay</div>
              <div className="text-[14px] text-gray-600 mt-1">Faster checkout with saved cards</div>
            </div>
          </label>

          {/* Pay as a group - NEW OPTION */}
          <button 
            onClick={onPayAsGroupClick}
            className="w-full flex items-start gap-3 p-4 border-2 border-[#9fe870] bg-[#f8fef3] rounded-lg hover:bg-[#f0fde6] transition-colors"
          >
            <input type="radio" name="payment" className="mt-1" />
            <div className="flex-1 text-left">
              <div className="font-semibold text-[16px] text-[#1a1a1a] flex items-center gap-2">
                Pay as a group
                <span className="text-[12px] bg-[#9fe870] text-[#163300] px-2 py-0.5 rounded-full font-semibold">NEW</span>
              </div>
              <div className="text-[14px] text-gray-600 mt-1">Split the cost with your travel buddies</div>
            </div>
          </button>
        </div>

        {/* Price Summary */}
        <div className="mb-6">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">Price summary</h2>
          <div className="space-y-2 text-[15px]">
            <div className="flex justify-between">
              <span className="text-gray-700">3 nights</span>
              <span className="text-gray-900">$450.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Taxes and fees</span>
              <span className="text-gray-900">$67.50</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-semibold text-[18px]">
              <span>Total</span>
              <span>$517.50</span>
            </div>
          </div>
        </div>

        {/* Book Button */}
        <button className="w-full bg-[#0a1f44] text-white py-4 rounded-lg font-semibold text-[16px] mb-20">
          Complete booking
        </button>
      </div>
    </div>
  );
}

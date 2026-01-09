import { useState } from "react";
import Container from "./imports/Container";
import ExpediaCheckout from "./components/ExpediaCheckout";

export default function App() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] =
    useState(false);

  return (
    <div className="w-full h-screen bg-[#e5e5e5] flex items-center justify-center">
      <div className="w-[390px] h-[878px] relative">
        {/* Expedia Checkout Page */}
        <div className="absolute inset-0">
          <ExpediaCheckout
            onPayAsGroupClick={() => setIsBottomSheetOpen(true)}
          />
        </div>

        {/* Bottom Sheet with translucent overlay - only shown when open */}
        {isBottomSheetOpen && (
          <div className="absolute inset-0">
            <Container
              onClose={() => setIsBottomSheetOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
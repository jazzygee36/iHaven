"use client";

import HomeButton from "@/components/button";
import { useState } from "react";

const CourseEnrollmentModal = ({ isOpen, setIsOpen, handlePayment }: any) => {
  const [selectedMode, setSelectedMode] = useState<"online" | "hybrid" | null>(
    null
  );
  const [selectedHybridOption, setSelectedHybridOption] = useState<
    string | null
  >(null);

  const hybridOptions = [
    "Kano - Weekday",
    "Kaduna - Weekend",
    "Kastina - Bootcamp",
    // Add more hybrid options
  ];

  const canProceed =
    selectedMode === "online" ||
    (selectedMode === "hybrid" && selectedHybridOption);

  const onProceed = () => {
    if (!canProceed) return;

    // setIsOpen(false);

    handlePayment({
      mode: selectedMode,
      hybridDetail: selectedHybridOption,
    });
  };

  return (
    <div>
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Choose Learning Mode</h2>

        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="online"
              checked={selectedMode === "online"}
              onChange={() => {
                setSelectedMode("online");
                setSelectedHybridOption(null); // Reset hybrid selection
              }}
            />
            <span>Online</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="hybrid"
              checked={selectedMode === "hybrid"}
              onChange={() => setSelectedMode("hybrid")}
            />
            <span>Hybrid</span>
          </label>
        </div>

        {selectedMode === "hybrid" && (
          <div className="mt-4 space-y-2">
            <p className="text-md font-semibold">Select Hybrid Option:</p>
            {hybridOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hybridOption"
                  value={option}
                  checked={selectedHybridOption === option}
                  onChange={() => setSelectedHybridOption(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        )}

       
        <HomeButton
          title={"  Continue to Payment"}
          type={"submit"}
          bg={`${!canProceed ? "opacity-50 cursor-not-allowed" : "#FF6933"}`}
          width={""}
          height={"45px"}
          disabled={!canProceed}
          onClick={onProceed}
        />
      </div>
    </div>
  );
};

export default CourseEnrollmentModal;

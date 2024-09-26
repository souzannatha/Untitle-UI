"use client";
import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

interface QuestionProps {
  title: string;
  response: string;
}
export function Question({ title, response }: QuestionProps) {
  const [open, setOpen] = useState(false);

  function handleOpenQuestion() {
    setOpen(!open);
  }

  return (
    <div className="w-full first:pt-0 last:pb-0 pt-6 pb-8">
      <button
        className="w-full flex items-center justify-between"
        onClick={handleOpenQuestion}
      >
        <h3 className="text-gray-900 text-lg/normal font-semibold">{title}</h3>
        {open ? (
          <FiMinusCircle className="text-brand-600" size={24} />
        ) : (
          <FiPlusCircle className="text-brand-600" size={24} />
        )}
      </button>
      {open && (
        <p className="mt-2 text-gray-600 leading-6 pr-8 text-left">
          {response}
        </p>
      )}
    </div>
  );
}

import { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface ItemFeatureProps {
  icon: ReactNode;
  title: string;
  text: string;
  isBtn?: boolean;
}

export function ItemFeature({
  icon,
  title,
  text,
  isBtn = false,
}: ItemFeatureProps) {
  return (
    <div className="text-center w-full max-w-96">
      <div className="flex items center justify-center w-12 h-12 bg-brand-100 rounded-full mx-auto border-8 border-brand-50 mb-5">
        {icon}
      </div>
      <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 leading-6">{text}</p>

      {isBtn && (
        <a
          href="#"
          className="flex items-center justify-center mt-5 font-semibold text-brand-700 gap-2 hover:opacity-50 transition-opacity"
        >
          Learn more
          <FiArrowRight size={20} className="text-brand-700" />
        </a>
      )}
    </div>
  );
}

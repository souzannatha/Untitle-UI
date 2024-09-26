import { FiArrowRight } from "react-icons/fi";

export function TagFeature() {
  return (
    <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-2xl">
      <span className="inline-block bg-white  h-6 px-[10px] rounded-2xl text-xs/6 xl:text-sm/6 font-medium text-brand-700">
        New Feature
      </span>
      <a
        href="#"
        className="flex items-center gap-1 text-brand-700 text-xs/6 xl:text-sm/6 hover:opacity-50 transition-opacity"
      >
        Check out the team dashboard <FiArrowRight />
      </a>
    </div>
  );
}

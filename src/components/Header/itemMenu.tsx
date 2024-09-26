import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface ItemMenuProps {
  url: string;
  title: string;
  hasDropdown?: boolean;
}

export function ItemMenu({ url, title, hasDropdown }: ItemMenuProps) {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 font-semibold text-gray-600 hover:opacity-50 transition-opacity"
    >
      {title}{" "}
      {hasDropdown && <FiChevronDown size={10} className="text-gray-600" />}
    </Link>
  );
}

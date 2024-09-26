interface ItemNavProps {
  title: string;
  itemsMenu: ItemMenuProps[];
}

interface ItemMenuProps {
  url: string;
  name: string;
}

export function ItemNav({ title, itemsMenu }: ItemNavProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-500 mb-4">{title}</h4>
      <ul className="space-y-3">
        {itemsMenu.map(({ url, name }, index) => (
          <li key={index}>
            <a
              className="text-gray-600 font-semibold hover:opacity-50 transition-opacity"
              href={url}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

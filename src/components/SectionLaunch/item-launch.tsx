interface ItemLaunchProps {
  number: string;
  title: string;
  text: string;
}

export function ItemLaunch({ number, title, text }: ItemLaunchProps) {
  return (
    <div className="w-full text-center">
      <h3 className="text-5xl xl:text-6xl font-semibold text-brand-600">
        {number}
      </h3>
      <h4 className="text-lg font-medium text-gray-900 mt-3 mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

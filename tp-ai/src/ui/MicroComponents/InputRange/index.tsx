type InputRangeProps = {
  onClick: (value: number) => void;
  value: number;
  title: string;
  sb1?: string;
  sb2?: string;
  type?: number;
};

export default function InputRange({
  onClick,
  value,
  title,
  sb1,
  sb2,
  type = 0,
}: InputRangeProps) {
  const captionType = ["percent", "number", "point", "none"];
  const caption = captionType[type];

  function getLabel(type: string) {
    switch (type) {
      case "percent":
        return (
          <>
            {title} - {value}%
            <label className="w-full flex justify-between text-gray-400 text-xs mt-2">
              <span>0%</span>I<span>50%</span>I<span>100%</span>
            </label>
          </>
        );
      case "number":
        return (
          <>
            {title} - {Math.ceil(value / 20) || 1}
            <label className="w-full flex justify-between text-gray-400 text-xs mt-2">
              <span>1</span>2<span>3</span>4<span>5</span>
            </label>
          </>
        );
      case "point":
        return (
          <>
            {title}
            <label className="w-full flex justify-between text-gray-400 text-xs mt-2">
              <span>.</span>.<span>.</span>.<span>.</span>
            </label>
          </>
        );
      case "none":
        return title;
      default:
        return "";
    }
  }

  return (
    <li className="w-full flex flex-col">
      {getLabel(caption)}
      <input
        type="range"
        min="0"
        max="100"
        className="my-2"
        step={25}
        value={value}
        onChange={(e) => onClick(Number(e.target.value))}
      />
      <label className="w-full flex justify-between text-gray-400 text-xs">
        <span>({sb1})</span>
        <span>({sb2})</span>
      </label>
    </li>
  );
}

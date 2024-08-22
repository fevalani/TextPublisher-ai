type SelectitemsProps = {
  title?: string;
  listOptions: string[];
  value: string;
  setValue: (value: string) => void;
};

export default function SelectItems({
  listOptions,
  setValue,
}: SelectitemsProps) {
  return (
    <div className="flex flex-col gap-2">
      <select className="text-black" onChange={(e) => setValue(e.target.value)}>
        {listOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

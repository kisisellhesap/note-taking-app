import HorizontalLine from "../../line/horizontal-line";

const Item = () => {
  return (
    <div className="flex flex-col gap-3 p-2 cursor-pointer">
      <h3 className="text-preset-3 text-Neutral-950 dark:text-white">React Performance Optimization</h3>
      <div className="flex gap-1">
        <span className="text-preset-6 text-Neutral-950 dark:text-white radius-4 px-1.5 py-0.5 bg-Neutral-200 dark:bg-Neutral-600">
          Dev
        </span>
        <span className="text-preset-6 text-Neutral-950 dark:text-white radius-4 px-1.5 py-0.5 bg-Neutral-200 dark:bg-Neutral-600">
          React
        </span>
      </div>
      <span className="text-Neutral-700 dark:text-Neutral-300 text-preset-6 mb-1">29 Oct 2024</span>

      <HorizontalLine />
    </div>
  );
};

export default Item;

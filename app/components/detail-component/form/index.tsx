import Button from "../../button";
import { ClockIcon, TagIcon } from "../../icons/icons";
import HorizontalLine from "../../line/horizontal-line";
import DetailHeader from "../detail-header";

const FormDetail = () => {
  return (
    <form>
      <div className=" flex flex-col gap-4 h-full">
        <DetailHeader />
        <h2 className="text-preset-1 text-Neutral-950 dark:text-white">React Performance Optimization</h2>
        <div className="flex flex-col gap-4 text-preset-5 text-Neutral-700 dark:text-Neutral-300">
          <div className="flex">
            <div className="flex items-center gap-1 w-28.5">
              <TagIcon className="w-4 h-4" />
              <span>Tags</span>
            </div>
            <input
              type="text"
              disabled={true}
              value={"Dev, React"}
              className="outline-none placeholder:text-preset-5"
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
            />
          </div>
          <div className="flex">
            <div className="flex items-center gap-1 w-28.5">
              <ClockIcon className="w-4 h-4" />
              <span>Last edited</span>
            </div>
            <input
              type="text"
              value={"24 Oct 2024"}
              className="outline-none placeholder:text-preset-5"
              placeholder="Not yet saved"
              disabled={true}
            />
          </div>
        </div>
        <HorizontalLine />
        <textarea
          disabled={true}
          className="resize-none h-90 outline-none text-Neutral-800 dark:text-Neutral-100 scrollbar-hide text-preset-5"
          value={`Key performance optimization techniques:

1. Code Splitting
- Use React.lazy() for route-based splitting
- Implement dynamic imports for heavy components

2.	Memoization
- useMemo for expensive calculations
- useCallback for function props
- React.memo for component optimization

3. Virtual List Implementation
- Use react-window for long lists
- Implement infinite scrolling

TODO: Benchmark current application and identify bottlenecks`}
        />
        <HorizontalLine />
        <div className=" gap-4 hidden lg:flex">
          <Button type="primary" text="Save Note" />
          <Button type="secondary" text="Cancel" />
        </div>
      </div>
    </form>
  );
};

export default FormDetail;

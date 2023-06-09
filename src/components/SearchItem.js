import { forwardRef } from "react";
import { Input, Spacer } from "@nextui-org/react";
import FilterItem from "./FilterItem";

const SearchItem = forwardRef((props, ref) => {
  const handleChange = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold italic uppercase text-gray-800 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={ref}
            >
              Grown by us, for you
            </p>
            <Spacer y={2.5} />
            <Input
              clearable
              underlined
              labelPlaceholder="Search"
              onChange={handleChange}
            />
            <FilterItem />
          </div>
        </div>
      </div>
    </>
  );
});

export default SearchItem;

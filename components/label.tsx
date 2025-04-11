import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx("relative bottom-0 left-0 flex w-full h-18 md:h-15 lg:h-15 @container/label", {
        "lg:px-20 lg:pb-[35%]": position === "center",
      })}
    >
      <div className="items-center w-full bg-white/70 p-1 text-lg text-black backdrop-blur-md dark:bg-black/70">
        <h3 className="mr-4 grow pl-2 leading-none tracking-tight">{title}</h3>
        <div className="flex items-center">
          <Price
            className="pl-2 text-sm text-[#ef233c]"
            amount={amount}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
          <Price
            className="pl-2 text-sm text-[#8d99ae]"
            amount={amount}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
            isOriginal
          />
        </div>
      </div>
    </div>
  );
};

export default Label;

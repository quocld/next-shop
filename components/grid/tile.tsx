import clsx from "clsx";
import Image from "next/image";
import Label from "../label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="relative w-full h-full">
      <div
        className={clsx(
          "group flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black",
          {
            relative: label,
            "border-2 border-blue-600": active,
            "border-neutral-200 dark:border-neutral-800": !active,
          }
        )}
      >
        {props.src ? (
          <Image
            className={clsx("relative h-full w-full object-cover", {
              "transition duration-200 ease-in-out group-hover:scale-105":
                isInteractive,
            })}
            {...props}
          />
        ) : null}
        <div className="absolute bottom-0 left-0 w-full bg-white/90 text-center p-2 opacity-0 translate-y-4 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="bg-rose-pink w-full text-white px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}

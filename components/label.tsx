import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('relative w-full @container/label')}
    >
      <div className="flex flex-col w-full bg-white/70 p-1 text-lg text-black dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="w-full mr-4 font-assistant font-semibold line-clamp-2 grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none text-sm p-2"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;

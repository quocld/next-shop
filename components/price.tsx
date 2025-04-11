import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName,
  isOriginal = false,
  ...props
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  isOriginal?: boolean;
} & React.ComponentProps<'p'>) => (
  <p
    suppressHydrationWarning={true}
    className={clsx(
      className,
      isOriginal && 'line-through text-gray-400'
    )}
    {...props}
  >
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
    }).format(parseFloat(amount))}`}
    <span className={clsx('ml-1 inline', currencyCodeClassName)}>
      {`${currencyCode}`}
    </span>
  </p>
);

export default Price;
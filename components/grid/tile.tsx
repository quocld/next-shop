"use client"
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  images = [],
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
  images?: Array<{
    url: string;
    altText: string;
    width: number;
    height: number;
  }>;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (images.length === 0) return null;

  const currentImage = isHovered && images[1] ? images[1] : images[0];
  if (!currentImage) return null;

  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full">
        {images.length > 1 ? (
          images.map((image, index) => (
            <Image
              key={image.url}
              className={clsx('absolute h-full w-full object-cover transition-all duration-500', {
                'opacity-100': (index === 0 && !isHovered) || (index === 1 && isHovered),
                'opacity-0': (index === 0 && isHovered) || (index === 1 && !isHovered),
                'group-hover:scale-105': isInteractive
              })}
              src={image.url}
              alt={image.altText}
              width={image.width}
              height={image.height}
            />
          ))
        ) : (
          <Image
            className={clsx('relative h-full w-full object-cover transition-all duration-300')}
            src={currentImage.url}
            alt={currentImage.altText}
            width={currentImage.width}
            height={currentImage.height}
          />
        )}
      </div>
    </div>
  );
}

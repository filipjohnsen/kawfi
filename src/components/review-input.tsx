'use client';

import Image from 'next/image';
import { useState } from 'react';

export const ReviewInput = ({ image, label }: { image: string; label: string }) => {
  const [value, setValue] = useState(0);
  const images = new Array(5).fill(image);
  return (
    <div className="grid items-center">
      <div className="flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setValue(index)}
            className="place-item-center grid h-10 w-10"
          >
            <Image
              className={`transition-opacity ${value >= index ? 'opacity-100' : 'opacity-40'}`}
              src={image}
              width={38}
              height={38}
              alt=""
            />
          </button>
        ))}
      </div>
      <span className="mt-2 text-xs font-semibold">{label}</span>
    </div>
  );
};

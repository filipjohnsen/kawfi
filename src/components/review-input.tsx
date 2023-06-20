'use client';

import Image from 'next/image';
import { useState } from 'react';

export const ReviewInput = ({
  image,
  label,
  name,
  value,
}: {
  image: string;
  label: string;
  name: string;
  value: number;
}) => {
  const [score, setScore] = useState(value);
  const images = new Array(5).fill(image);
  return (
    <div className="grid items-center">
      <div className="flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setScore(index)}
            className="place-item-center grid h-10 w-10"
          >
            <Image
              className={`transition-opacity ${score >= index ? 'opacity-100' : 'opacity-40'}`}
              src={image}
              width={38}
              height={38}
              alt=""
            />
          </button>
        ))}
      </div>
      <input
        name={name}
        className="invisible h-0 w-0 appearance-none overflow-hidden opacity-0"
        type="number"
        value={score}
        onChange={(e) => setScore(parseInt(e.target.value))}
      />
      <span className="mt-2 text-xs font-semibold">{label}</span>
    </div>
  );
};

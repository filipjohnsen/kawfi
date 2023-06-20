import Image from 'next/image';
import { ReviewInput } from './review-input';

export const Review = () => {
  return (
    <div className="grid gap-8 text-white">
      <ReviewInput image="/coffee.png" label="Coffee" />
      <ReviewInput image="/location.png" label="Location" />
      <ReviewInput image="/atmosphere.png" label="Atmosphere" />
      <ReviewInput image="/service.png" label="Service" />
      <ReviewInput image="/value.png" label="Value" />
    </div>
  );
};

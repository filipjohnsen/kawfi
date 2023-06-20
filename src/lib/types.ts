export type Place = {
  _id: string;
  name: string;
  adress: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
};

export type Review = {
  _id: string;
  place: {
    _ref: string;
  }
  user: string;
  overallRating: number;
  serviceRating: number;
  coffeeRating: number;
  atmosphereRating: number;
  valueRating: number;
  locationRating: number;
}
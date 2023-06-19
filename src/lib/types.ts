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
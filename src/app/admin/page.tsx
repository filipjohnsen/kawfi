import { db } from '@/db';
import { place } from '@/db/schema/place';

const AdminPage = () => {
  const addPlace = async (data: FormData) => {
    'use server';

    const [, ...rest] = data.entries();

    const newPlace = Object.create({});
    for (const [key, value] of rest) {
      newPlace[key] = value;
    }

    await db.insert(place).values(newPlace).execute();
  };
  return (
    <div className="px-4">
      <div className="mx-auto max-w-[500px] pt-12">
        <h1 className="mb-2 text-center text-2xl font-semibold text-purple-800">Add a place</h1>
        <form action={addPlace} className="grid gap-2">
          <div>
            <label className="mb-1 text-xs font-medium text-purple-800" htmlFor="name">
              Place name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Type here..."
              className="w-full rounded-lg border border-purple-400 bg-purple-50 px-2 py-2 text-[14px] shadow-lg shadow-purple-50 outline-none autofill:bg-purple-50"
              type="text"
            />
          </div>
          <div>
            <label className="mb-1 text-xs font-medium text-purple-800" htmlFor="image">
              Image
            </label>
            <input
              id="image"
              name="image"
              required
              placeholder="Type here..."
              className="w-full rounded-lg border border-purple-400 bg-purple-50 px-2 py-2 text-[14px] shadow-lg shadow-purple-50 outline-none autofill:bg-purple-50"
              type="url"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 text-xs font-medium text-purple-800" htmlFor="lat">
                Lat
              </label>
              <input
                id="lat"
                name="lat"
                required
                placeholder="Type here..."
                className="w-full rounded-lg border border-purple-400 bg-purple-50 px-2 py-2 text-[14px] shadow-lg shadow-purple-50 outline-none autofill:bg-purple-50"
                type="text"
              />
            </div>
            <div>
              <label className="mb-1 text-xs font-medium text-purple-800" htmlFor="lng">
                Lng
              </label>
              <input
                id="lng"
                name="lng"
                required
                placeholder="Type here..."
                className="w-full rounded-lg border border-purple-400 bg-purple-50 px-2 py-2 text-[14px] shadow-lg shadow-purple-50 outline-none autofill:bg-purple-50"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 text-xs font-medium text-purple-800" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              name="address"
              required
              placeholder="Type here..."
              className="w-full rounded-lg border border-purple-400 bg-purple-50 px-2 py-2 text-[14px] shadow-lg shadow-purple-50 outline-none autofill:bg-purple-50"
              type="text"
            />
          </div>
          <button
            className="w-fit rounded-lg bg-purple-800 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-purple-50"
            type="submit"
          >
            Add place
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;

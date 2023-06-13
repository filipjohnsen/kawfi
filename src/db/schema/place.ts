import { InferModel } from "drizzle-orm";
import { int, mysqlTable, serial, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const place = mysqlTable("place", {
    id: serial("id").primaryKey().autoincrement(),
    name: varchar("name", {
        length: 255,
    }).notNull(),
    image: varchar("image", {
        length: 255,
    }).notNull(),
    lat: varchar("lat", {
        length: 255,
    }).notNull(),
    lng: varchar("lng", {
        length: 255,
    }).notNull(),
    address: varchar("address", {
        length: 255,
    }).notNull(),
}, (place) => ({
    "nameIndex": uniqueIndex("name_index").on(place.name),
}))

export type Place = InferModel<typeof place>;
export type NewPlace = InferModel<typeof place, "insert">;
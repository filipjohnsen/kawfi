import { int, mysqlTable, serial, timestamp, uniqueIndex, varchar } from 'drizzle-orm/mysql-core'
import { place } from './place'
import { InferModel } from 'drizzle-orm'

export const review = mysqlTable("review", {
    id: serial("id").primaryKey().autoincrement(),
    coffe: int("coffe").notNull(),
    service: int("service").notNull(),
    atmosphere: int("atmosphere").notNull(),
    location: int("location").notNull(),
    value: int("value").notNull(),
    overall: int("overall").notNull(),
    image: varchar("image", {
        length: 255,
    }),
    coffee_type: varchar("coffee_type", {
        length: 255,
    }).notNull(),
    user: varchar("user", {
        length: 255,
    }).notNull(),
    place: int("place").notNull().references(() => place.id),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
}, (review) => ({
    idIndex: uniqueIndex("id_index").on(review.id),
}))

export type Review = InferModel<typeof review>
export type NewReview = InferModel<typeof review, "insert">
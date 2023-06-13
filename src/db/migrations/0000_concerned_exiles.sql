CREATE TABLE `place` (
	`id` int PRIMARY KEY NOT NULL,
	`name` varchar(255) NOT NULL,
	`image` varchar(255) NOT NULL,
	`lat` int NOT NULL,
	`lng` int NOT NULL,
	`address` varchar(255) NOT NULL);

CREATE TABLE `review` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`coffe` int NOT NULL,
	`service` int NOT NULL,
	`atmosphere` int NOT NULL,
	`location` int NOT NULL,
	`value` int NOT NULL,
	`overall` int NOT NULL,
	`image` varchar(255),
	`coffee_type` varchar(255) NOT NULL,
	`user` varchar(255) NOT NULL,
	`place` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);

CREATE UNIQUE INDEX `name_index` ON `place` (`name`);
CREATE UNIQUE INDEX `id_index` ON `review` (`id`);
ALTER TABLE `review` ADD CONSTRAINT `review_place_place_id_fk` FOREIGN KEY (`place`) REFERENCES `place`(`id`) ON DELETE no action ON UPDATE no action;
CREATE TABLE `videos` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NOT NULL,
	`vignette` VARCHAR(100) NOT NULL,
	`url` VARCHAR(50) NOT NULL,
	`author` VARCHAR(50) NOT NULL,
	`views` INT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO videos (title, vignette, url, author, views) VALUES
("Tunic Soundtrack", "https://img.youtube.com/vi/nnvjKf_mRYM/mqdefault.jpg", "https://youtu.be/nnvjKf_mRYM", "Lifeformed", 58000),
("Proving Basic Math", "https://img.youtube.com/vi/Ma4hPxc107s/mqdefault.jpg", "https://youtu.be/Ma4hPxc107s", "Tsoding Daily", 7900),
("30 Weird Chess Algorithms", "https://img.youtube.com/vi/DpXy041BIlA/mqdefault.jpg", "https://youtu.be/DpXy041BIlA", "suckerpinch", 534000),
("Coding Adventure: Marching Cubes", "https://img.youtube.com/vi/M3iI2l0ltbE/mqdefault.jpg", "https://youtu.be/M3iI2l0ltbE", "Sebastian Lague", 830000);
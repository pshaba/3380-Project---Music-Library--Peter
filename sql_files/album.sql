-- -----------------------------------------------------
-- Table `Online_Music_Library`.`album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Online_Music_Library`.`album` (
  `album_id` 				INT NOT NULL AUTO_INCREMENT,
  `album_primary_artist_id` INT NOT NULL,
  `album_title` 			VARCHAR(80) NOT NULL,
  `album_creation_date` 	TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `album_release_date` 		DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `album_description` 		TEXT	 NULL,
  `album_cover_art` BLOB NULL,
  `album_genre` INT NOT NULL,
  PRIMARY KEY (`album_id`),
  INDEX `artist_listener_id_idx` (`album_primary_artist_id` ASC) VISIBLE,
  CONSTRAINT `album_artist_listener_id_constraint`
    FOREIGN KEY (`album_primary_artist_id`)
    REFERENCES `Online_Music_Library`.`artist` (`artist_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;
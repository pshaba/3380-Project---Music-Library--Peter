




-- -----------------------------------------------------
-- Table `Online_Music_Library`.`track`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Online_Music_Library.track (
  track_id 			INT 		NOT NULL 	AUTO_INCREMENT,
  track_primary_artist_id 	INT 		NOT NULL,
  track_name			VARCHAR(50) 	NOT NULL,
  track_release_date 		DATE	 	NOT NULL,
  track_file 			BLOB 		NOT NULL,
  track_genre 			SMALLINT 	NULL,
  
  PRIMARY KEY (track_id),

  CONSTRAINT track_primary_artist_id_constraint
    FOREIGN KEY (track_primary_artist_id)
    REFERENCES Online_Music_Library.artist (artist_id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,

  CONSTRAINT track_genre_constraint
    FOREIGN KEY (track_genre)
    REFERENCES Online_Music_Library.genre (genre_id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,

  )
ENGINE = InnoDB;











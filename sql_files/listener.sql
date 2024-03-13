



-- -----------------------------------------------------
-- Table `Online_Music_Library`.`listener`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Online_Music_Library.listener (
  listener_id 				INT 		NOT NULL,
  listener_username 		VARCHAR(45) NOT NULL,
  listener_is_artist 		TINYINT(1) 	NOT NULL,
  listener_online_status	TINYINT(1) 	NOT NULL,
  listener_pfp				BLOB		NULL,
  
  PRIMARY KEY (listener_id),
  
  CONSTRAINT listener_id_constraint
    FOREIGN KEY (listener_id)
    REFERENCES Online_Music_Library.person (id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;

-- Constraints in other tables --

-- Artist: inherits artist_id from listener_id, 1:1 relationship


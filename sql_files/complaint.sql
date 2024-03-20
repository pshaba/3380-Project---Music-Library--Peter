-- -----------------------------------------------------
-- Table `Online_Music_Library`.`complaint`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Online_Music_Library.complaint (
 complaint_id INT NOT NULL AUTO_INCREMENT,
 complaint_person_id INT NOT NULL,
 addressed BOOLEAN NOT NULL,
 complaint_employee_id INT NULL,
 complaint_created DATE NOT NULL,
 complaint_summary TEXT NULL,
 complaint_documentation BLOB NULL,
 complaint_addressed TINYINT NOT NULL,
 complaint_when_resolved DATE NULL,

 PRIMARY KEY (complaint_id, complaint_person_id, complaint_employee_id),

 CONSTRAINT complaint_person_id_constraint
   FOREIGN KEY (complaint_person_id)
   REFERENCES Online_Music_Library.person (person_id)
   ON DELETE CASCADE
  ON UPDATE CASCADE,
  
 CONSTRAINT complaint_employee_id_constraint
   FOREIGN KEY (complaint_employee_id)
   REFERENCES Online_Music_Library.employee (employee_id)
   ON DELETE CASCADE
   ON UPDATE CASCADE)
ENGINE = InnoDB;

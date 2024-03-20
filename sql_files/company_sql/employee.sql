-- -----------------------------------------------------
-- Table Online_Music_Library.employee
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Online_Music_Library.employee (
  employee_id INT NOT NULL AUTO_INCREMENT,
  employee_firstname VARCHAR(45) NOT NULL,
  employee_lastname VARCHAR(45) NOT NULL,
  employee_department INT NOT NULL,

  PRIMARY KEY (employee_id),

  CONSTRAINT employee_department_id_constraint
    FOREIGN KEY (employee_department)
    REFERENCES Online_Music_Library.department (department_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
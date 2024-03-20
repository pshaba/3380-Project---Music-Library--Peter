-- -----------------------------------------------------
-- Table Online_Music_Library.department
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Online_Music_Library.department (
  department_name VARCHAR(45) NOT NULL,
  department_id INT NOT NULL AUTO_INCREMENT,
  department_employee_manager_id INT NOT NULL,
  PRIMARY KEY (department_id, department_employee_manager_id))
ENGINE = InnoDB;
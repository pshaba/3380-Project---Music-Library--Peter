-- -----------------------------------------------------
-- Table `Online_Music_Library`.`record_company_employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Online_Music_Library`.`record_company_employee` (
  `record_company_employee_id` INT NOT NULL AUTO_INCREMENT,
  `record_company_employee_record_company_id` INT NOT NULL,
  `role` INT NOT NULL,
  PRIMARY KEY (`record_company_employee_id`),
  INDEX `record_company_id_idx` (`record_company_employee_record_company_id` ASC) VISIBLE,
  CONSTRAINT `recored_company_employee_record_company_id_constraint`
    FOREIGN KEY (`record_company_employee_record_company_id`)
    REFERENCES `Online_Music_Library`.`record_company` (`record_company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
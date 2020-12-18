package com.xworkz.pages;

import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.xworkz.base.TestBase;

public class LoginPage extends TestBase {

	// Object repo of login page ############################
	@FindBy(xpath = "//input[@id='emailId']")
	WebElement uid;

	@FindBy(xpath = "//input[@id='password']")
	WebElement pwd;

	@FindBy(xpath = "//div[@class='form-group']//div[@class='alert alert-danger']//span")
	WebElement emptyEmailFieldAlert;

	@FindBy(xpath = "//div[@class='form-group mb-4']//div[@class='alert alert-danger']//span")
	WebElement emptyPasswordFieldAlert;

	@FindBy(xpath = "//input[@id='login']")
	WebElement loginButton;

	// Initiate the pagefactory using the constructor

	public LoginPage() {
		PageFactory.initElements(driver, this);
	}

	// Page actions ###########################

	// enter login credentials
	public void EnterDetails(String un, String pas) {

		uid.sendKeys(un);
		pwd.sendKeys(pas);

	}

	// Login
	public HomePage Login() {
		loginButton.click();
		try {
			wait.until(ExpectedConditions.alertIsPresent());
			driver.switchTo().alert().accept();
		} catch (TimeoutException e) {
			System.out.println("Alert not found");
		}
		return new HomePage();
	}

	public String LoginPageTitle() {
		return driver.getTitle();
	}

	public String validateEmail() {
		if (emptyEmailFieldAlert.isDisplayed())
			return emptyEmailFieldAlert.getText();
		else
			return null;
	}

	public String validatePassword() {
		a.moveToElement(uid).click().build().perform();
		if (emptyPasswordFieldAlert.isDisplayed())
			return emptyPasswordFieldAlert.getText();
		else
			return null;
	}

}

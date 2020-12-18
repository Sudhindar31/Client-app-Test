package com.xworkz.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.xworkz.constants.FrameworkConstants;
import com.xworkz.utils.TestUtil;

public class TestBase {

	public static WebDriver driver;
	public static WebDriverWait wait;
	public static Actions a;
	public static JavascriptExecutor js;

	protected TestBase() {

	}

	public static void initialization() throws IOException {
		String browserName = TestUtil.readProperty("browser");
		if(browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", FrameworkConstants.getChromedriverpath());
			driver = new ChromeDriver();
		}
		else if(browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.gecko.driver", FrameworkConstants.getFirefoxdriver());
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(FrameworkConstants.getPageLoadTimeOut(), TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(FrameworkConstants.getImplicitlyWaitTimeOut(), TimeUnit.SECONDS);
		wait = new WebDriverWait(driver, FrameworkConstants.getWebdriverWaitTimeOut());
		driver.get(TestUtil.readProperty("url"));
		a = new Actions(driver);
		js = (JavascriptExecutor) driver;

	}

}

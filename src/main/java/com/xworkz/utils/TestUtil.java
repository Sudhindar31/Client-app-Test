package com.xworkz.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.xworkz.base.TestBase;

public  final class TestUtil extends TestBase {
	private static Properties prop;
	private static FileInputStream fis;

	private TestUtil() {

	}
	public static void screenShot(String folderName, String testName) throws IOException {
		String folderName_local = folderName;
		String testName_local = testName;
		Date currentDate = new Date();
		String fileName = currentDate.toString().replace(" ", "-").replace(":", "-");
		File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(screenshot, new File(
				System.getProperty("user.dir") + "//" + folderName_local + "//" + testName_local + fileName + ".png"));
	}
	public static String readProperty(String key) throws IOException {
		prop=new Properties();
		fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\config\\config.properties");
		prop.load(fis);
		return prop.getProperty(key);
	}


}

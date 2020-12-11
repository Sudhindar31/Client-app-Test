package com.xworkz.utils;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.xworkz.base.TestBase;

public class TestUtil extends TestBase {

	public void screenShot(String folderName, String testName) throws IOException {
		String folderName_local = folderName;
		String testName_local = testName;
		Date currentDate = new Date();
		String fileName = currentDate.toString().replace(" ", "-").replace(":", "-");
		File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(screenshot, new File(
				System.getProperty("user.dir") + "//" + folderName_local + "//" + testName_local + fileName + ".png"));
	}

}

package org.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.reuse.BaseClass;

import com.google.common.primitives.Bytes;

import cucumber.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {

	@Before

	public void test1() {

		launch();
		maxWindow();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@After
	public void test3(Scenario s) {

		if (s.isFailed()) {

			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] d = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(d, "image/png");

		}
		driver.quit();
		

	}

}

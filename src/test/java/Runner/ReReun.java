package Runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@Rerun\\run.txt",glue = "org.stepdefinition",  
plugin = { "rerun:C:\\Users\\Abdul\\eclipse-workspace\\Cucumber\\Rerun\\run.txt" })

public class ReReun {

	@AfterClass
	public static void report() {

		JVMReport.generateJvmReport(System.getProperty("user.dir") + "\\Report\\Jason Report\\FB.jason");

	}

}

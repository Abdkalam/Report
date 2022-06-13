package Runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",dryRun=false ,
glue="org.stepdefinition" ,tags= {"@smoke,@sanity"},
plugin= {"html:C:\\Users\\Abdul\\eclipse-workspace\\Cucumber\\Report\\Html Report",
"json:C:\\Users\\Abdul\\eclipse-workspace\\Cucumber\\Report\\Jason Report\\FB.jason",
"junit:C:\\Users\\Abdul\\eclipse-workspace\\Cucumber\\Report\\Junit Report\\FB.xml",
"rerun:C:\\Users\\Abdul\\eclipse-workspace\\Cucumber\\Rerun\\run.txt"})

public class TestRunner {
	
	@AfterClass
	public static void report() {
		
		JVMReport.generateJvmReport(System.getProperty("user.dir")+"\\Report\\Jason Report\\FB.jason");

	}
	

	
}

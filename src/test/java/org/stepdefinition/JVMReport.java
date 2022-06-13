package org.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {

	public static void generateJvmReport(String jasonpath) {

		File f = new File(System.getProperty("user.dir") + "\\Report\\JVM Report");

		Configuration c = new Configuration(f, "Facebook Application");
		c.addClassifications("Platform", "Windows");
		c.addClassifications("JDK Version", "1.8");
		c.addClassifications("Tester", "Abdul");

		List<String> l = new ArrayList<String>();
		l.add(jasonpath);
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();

	}

}

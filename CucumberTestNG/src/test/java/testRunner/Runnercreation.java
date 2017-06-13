package testRunner;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;




		
@CucumberOptions (
		
		features = "Configuration",
		glue = "stepDef",
		plugin = {"pretty", "html:target/cucumber-html-report"},
		monochrome = true)
			

public class Runnercreation extends AbstractTestNGCucumberTests // This is the API from testng have to extends it //
{

	
}

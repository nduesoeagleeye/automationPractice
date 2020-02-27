package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.testng.AbstractTestNGCucumberTests;


//@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/Features"},
        plugin = {"html:target/site/cucumber-pretty", "json:target/cucumber.json" },
        glue = {"Steps"}
)


public class TestRunner  extends AbstractTestNGCucumberTests{


}

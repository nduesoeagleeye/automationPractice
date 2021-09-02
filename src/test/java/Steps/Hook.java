package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;


public class Hook extends BaseUtil {

    // dependency injection
    private BaseUtil base ;

    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public void openBrowser()
    {
        System.out.println("Opening the browser : Chrome");
        // passing the WebDriver instance

        System.setProperty("webdriver.chrome.driver", "C/chromedriver");
        base.Driver = new ChromeDriver();
        base.Driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        base.Driver.manage().window().maximize();


//        System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"/C/geckodriver");
//        base.Driver = new FirefoxDriver();
//        base.Driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
//        base.Driver.manage().window().maximize();

    }


        @After
    public void embedScreenshot(Scenario scenario) {
            System.out.println("Closing the browser : Chrome");
        if(scenario.isFailed()) {
            try {
                scenario.write("Current Page URL is " +  base.Driver.getCurrentUrl());
//            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
                byte[] screenshot = ((TakesScreenshot) base.Driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }
        }
            base.Driver.quit();
    }








}

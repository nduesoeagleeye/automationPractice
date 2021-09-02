package Base;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ExtentReportUtil extends BaseUtil {
    String fileName = reportLocation + "extentReport.html";

    public void ExtentReport(){
        extent = new ExtentReports();

        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
        htmlReporter.config().setTheme(Theme.DARK);
        htmlReporter.config().setDocumentTitle("Test Report for automationPractice Test");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setReportName("Test Report");

        extent.attachReporter((htmlReporter));

    }

    public void ExtentReportScreenShort() throws IOException {
        File scr = ((TakesScreenshot)Driver).getScreenshotAs(OutputType.FILE);
        Files.copy(scr.toPath(), new File(reportLocation + "Screenshot.png").toPath());


    }

    public void FlushReport(){

        extent.flush();
    }

}

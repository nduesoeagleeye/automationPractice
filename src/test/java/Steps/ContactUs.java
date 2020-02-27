package Steps;

import Base.BaseUtil;
import Transformation.EmailTransform;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.fluttercode.datafactory.impl.DataFactory;
import pages.ContactUsPage;


public class ContactUs extends BaseUtil {

    private BaseUtil base;

    public ContactUs(BaseUtil base) {
        this.base = base;
    }

    @And("^User click on the contact us button on the automation practice landing page$")
    public void userClickOnTheContactUsButtonOnTheAutomationPracticeLandingPage() {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.click(page.btnContactUs);
    }

    @Then("^\"([^\"]*)\" should be displayed on the auto Customer service - Contact us page$")
    public void shouldBeDisplayedOnTheAutoCustomerServiceContactUsPage(String expectedValue) {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.verifyPageMessage(expectedValue.toUpperCase(),page.txtCustomerService);
    }


    @And("^user click on send button on the Customer service - Contact us page$")
    public void userClickOnSendButtonOnTheCustomerServiceContactUsPage() {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.click(page.btnClickContactUsSummit);
    }

    @And("^User enter the user email address on as Email:\"([^\"]*)\" on the Customer service - Contact us page$")
    public void userEnterTheUserEmailAddressOnAsEmail(@Transform(EmailTransform.class) String email) {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.sendKeys(page.txtContactUsEmailAddress, email);
    }

    @Then("^Message validation error should display \"([^\"]*)\" on the Customer service - Contact us page$")
    public void messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String expectedValue) {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.verifyPageMessage(expectedValue,page.txtValidateErrorMessage);
    }

    @And("^user enter Message on message field on Customer service - Contact us page$")
    public void userEnterMessageOnMessageFieldOnCustomerServiceContactUsPage() {
        ContactUsPage page = new ContactUsPage(base.Driver);
        DataFactory df = new DataFactory();
        String value = df.getRandomText(5, 50);
        page.sendKeys(page.txtContactUsMessage,value);
    }

    @And("^User select subject \"([^\"]*)\" from the subject drop down on Customer service - Contact us page$")
    public void userSelectSubjectCustomerServiceFromTheSubjectDropDownOnCustomerServiceContactUsPage(String expectedValue) {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.selectByVisibleText(page.selSelectSubject,expectedValue);
    }

    @Then("^form should be sent successfully with success message \"([^\"]*)\"$")
    public void formShouldBeSentSuccessfullyWithSuccessMessage(String expectedValue) {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.verifyPageMessage(expectedValue,page.txtContactUsSuccessMessage);
    }

    @And("^user click on the Home buttom on Customer service - Contact us page$")
    public void userClickOnTheHomeButtomOnCustomerServiceContactUsPage() {
        ContactUsPage page = new ContactUsPage(base.Driver);
        page.click(page.btnContactUsHome);
    }


    @Given("^user navigates to the landing page on the automation practice page$")
    public void userNavigatesToTheLandingPageOnTheAutomationPracticePage() {
        base.Driver.navigate().to("http://automationpractice.com/index.php");
    }
}

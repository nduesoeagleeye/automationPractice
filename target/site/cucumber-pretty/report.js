$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Us Feature",
  "description": "",
  "id": "contact-us-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1292025882,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the landing page on the automation practice page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactUs.userNavigatesToTheLandingPageOnTheAutomationPracticePage()"
});
formatter.result({
  "duration": 5163806297,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Test the contact us page on the automation practice web application",
  "description": "",
  "id": "contact-us-feature;test-the-contact-us-page-on-the-automation-practice-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on the contact us button on the automation practice landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Customer service - Contact us\" should be displayed on the auto Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message validation error should display \"Invalid email address.\" on the Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter the user email address on as Email:\"ndueso.utukTest\" on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message validation error should display \"The message cannot be blank.\" on the Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter Message on message field on Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Message validation error should display \"Please select a subject from the list provided.\" on the Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User select subject \"Customer service\" from the subject drop down on Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "form should be sent successfully with success message \"Your message has been successfully sent to our team.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on the Home buttom on Customer service - Contact us page",
  "keyword": "And "
});
formatter.match({
  "location": "ContactUs.userClickOnTheContactUsButtonOnTheAutomationPracticeLandingPage()"
});
formatter.result({
  "duration": 1180293008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer service - Contact us",
      "offset": 1
    }
  ],
  "location": "ContactUs.shouldBeDisplayedOnTheAutoCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 37489396,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 1097587894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 41
    }
  ],
  "location": "ContactUs.messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 33947526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ndueso.utukTest",
      "offset": 47
    }
  ],
  "location": "ContactUs.userEnterTheUserEmailAddressOnAsEmail(String)"
});
formatter.result({
  "duration": 137807510,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 796763926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The message cannot be blank.",
      "offset": 41
    }
  ],
  "location": "ContactUs.messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 32138357,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userEnterMessageOnMessageFieldOnCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 83542129,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 829210414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a subject from the list provided.",
      "offset": 41
    }
  ],
  "location": "ContactUs.messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 34754422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer service",
      "offset": 21
    }
  ],
  "location": "ContactUs.userSelectSubjectCustomerServiceFromTheSubjectDropDownOnCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 133190871,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 1183660817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your message has been successfully sent to our team.",
      "offset": 55
    }
  ],
  "location": "ContactUs.formShouldBeSentSuccessfullyWithSuccessMessage(String)"
});
formatter.result({
  "duration": 29665324,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnTheHomeButtomOnCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 1865005063,
  "status": "passed"
});
formatter.after({
  "duration": 76756571,
  "status": "passed"
});
formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In feature",
  "description": "",
  "id": "sign-in-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 549045791,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the landing page on the automation practice page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactUs.userNavigatesToTheLandingPageOnTheAutomationPracticePage()"
});
formatter.result({
  "duration": 6305162688,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Registration with existing email should throw an error on Registration",
  "description": "",
  "id": "sign-in-feature;registration-with-existing-email-should-throw-an-error-on-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on sign in button on the landing page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Authentication page"
    }
  ],
  "line": 10,
  "name": "User click on sign in button on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be able to see \"Authentication\" on the authentication page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enter \"ndueso.utuk\" on the crete an account filed on the authentication page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Create an account button on the authentication page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "# Create an Account"
    }
  ],
  "line": 15,
  "name": "user select Mr for Title on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter First Name \"First Name\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enter Last Name \"Last Name\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enter Email \"Email\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enter Password \"Password\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to see page heading \"create an account\" on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should be ale to see sub Heading \"your personal information\" on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user select DOB day \"1\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user select DOB Month \"1\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user select DOB Year \"2020\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Your Address"
    }
  ],
  "line": 26,
  "name": "user enter First Name \"First Name\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enter Last Name \"Last Name\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter Company \"Company\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enter Address \"Address\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user enter Address (Line 2) \"Address (Line 2)\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enter City \"City\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user select State \"1\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter Zip/Postal Code \"00000\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user select Country \"21\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter Additional information \"Additional information\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter Home phone \"Home phone\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enter Mobile phone \"Mobile phone\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter Assign an address \"Assign an address alias for future reference\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on the Register Button on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should be able to see alias error \"alias is too long. Maximum length: 32\" message displayed on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User should be able to see phone error \"phone is invalid.\"message displayed on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User should be able to see phone mobile error \"phone_mobile is invalid.\" message displayed on the create an account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Singin.userHoverOnTheFirstImageOnTheLandingPage()"
});
formatter.result({
  "duration": 1360104607,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userHoverOnTheFirstImageOnTheLandingPage()"
});
formatter.result({
  "duration": 1072020122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 28
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 31597398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ndueso.utuk",
      "offset": 12
    }
  ],
  "location": "Singin.userEnterOnTheCreteAnAccountFiledOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 132829015,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnCreateAnAccountButtonOnTheAuthenticationPage()"
});
formatter.result({
  "duration": 79038723,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userSelectMrForTitleOnThePersonalInformationPage()"
});
formatter.result({
  "duration": 1362164691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 212231413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 22
    }
  ],
  "location": "Singin.userEnterLastNameOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 139787793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 18
    }
  ],
  "location": "Singin.userEnterEmailOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 88539831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 21
    }
  ],
  "location": "Singin.userEnterPasswordOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 170474225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create an account",
      "offset": 41
    }
  ],
  "location": "Singin.userShouldBeAleToSeeOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 36145907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "your personal information",
      "offset": 39
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 37010627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "Singin.userSelectDOBDayOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 114454102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "Singin.userSelectDOBMonthOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 115167608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 22
    }
  ],
  "location": "Singin.userSelectDOBYearOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 117217460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterFirstNameOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 94953597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 22
    }
  ],
  "location": "Singin.userEnterLastNameOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 86029878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 20
    }
  ],
  "location": "Singin.userEnterCompanyOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 71733541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 20
    }
  ],
  "location": "Singin.userEnterAddressOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 74011216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "Address (Line 2)",
      "offset": 29
    }
  ],
  "location": "Singin.userEnterAddressLineOnTheYourAddressFiled(String,String)"
});
formatter.result({
  "duration": 46649870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 17
    }
  ],
  "location": "Singin.userEnterCityOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 59461232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "Singin.userSelectStateOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 100106996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 28
    }
  ],
  "location": "Singin.userEnterZipPostalCodeOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 72390429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 21
    }
  ],
  "location": "Singin.userSelectCountryOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 74927831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional information",
      "offset": 35
    }
  ],
  "location": "Singin.userEnterAdditionalInformationOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 113369787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home phone",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterHomePhoneOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 100634532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile phone",
      "offset": 25
    }
  ],
  "location": "Singin.userEnterMobilePhoneOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 94931065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign an address alias for future reference",
      "offset": 30
    }
  ],
  "location": "Singin.userEnterAssignAnAddressOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 216951510,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnTheRegisterButtonOnTheYourAddressFiled()"
});
formatter.result({
  "duration": 1093949417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alias is too long. Maximum length: 32",
      "offset": 40
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeAliasErrorMessageDisplayedOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 28280332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone is invalid.",
      "offset": 40
    }
  ],
  "location": "Singin.userShouldNbeAbleToSeePhoneErrorMessageDisplayedOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 26816662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone_mobile is invalid.",
      "offset": 47
    }
  ],
  "location": "Singin.userShouldNbeAbleToSeePhoneMobileErrorMessageDisplayedOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 28149528,
  "status": "passed"
});
formatter.after({
  "duration": 72924156,
  "status": "passed"
});
});
Feature: Contact Us Feature

  Background:
    Given user navigates to the landing page on the automation practice page

    Scenario: Test the contact us page on the automation practice web application
      And User click on the contact us button on the automation practice landing page
      Then "Customer service - Contact us" should be displayed on the auto Customer service - Contact us page
      And user click on send button on the Customer service - Contact us page
      Then Message validation error should display "Invalid email address." on the Customer service - Contact us page
      And User enter the user email address on as Email:"ndueso.utukTest" on the Customer service - Contact us page
      And user click on send button on the Customer service - Contact us page
      Then Message validation error should display "The message cannot be blank." on the Customer service - Contact us page
      And user enter Message on message field on Customer service - Contact us page
      And user click on send button on the Customer service - Contact us page
      Then Message validation error should display "Please select a subject from the list provided." on the Customer service - Contact us page
      And User select subject "Customer service" from the subject drop down on Customer service - Contact us page
      And user click on send button on the Customer service - Contact us page
      Then form should be sent successfully with success message "Your message has been successfully sent to our team."
      And user click on the Home buttom on Customer service - Contact us page






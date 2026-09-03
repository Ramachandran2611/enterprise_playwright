Feature: Login
  As an OrangeHRM user
  I want to log in with valid credentials
  So that I can access the system

  Scenario: Successful login with valid credentials
    Given I am on the OrangeHRM login page
    When I log in with valid credentials
    Then I should be redirected to the Dashboard

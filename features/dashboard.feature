Feature: Dashboard
  As a logged-in OrangeHRM user
  I want to verify the Dashboard page and its main menu
  So that I know the core navigation is intact (BVT)

  Background:
    Given I am on the OrangeHRM login page
    And I log in with valid credentials

  Scenario: Dashboard page title is correct
    Then the browser tab title should be "OrangeHRM"
    And the Dashboard header should read "Dashboard"

  Scenario: All main menu items are visible on the Dashboard
    Then the main menu should contain the following items:
      | Admin         |
      | PIM           |
      | Leave         |
      | Time          |
      | Recruitment   |
      | My Info       |
      | Performance   |
      | Dashboard     |
      | Directory     |
      | Maintenance   |
      | Buzz          |

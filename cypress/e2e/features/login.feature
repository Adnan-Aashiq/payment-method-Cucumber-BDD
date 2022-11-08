Feature: Login
    Scenario: User should be able to login with correct email and password
        Given I navigate to website
        When I enter login credentials
        Then I should be logged in
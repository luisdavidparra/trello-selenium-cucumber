Feature: Organization
    User can manage organizations

    @03 @ui @openBrowser @closeBrowser @deleteOrganization
    Scenario: Verify that user can create a new organization
        Given I login into trello page with "admin" user credentials
        When I open the menu to create a new organization
        And I set the organization name "AT-Organization"
        And I select the default organization type
        And I click on continue button to submit values
        Then I verify that organization "AT-Organization" was created

@openBrowser @closeBrowser
Feature: Organization
    User can manage organizations

    @03 @ui @deleteOrganization
    Scenario: Verify that user can create a new organization
        Given I login into trello page with "admin" user credentials
        When I open the menu to create a new organization
        And I set the organization name "AT-Organization"
        And I select the default organization type
        And I click on continue button to submit values
        Then I verify that organization "AT-Organization" was created

    @04 @ui @createOrganization @deleteEditedOrganization
    Scenario: Verify that user can edit an organization name
        Given I login into trello page with "admin" user credentials
        When I open "AT-Organization" organization settings
        And I change the name to "AT-Edited-Organization"
        And I save the edited organization
        Then I verify that organization new name is "AT-Edited-Organization"

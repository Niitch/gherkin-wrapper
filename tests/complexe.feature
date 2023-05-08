# file: complexe.feature
# language: en

@main
Feature: Web page

  Background: Internet
  Given the internet connection is up

  @important
  Rule: Web page has expected title

  Background: Using chrome inside
  Given the browser is "chrome"

    Scenario Outline: Has expected title
      Given i am on the <url> website home page
      Then the page title should contain <title>

      Examples:
        | url | title |
        | playwright.dev | Playwright |
        | www.google.com | Google |
        
  @depreciated
  Scenario: Google.com has expected title
    Given i am on the "www.google.com" website home page
    Then the page title should contain "Google"

  @more
  Example: Loading data
    Given these colors:
      | name | code |
      | red | F00 |
      | green | 0F0 |
      | blue | 00F |
    And this content:
      """
      Hello world !
      """
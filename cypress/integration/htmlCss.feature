Feature: Browsing around w3.org/standard/webdesign/htmlcss Urls

  Scenario: Navigating to /htmlcss page contaninig status code 200
    Given User navigate to "/webdesign/htmlcss"
    Then Status code should be 200

  Scenario Outline: Navigating to links in /htmlcss page which doesnot contain status code 404
    Given User navigate to "/webdesign/htmlcss"
    When User navigate to "<links>" in /htmlcss page
    Then Status code should not be 404

    Examples: 
      | links             |
      | Css               |
      | Graphics          |
      | Scripting         |
      | Xstl              |
      | Html_Css_Tutorial |

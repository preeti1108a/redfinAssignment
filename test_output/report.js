$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Redfin Application",
  "description": "",
  "id": "redfin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "UseCase1",
  "description": "",
  "id": "redfin-application;usecase1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the redfin application is launched for \"\u003ctestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"\u003chomePageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"\u003ccityName\u003e\" in searchbox and press the enter button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate pop up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "On the pop up select the entry \"\u003cSelectionFromPopUp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify the city Real Estate page using \"\u003cestatePageHeader\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "assert the Search box on the top left side has \"\u003ccityName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select the min price as \"\u003cMinPriceIndex\u003e\" and max price as \"\u003cMaxPriceIndex\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify all the homes listed are from \"\u003csearchResult\u003e\", if no homes listed throw an errorMessage",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "redfin-application;usecase1;",
  "rows": [
    {
      "cells": [
        "testName",
        "homePageTitle",
        "cityName",
        "SelectionFromPopUp",
        "estatePageHeader",
        "MinPriceIndex",
        "MaxPriceIndex",
        "searchResult"
      ],
      "line": 17,
      "id": "redfin-application;usecase1;;1"
    },
    {
      "cells": [
        "test1",
        "Real Estate, Homes for Sale, MLS Listings, Agents",
        "Sunnyvale",
        "https://www.redfin.com/city/19457/CA/Sunnyvale",
        "Sunnyvale Real Estate",
        "25",
        "3",
        "/CA/Sunnyvale/"
      ],
      "line": 18,
      "id": "redfin-application;usecase1;;2"
    },
    {
      "cells": [
        "test2",
        "Real Estate, Homes for Sale, MLS Listings, Agents",
        "Sunnyvale",
        "https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale",
        "Sunnyvale Real Estate",
        "21",
        "4",
        "/TX/Dallas"
      ],
      "line": 19,
      "id": "redfin-application;usecase1;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16587825036,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "UseCase1",
  "description": "",
  "id": "redfin-application;usecase1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the redfin application is launched for \"test1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"Real Estate, Homes for Sale, MLS Listings, Agents\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"Sunnyvale\" in searchbox and press the enter button",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate pop up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "On the pop up select the entry \"https://www.redfin.com/city/19457/CA/Sunnyvale\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify the city Real Estate page using \"Sunnyvale Real Estate\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "assert the Search box on the top left side has \"Sunnyvale\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select the min price as \"25\" and max price as \"3\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify all the homes listed are from \"/CA/Sunnyvale/\", if no homes listed throw an errorMessage",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 40
    }
  ],
  "location": "StepDefinition.the_redfin_application_is_launched_for(String)"
});
formatter.result({
  "duration": 299002922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Real Estate, Homes for Sale, MLS Listings, Agents",
      "offset": 28
    }
  ],
  "location": "StepDefinition.verify_the_home_page_using(String)"
});
formatter.result({
  "duration": 74917777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 11
    }
  ],
  "location": "StepDefinition.enter_the_in_searchbox_and_press_the_enter_button(String)"
});
formatter.result({
  "duration": 1261360034,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_pop_up_appears()"
});
formatter.result({
  "duration": 2993010225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.redfin.com/city/19457/CA/Sunnyvale",
      "offset": 32
    }
  ],
  "location": "StepDefinition.on_the_pop_up_select_the_entry(String)"
});
formatter.result({
  "duration": 8852453807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale Real Estate",
      "offset": 40
    }
  ],
  "location": "StepDefinition.verify_the_city_Real_Estate_page_using(String)"
});
formatter.result({
  "duration": 1632011262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 48
    }
  ],
  "location": "StepDefinition.assert_the_Search_box_on_the_top_left_side_has(String)"
});
formatter.result({
  "duration": 79869999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 25
    },
    {
      "val": "3",
      "offset": 47
    }
  ],
  "location": "StepDefinition.select_the_min_price_as_and_max_price_as(String,String)"
});
formatter.result({
  "duration": 17366809602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/CA/Sunnyvale/",
      "offset": 38
    }
  ],
  "location": "StepDefinition.verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(String)"
});
formatter.result({
  "duration": 1692655532,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027FCLTJLQXDV1\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir12900_1104726415}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62011}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.149, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: c056966adfac679c6d0b9f2d5e63ad7c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:127)\r\n\tat com.redfin.pages.RealEstatePage.validatesearchResult(RealEstatePage.java:88)\r\n\tat com.redfin.stepdefinitions.StepDefinition.verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(StepDefinition.java:74)\r\n\tat ✽.Then Verify all the homes listed are from \"/CA/Sunnyvale/\", if no homes listed throw an errorMessage(scenarios.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 8221163514,
  "status": "passed"
});
formatter.before({
  "duration": 11012504623,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "UseCase1",
  "description": "",
  "id": "redfin-application;usecase1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the redfin application is launched for \"test2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"Real Estate, Homes for Sale, MLS Listings, Agents\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"Sunnyvale\" in searchbox and press the enter button",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate pop up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "On the pop up select the entry \"https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify the city Real Estate page using \"Sunnyvale Real Estate\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "assert the Search box on the top left side has \"Sunnyvale\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select the min price as \"21\" and max price as \"4\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify all the homes listed are from \"/TX/Dallas\", if no homes listed throw an errorMessage",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test2",
      "offset": 40
    }
  ],
  "location": "StepDefinition.the_redfin_application_is_launched_for(String)"
});
formatter.result({
  "duration": 444971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Real Estate, Homes for Sale, MLS Listings, Agents",
      "offset": 28
    }
  ],
  "location": "StepDefinition.verify_the_home_page_using(String)"
});
formatter.result({
  "duration": 87364488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 11
    }
  ],
  "location": "StepDefinition.enter_the_in_searchbox_and_press_the_enter_button(String)"
});
formatter.result({
  "duration": 1123840337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_pop_up_appears()"
});
formatter.result({
  "duration": 583444607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.redfin.com/neighborhood/338644/TX/Dallas/Sunnyvale",
      "offset": 32
    }
  ],
  "location": "StepDefinition.on_the_pop_up_select_the_entry(String)"
});
formatter.result({
  "duration": 7281319561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale Real Estate",
      "offset": 40
    }
  ],
  "location": "StepDefinition.verify_the_city_Real_Estate_page_using(String)"
});
formatter.result({
  "duration": 91005255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunnyvale",
      "offset": 48
    }
  ],
  "location": "StepDefinition.assert_the_Search_box_on_the_top_left_side_has(String)"
});
formatter.result({
  "duration": 47881973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 47
    }
  ],
  "location": "StepDefinition.select_the_min_price_as_and_max_price_as(String,String)"
});
formatter.result({
  "duration": 17377257978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/TX/Dallas",
      "offset": 38
    }
  ],
  "location": "StepDefinition.verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(String)"
});
formatter.result({
  "duration": 30027761172,
  "error_message": "java.lang.AssertionError: no data to test expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat com.redfin.pages.RealEstatePage.validatesearchResult(RealEstatePage.java:84)\r\n\tat com.redfin.stepdefinitions.StepDefinition.verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(StepDefinition.java:74)\r\n\tat ✽.Then Verify all the homes listed are from \"/TX/Dallas\", if no homes listed throw an errorMessage(scenarios.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6606605429,
  "status": "passed"
});
});
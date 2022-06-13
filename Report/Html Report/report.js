$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "",
  "description": "  To validate Login funvtionality pf fb",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginPage"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in facebook login paeg",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefine.user_is_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    To validate login by using invalid user and invalid pass",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginPage"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User have to enter valid username and invalid password",
  "rows": [
    {
      "cells": [
        "abdkalam",
        "12452",
        "14584",
        "kalam"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefine.user_have_to_enter_valid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefine.user_click_the_login_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefine.user_should_be_in_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in facebook login paeg",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefine.user_is_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "      To validate login by using val7id user and valid pass",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginPage"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User have to enter valid user and valid pass",
  "rows": [
    {
      "cells": [
        "amjsbu@gmail",
        "gkmil",
        "25696"
      ]
    },
    {
      "cells": [
        "selinium",
        "greens@gmail",
        "123648"
      ]
    },
    {
      "cells": [
        "testing@gmail",
        "automation",
        "56978"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefine.user_have_to_enter_valid_user_and_valid_pass(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button|",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefine.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefine.user_should_be_in_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/forgotpage.feature");
formatter.feature({
  "name": "",
  "description": "  To validate forgot functionallity in fb",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "        To validate account by using invalid mobile or invalid email",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in facebook login paeg",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefine.user_is_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click forgotten password",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefine.user_click_forgotten_password()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Forgotten password\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.63)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027LAPTOP-5B5UA9BC\u0027, ip: \u0027192.168.43.20\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4957508fa4c824eb7a14cb7bb99bd604, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Forgotten password\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.63, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\Abdul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52107}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52107/devtoo..., se:cdpVersion: 102.0.5005.63, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4957508fa4c824eb7a14cb7bb99bd604\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.stepdefinition.Stepdefine.user_click_forgotten_password(Stepdefine.java:85)\r\n\tat ✽.User click forgotten password(file:src/test/resources/Features/forgotpage.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User have to enter invalid mobile or invalid email",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefine.user_have_to_enter_invalid_mobile_or_invalid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefine.user_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefine.user_should_be_in_invalid_credentials_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});
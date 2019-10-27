## Security

Mernless takes web security very seriously. This means including features to protect application makers from common issues `CSRF`,`XSS`,`Click Jacking` etc.
This document is an overview of Mernless security features.

## Cross-Site Request Forgery (CSRF) 

Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker's choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

## Clickjacking 

Clickjacking, also known as a "UI redress attack", is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the the top level page. Thus, the attacker is "hijacking" clicks meant for their page and routing them to another page, most likely owned by another application, domain, or both.

## XSS 

Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

## X-Powered-By

Hackers can exploit known vulnerabilities in Express and Node if they know you’re using it. Express (and other web technologies like PHP) set an X-Powered-By header with every request, indicating what technology powers the server. Express, for example, sets this, which is a dead giveaway that your server is powered by Express.

A hacker can use this information to their advantage. If they know of a vulnerability in Express or Node and they see your site is Express-powered, they can be more targeted.

## MIME sniffing

MIME sniffing was, and still is, a technique used by some web browsers (primarily Internet Explorer) to examine the content of a particular asset. This is done for the purpose of determining an asset’s file format. This technique is useful in the event that there is not enough metadata information present for a particular asset, thus leaving the possibility that the browser interprets the asset incorrectly.

Although MIME sniffing can be useful to determine an asset’s correct file format, it can also cause a security vulnerability. This vulnerability can be quite dangerous both for site owners as well as site visitors.
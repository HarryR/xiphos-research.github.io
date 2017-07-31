---
layout: page
title:  "UK Phishing Report"
date:   2017-07-31 00:00:00
---

We’re all familiar with spam filling our inboxes and the millions of pounds being spent on email filtering and antivirus services every year, but a study performed by Xiphos Research Labs shows that over 60% of UK businesses don’t make any effort to protect themselves, or you and I, from the ever increasing and serious risk of phishing.

The most insidious and terrifying nature of phishing scams and targeted attacks is that they piggyback on the hard earned trust and reputation of websites we use every day. When you receive an email from your favourite retailer, you trust that they value you as a customer and wouldn’t steal your password and credit card details or infect you with malware, but how do you know it’s not a hacker or fraudster impersonating them?

In the past decade and a half, three major protective technologies have been introduced, SPF, DKIM and DMARC, which are proven to stop email forgery and have been widely adopted by all email server software and hosted email providers, however the protections only work when the owner of that domain-name chooses to use these technologies to protect their own reputation.

While it’s good to protect your own brand and reputation from being abused by phishers and spammers, the problem is that because such a high percentage of other businesses aren’t doing their part it’s ultimately going to be your friends and family who are on the receiving end. Think about phishing like it’s the flu, or even polio and measles; the more people who take safe precautions like not sneezing over everybody, washing our hands, or getting vaccinated makes everybody else much less likely to get ill because of herd immunity.


#### Three simple tips that will stop phishing and spam

Often it’s as simple as paying attention to the guides and support that comes with your web and email hosting provider, switch on some checkboxes and update some DNS records and you’re done. But what do you actually need to do to help end phishing?

##### 1. Setup Sender Policy Framework (SPF)

> SPF is a DNS record that tells the world which servers your domain uses for email, who can send email on your behalf, and the policy that other servers should follow when handling mail from your domain. Setting up SPF is easy and can be done in under a day, but needs extra consideration if you send email from many places.

##### 2. Authenticate emails with a Domain Key (DKIM)

> DKIM requires your email servers to cryptographically sign all email that they send, and then uses a DNS record to allow other servers to verify the integrity and authenticity of email they receive. Setting up DKIM is a more tedious process if you host your own email, but nothing an experienced IT administrator can’t handle.

##### 3. Create a DMARC policy and feedback channel

> Using DMARC allows for control over how SPF and DKIM policies are enforced by email servers and to get feedback to help troubleshoot email problems or identify spammers and phishers as early as possible. When you’ve gotten to grips with SPF and DKIM and are looking for the next step, start investigating DMARC.

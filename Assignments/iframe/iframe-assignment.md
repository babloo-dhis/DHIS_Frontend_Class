📝 Assignment – Mastering HTML <iframe>
🎯 Objective:
To understand and implement all possible use cases of the HTML <iframe> element, from basic embedding to advanced secure communication.

Part A – Basic Usage
Simple Embed:
 Create an iframe that loads https://www.wikipedia.org with a width of 600px and height of 400px.
 Add a proper title attribute.


YouTube Video:
 Embed a YouTube video of your choice using the official embed link.
 Make sure it supports fullscreen.



Part B – Intermediate
Targeted Links:
Create an iframe named myFrame.
Add three links: Google, Bing, and Yahoo.
Clicking on each link should load the page inside the iframe.


Inline HTML with srcdoc:
 Create an iframe that displays this text without an external file:

 <h1>Hello Students!</h1>
<p>This is an iframe using srcdoc.</p>


Styling:
 Style an iframe with CSS:


Rounded corners


Box shadow


Responsive width (80% of screen width)



Part C – Advanced Attributes
Sandboxed Iframe:
 Create an iframe that loads an HTML page, but disable JavaScript and forms using the sandbox attribute.


Permission Control (allow):
 Create an iframe that loads a video and allow only fullscreen, but not autoplay.


Lazy Loading:
 Create a long page with two iframes.
 The second iframe should load only when scrolled into view using loading="lazy".



Part D – Security & Communication
Parent → Iframe Communication:


Create a parent page with an iframe.


Add a button in the parent that sends a message "Hello from parent!" to the iframe using postMessage.


The iframe should display the message inside a <p> tag.


Iframe → Parent Communication:


Modify the iframe so it sends a reply "Message received!" back to the parent.


Show this reply inside the parent page.



Part E – Real World Embeds
Google Maps Embed:
 Embed a Google Map showing your school/college location.


Dashboard Page:
 Create a dashboard layout with at least 3 iframes:


Left side: A YouTube tutorial video.


Right side: Google Maps location.


Bottom: An internal HTML file (e.g., “About Me” page).



✅ Submission Guidelines
Submit all files in a folder named iframe_assignment.


Each part should be in a separate HTML file (e.g., part1.html, part2.html, etc.).


For the Dashboard Page (Part E), name it dashboard.html.


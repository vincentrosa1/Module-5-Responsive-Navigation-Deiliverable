MODULE 5 RESPONSIVE NAVIGATION DELIVERABLE STARTER

RIVER CITY COMMUNITY GARDEN
Vincent Rosa

SITE AND PURPOSE
River City Community Garden is a fictional community garden nonprofit in Sacramento. The site
helps visitors find garden hours and location, learn about renting a plot and upcoming workshops,
and get help or volunteer. Address, phone, and email are placeholders.

NAVIGATION
One shared header on all three pages: a skip link, a brand link back to index.html, and a 
labeled <nav> with six links: Home, Hours and Location, Garden plots, Workshops, Volunteer, Get Support. 
The current page link has aria-current="page".

Narrow screens: links stack in a column. With JavaScript on a native Menu button shows and hides
the list and keeps aria-expanded in sync. Escape closes the menu and returns focus to the button.

Wide screens: all links show in one row next to the brand, and the Menu button is not used.

With JavaScript off: the Menu button stays hidden and every link is always visible. 

FILES
index.html: home page, garden plots and workshops sections

visit.html: hours, location, getting here

support.html: plot help, accessibility, contact, volunteer

styles.css: shared header, navigation, and interaction styles

navigation.js: progressive enhancement for the narrow menu

navigation-plan.html: task inventory, breakpoint evidence, test record, peer task test, JavaScript
code defense, and AI disclosure. 

narrow-menu-open.png: Screenshot of the narrow layout with menu open.

wide-navigation.png: Screenshot of the wide layout and all links shown.

README.txt: this file.


OPENING AND TESTING 
1. Extract the Zip
2. Open index.html in a browser. No server is utilized or needed.
3. Use the Nav to move between all three pages.
4. Narrow the window below the breakpoint (888px or 56em) to see the Menu button. 
   Test with mouse, Tab, Enter, Space, and Escape. 
5. Disable JavaScript and reload. All links stay visible. 

BREAKPOINTS AND ASSETS
The wide layout starts at min-width: 56em. The value comes from an observed content failure, 
not a device size. navigation-plan.html section 2 goes over this.
No external fonts, images, or libraries are used besides two screenshots. 

PATHS
All CSS, JavaScript, image, and page links use relative pahts, so the site will work from any folder.
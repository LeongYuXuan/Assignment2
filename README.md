# Assignment-2
## Repository for Assignment 2 for Interactive Devlopment
Github Page Link: (Insert link here)
## Project Name
### Webpage based "app" utilising API to determine Anime and Episode from Image
This web app is meant for fun, but could be used to help people determine the ~sauce~ anime from an image. 

## Design Process
### Initial Thoughts
After discovering the previous topic (MRT Routing) would be too difficult, I decided to look into the APIs listed in the Assignment 2 document when an API caught my attention. The webpage would be bare at first with no CSS so I can focus on having the functions work properly.

My planned workflow would be **HTML BASE --> JAVASCRPT --> BUG TESTING**

## Features (Added ones are ticked)
- [ ] Generate a path based on the user's input
- [ ] Indicate what interchanges to use if needed
- [ ] State the line(s) the Station is on
- [ ] Store previous paths in localstorage for future use?
- [ ] A section, dedicated to explaining some terms (EW/Red Line, Interchanges etc.)

## Tech Used
* HTML Boilerplate (Visual Studio) https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate
* Bootstrap Templates?
* trace.moe API (concerning name for an API)
* W3C HTML validator https://validator.w3.org/
* W3C CSS "Jigsaw" validator https://jigsaw.w3.org/css-validator/

## Test Runs
### Postman  API test
Actions: Send a request through Postman to see what result it returns

Observation: Due to how postman works, I can only search up anime through Image URL. Took some getting used to, but the API gave a proper response. Test Image is an image from a a relatively obsure anime "Macross Delta". Returned proper result along with the episold number, surprisingly. API returns corresponding error message if the link is broken or too long. I assume that if the image is too big (>10MB), it would return an error message too. 
## Credits
TBA

# Assignment-2
## Repository for Assignment 2 for Interactive Devlopment
Github Page Link: https://leongyuxuan.github.io/Assignment2/
## Project Name
### Webpage based "app" utilising API to determine Anime and Episode from Image
This web app is meant for fun, but could be used to help people determine the ~sauce~ anime from an image. 

## Design Process
### Initial Thoughts
After discovering the previous topic (MRT Routing) would be too difficult, I decided to look into the APIs listed in the Assignment 2 document when an API caught my attention. The webpage would be bare at first with no CSS so I can focus on having the functions work properly.
The finished website would be simple. Nothing flashy with light colours.

> As a person wanting to watch some anime, I would like to upload an image of a scene, so I can find the anime the image came from




## Features (Added ones are ticked)
- [ ] Display Japanese Name of Anime
- [ ] Display English Name of Anime
- [ ] Display Episode where image originated from
- [x] Hmm...
## Tech Used
* HTML Boilerplate (Visual Studio) https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate
* trace.moe API (concerning name for an API) https://soruly.github.io/trace.moe/#/
* W3C HTML validator https://validator.w3.org/
* W3C CSS "Jigsaw" validator https://jigsaw.w3.org/css-validator/
* jshint JS linter(?) https://jshint.com/
## Test Runs
### General API test via Postman
Actions: Send a request through Postman to see what result it returns

Observation: Due to how postman works, I can only search up anime through Image URL. Took some getting used to, but the API gave a proper response. Test Image is an image from a a relatively obsure anime "Macross Delta". Returned proper result along with the episode number, surprisingly. API returns corresponding error message if the link is broken or too long. I assume that if the image is too big (>10MB), it would return an error message too. 

### Unknown Image API test via Postman
Action: Send a request, containing an non-anime image/fanart.

Hypothesis: Returns an error message along the lines of "unknown Image"

Observations: Sending image URL of an apple still gave a result, strangely enough. Fittingly, the first result it gave was "food wars" for the english title. Sending the image url for fanart of "Lelouch vi Brittania" also gave results, but the anime the API guessed was 'Skip Beat", when the actual answer is "Code Geass". I wonder if there is a way to prevent users from doing that. 

Conclusion: Perhaps I could  tease people on purpose to send random images to see what the API would spit out...

### Random Image API test via Postman
Action: Send a request containing a variety of anime images.

Observation: Concerningly, if the image of the episode has been edited slightly(e.g cropped), the API has issues recognising it and spits out random results. I sent an image URL of a frame near the climax of "Macross Zero" but none of the results were correct. The URL length limit is making testing rather difficult as well.

Conclusion: I would have to make a bare minimum physical website ASAP, as size limits are more lenient compared to URL length Limits. I should also provide a warning for people that 

### Observations made
Turns out, I do not need to clone another repository for edits. Pretty cool.

### Unfortunate discovery
trace.moe does not directly accept file uploads, so I was advised to use an api for images. Upload the images to there and get the image url to put into trace.moe. I am afraid I would not have the time.

### Leap of faith js request to Imgur
Action: Send a request to post an image using the example code from this site: https://apidocs.imgur.com/#c85c9dfc-7487-4de2-9ecd-66f727cf3139

Observation: 403 error. Likey a authorization process I have missed.

Conclusion: I am done for.

### W3C HTML Validation
Observation: Many errors, several were fundenmental...

Action: Fix errors

### Jigsaw CSS Validation
Observation: No errors. Very little css to begin with...

### jshint JS validation
Observation: Unable to deduce anything. Maybe jshint does not recognise jQuery?

## Credits
Chunk of code from leap of faith: https://apidocs.imgur.com/#c85c9dfc-7487-4de2-9ecd-66f727cf3139

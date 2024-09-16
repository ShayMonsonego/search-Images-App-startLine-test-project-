# search-Images-App-startLine-test-project-

### Project Overview
This project is a web application developed for the first time using JavaScript, CSS, and HTML. The application serves as a dynamic gallery where users can search for and view images from Pixabay, with functionality to add images to favorites. This is my initial attempt at implementing a responsive design using CSS, as well as my first experience working with JavaScript, having previously worked primarily with Java, C, and Python during my studies.
 introduction
This project is a web application developed for the first time using JavaScript, CSS, and HTML. The application serves as a dynamic gallery where users can search for and view images from Pixabay, with functionality to add images to favorites. This is my initial attempt at implementing a responsive design using CSS, as well as my first experience working with JavaScript, having previously worked primarily with Java, C, and Python during my studies.

### Technologies Used
HTML
CSS
JavaScript
### Note: This project does not utilize React or any CSS frameworks, and the design is handled purely with CSS and JavaScript. The decision to avoid media queries was intentional. Instead, I used percentage-based sizing 
for responsiveness, as it was my first time working on a responsive design and I aimed to understand how different elements adapt to various screen sizes through percentage calculations.

### Features
Image Search: Users can search for images using the Pixabay API.
Dynamic Content Creation: Images and associated data are dynamically created and managed through JavaScript without using React.
Favorites Management: Users can add images to a favorites list.
Modal View: Clicking an image opens a modal with additional details.
Responsive Design: Achieved through percentage-based layout rather than media queries, as an initial approach to responsiveness.
Installation and Setup
Clone the Repository


### Open the Project
Open the index.html file in your web browser to view the application.

### Usage
Search for Images
Enter a search term in the input box and press the "Search" button.
View and Interact
Images matching your search term will be displayed.
Click on an image to open a modal view with more details.
Use the "Zoom In" button within the modal to view a larger version.
Add to Favorites
Click the "Add to Favorite" button on the modal to save the image to your favorites list.
Load More Images
Click the "Load More" button to fetch and display more images.
Code Explanation
CSS

General Styles: Basic styling for body, headers, and paragraphs.
Buttons and Icons: Custom styles for buttons and icons, including hover effects.
Responsive Design: Utilizes percentage-based sizing for responsiveness. Most of my time was dedicated to creating the responsive design using CSS, which took a total of 18 hours. This approach was chosen as it allowed me to handle responsiveness fundamentally, without relying on media queries.
JavaScript

Fetching Data: Uses the Fetch API to retrieve data from Pixabay based on user input.
Dynamic Content: Creates and manages image elements dynamically.
Modal Management: Handles the display and content update of modal windows.
Favorites Management: Adds and manages a list of favorite images.
Special Note: This is my first implementation of responsive design using percentage-based layouts and pure JavaScript. While media queries are a common approach, I opted for this method to better understand and handle responsiveness at a fundamental level. Additionally, this project represents my initial foray into using JavaScript, given my prior background in Java, C, and Python. I did not use ChatGPT or any external designs from the internet; the entire design was crafted manually, line by line.

### Challenges and Solutions
Index Issue: I faced challenges with managing the index of images. This was resolved by implementing a method to dynamically create and manage image boxes, ensuring that each image's index is handled correctly.
Dynamic Creation: The project avoids using React, managing all dynamic content creation and manipulation through vanilla JavaScript and CSS.
Contributing
If you have any suggestions or improvements, please feel free to contribute by creating a pull request or submitting an issue.

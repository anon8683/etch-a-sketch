# Etch-a-Sketch

In this project I made a browser supported etch-a-sketch game where the user can paint over a grid with their mouse.
The user is able to customise the grid and increase the amount of squares from 1² to 50², they can also choose their brush colour  
and a background colour.
When the cursor hovers over one of the squares, it will be painted with the selected colour.

## How it went:

I used a combination of CSS Flexbox, Grid and Javascript.  
First I tried to create the grid by using flex box, as I felt more comfortable with that but found it difficult to get the desired result. So I dove into learning about CSS Grid and it quickly got me the desired "grid" I wanted.

The user would input a number and the grid's colums and rows would dynamically change to reflect the number given, I did this by appending divs to the grid container via DOM. Once I had got the Javacript all wired up and functions working correctly I added eventListeners to detect when the user had hovered over a cell, if they did the cell's CSS would be modified with a background-color.

I then learned how to add a slider and color pickers to allow the user to change the the grid size and choose their color's. I learnt a lot in this project in regards to obtaining user inputs in various different ways. Overall it took me about 7 hours most of it researching and learning new things.

Have fun drawing!

## Future features:

I plan to add more features in the future;

- Shading
- Lighten
- Rainbow color selection
- Fill color
- Screenshot

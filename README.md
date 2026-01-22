# JavaScript Events Exercise

Hey there! This is a fun little project where I turned a boring static Bootstrap page into something interactive using nothing but vanilla JavaScript. No frameworks, no libraries - just good old JavaScript making things happen when you click, hover, or press keys.

## What's This About?

So I had this HTML page sitting there, looking pretty but doing absolutely nothing. I thought: "What if I could make it react to what users do?" That's exactly what I did. I added 9 different interactive features, all without touching the HTML file (that was the challenge!). Everything happens through JavaScript event listeners and DOM manipulation.

## What Can You Do With It?

I've built 9 features, starting simple and getting a bit more interesting as we go:

### The Basics (Features 1-5)

**1. Footer Click Counter**
- Click anywhere on the footer and watch the console - you'll see "clique" appear
- Keep clicking and it'll count: "clic numéro 1", "clic numéro 2", etc. Simple but satisfying!

**2. Hamburger Menu**
- You know that three-line menu button (☰) in the top right? It actually works now!
- Click it and the menu slides down. Click again and it disappears. Magic!

**3. First Card Goes Red**
- Click the "Edit" button on the first card (the HTML one)
- The text turns red. Forever. No going back (unless you refresh the page). It's a one-way street!

**4. Second Card Toggles Green**
- Click "Edit" on the second card (CSS)
- Text turns green. Click again? Back to normal. Click again? Green again. It's a toggle!

**5. Nuclear Mode**
- Double-click the navbar (the black bar at the top)
- Boom! Bootstrap disappears and you see the page in all its unstyled glory
- Double-click again to bring it back. It's like a secret feature I hid there!

### The Cool Stuff (Features 6-9)

**6. Card Shrinks on Hover**
- Hover your mouse over any "View" button (the green ones)
- Watch the card shrink! The image becomes tiny (20% size), text disappears, but buttons stay visible
- Move your mouse away and everything goes back to normal. Smooth!

**7. Rotate Cards Right**
- Click the gray `==>` button
- The last card jumps to the front! It's like shuffling cards, but digital.

**8. Rotate Cards Left**
- Click the blue `<==` button
- The first card goes to the back. Same idea, opposite direction!

**9. Keyboard Shortcuts**
- Click on the "JS & Events" logo (or Tab to it)
- Now press keys to change the whole page layout:
  - Press `a` → Everything condenses to the left
  - Press `y` → Everything moves to the center
  - Press `p` → Everything shifts to the right
  - Press `b` → Back to normal

## How to Run It

Super simple! Just open `JS_events/exo_events.html` in your browser. That's it. No build process, no npm install, no nothing. Just double-click and go!

If you want to use a local server (sometimes it's better for development), you can use:

```bash
# Python (if you have it)
python -m http.server 8000

# Or Node.js
npx http-server

# Or PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/JS_events/exo_events.html`

## Testing It Out

Open your browser's console (press F12, or right-click → Inspect → Console) and start clicking around!

Here's what to try:
1. Click the footer - watch the console messages
2. Click the hamburger menu - see it toggle
3. Click "Edit" on cards - watch colors change
4. Hover over "View" buttons - cards shrink
5. Click the arrow buttons - cards rotate
6. Double-click the navbar - watch Bootstrap disappear (nuclear mode!)
7. Click the logo and press `a`, `y`, `p`, or `b` - layout changes

## What I Learned Building This

This project was great practice for:
- Understanding how JavaScript events work
- Manipulating the DOM (changing elements, moving them around)
- Handling different types of user interactions
- Debugging with the console
- Writing clean JavaScript without frameworks

## Things That Tripped Me Up

**Selector Specificity**
- At first I used `querySelector('.row')` and it kept selecting the wrong row (the one in the header instead of the cards section). The fix? Use `.album .row` to be more specific. Lesson learned!

**NodeLists vs Elements**
- `querySelectorAll()` gives you a list, not a single element. You need `[0]` to get the first one. Easy to forget!

**Event Defaults**
- Links want to navigate away when clicked. Had to use `event.preventDefault()` to stop that behavior.

**Dynamic Elements**
- After moving cards around, the order changes. Had to re-select elements each time to make sure I was working with the right ones.

## The Code

The `script.js` file is pretty straightforward - about 141 lines organized by feature:
- Footer stuff (lines 1-10)
- Hamburger menu (lines 12-17)
- Card color changes (lines 20-39)
- Bootstrap toggle (lines 41-53)
- Card hover effects (lines 55-75)
- Card rotation (lines 77-121)
- Keyboard shortcuts (lines 123-140)

## If Something's Not Working

- Check the console (F12) - JavaScript errors will show up there
- Make sure `script.js` is actually loading (check the Network tab)
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- For keyboard shortcuts, remember to click the logo first to give it focus!

## Want to Improve It?

Feel free to fork it, add features, refactor, or whatever! It's an educational project, so experiment away. Maybe add:
- More interactive features
- Better error handling
- Accessibility improvements
- Performance optimizations
- Or whatever else you think would be cool!

## Final Thoughts

This was a fun exercise in making a page interactive with pure JavaScript. No frameworks, no complexity - just understanding how events and the DOM work together. If you're learning JavaScript, this is a great project to study and build upon.

Projet validant réalisé pour l'exo de la sem 3 du jour 4 pour THP.

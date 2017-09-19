#Psi-Tester for Android

## Project:
This is a simple, silly app that tests whether or not the user can predict the future or read a computer's memory. The application asks the player to pick one of five cards. It will then also pick one of those five cards. When the user hits "Reveal", they'll be able t

## Running The Project
This is a React-Native project, so the standard React Native build applies. 

To choose whether to compile for Android or iOS at runtime, use:
`npm start`

To run specifically on Android, which is more 
`npm run android`

Make sure you are running an Android or iOS emulator before running the command, or that you have a device connected to that computer. For more details, see REACT-NATIVE.md.

## TODO (Things that don't currently work)
- The main card doesn't show an image corresponding to the computer's card when the "Reveal" button is tapped

- The statistics screen is currently empty, and doesn't actually have any of the statistics that are stored on the HomeScreen

- There's a lot of messy code and cleanup to be had in home-screen.js.

### Things I've learned while building this mini-project:
- Holy heck is it important to make sure you have all the packages and various pieces in place before you even begin work. This is especially true when working from a Linux machine, where a lot of things are not as cut-and-dry as they might otherwise would. I probably spent a good chunk of time just trying to get React-Native to even start working and synch up with the android emulator never mind actually coding the app itself. 

- Speaking of which, React-Native is an extremely nice platform for making apps, even if Android Studio does have a much nicer way for being able to visually design something. Still, I'm starting to see where the trade-offs for using one system over the other would be. 

- Learning how the state system works in React is a massive learning curve, and I still have a ton to learn. I understand how to set new mutable variables that we can change on the fly, but boy is it a pain. And I still need to figure out how to do things like push data between different screens, and how to make images change while the app is running. The latter should not be too hard, but the former will be tricky indeed.

- Navigation is much less painful than I thought it would be, thankfully, since it doesn't take too much time to get between screens. 

- Aligning images and text correctly within the frame is the worst thing, and trying to figure out how all the views and styles fit together, especially because it is so close to CSS without being CSS is an interesting challenge, to say the least. Not to mention that I'm also starting to realize how much of a pain it would be if I had to account for the screen rotating to be horizontally aligned. 

- As usual, the mantra of write a little code and test often really applies here, as it's very easy to miss punctuation, structure and other minor details that will simply break your app. 

-
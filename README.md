# MMA-Combo-Generator

Simple React app with SQL backend that generates MMA combos for user's to try and practice

## Functions

### Explore

Application will randomly generate a combo for users to try. If it is interesting/liked, user's are able to save the combo. If the combo is not do-able, the user can instead delete it.

### Workout

During workout mode, users can select the work and rest intervals, as well as number of sets. There are two modifier options as well.

1. single combo mode: users will only be required to shadowbox, and perform the combo when the beep sounds
2. random combo mode: users will be at the ready, and perform the random combo shown on the screen (combos will only be the ones in the saved list)

## To-Do List

1. create timer function for workout mode  
    1a. create workout page  
        1ai. select number of sets, amount of time to rest  
        1aii. select modifiers (select single / random)  
    1b. create timer function and test that it works  
    1c. beep sounds, show random combos (beep random timings)  
2. Deploy app
3. Add users (Nice to have, not compulsary)
4. Add way to automate PnC of combos (currently is manual insertion of 2, 3, 4 etc)

## How to run Project

1. Clone project onto desktop
2. Run sql commands somewhere (Work on this part when doing the deployment step, currently testing on localhost so no need to do this)
3. cd into backend and start backend server using `node index.js`
4. cd out using `cd ..` and cd into client
5. Start client side server using npm `npm start`
6. Users will now be able to see the randomly generated combo, and begin trying it out, as well as doing the delete/saving functions

## Reference Resource

making a react app: [https://www.youtube.com/watch?v=fPuLnzSjPLE]
making a tabata timer: [https://github.com/savalazic/tabata-timer]

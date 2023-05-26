# MMA-Combo-Generator
Simple React app with SQL backend that generates MMA combos for user's to try and practice

## Functions
Application will randomly generate a combo for users to try. If it is interesting/liked, user's are able to save the combo. If the combo is not do-able, the user can instead delete it. 


## To-Do List
1. Use Moves table to create Combos table 
2. Display Combos table in React app
3. CRUD combos, Moves must be fixed 
4. Favorites, Delete function (think about how this should work) (workout mode, explore mode?)
5. Deploy app 
6. Add users (Nice to have, not compulsary)


## How to run Project
1. Clone project onto desktop 
2. Run sql commands somewhere (Work on this part when doing the deployment step, currently testing on localhost so no need to do this)
3. cd into backend and start backend server using ```node index.js```
4. cd out using ```cd ..``` and cd into client
5. Start client side server using npm ```npm start```
6. Users will now be able to see the randomly generated combo, and begin trying it out, as well as doing the delete/saving functions 


## Reference Resource
https://www.youtube.com/watch?v=fPuLnzSjPLE
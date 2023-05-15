//import React, {useState} from 'react'

function DiningUnderstand(): JSX.Element {
  return <div>Dining Understand</div>;
  // An step-through animation that allows the user to visualize what exactly the code is doing at every step. 
  // It's the same idea of a function call stack but putting "Friends"/nodes onto the stack rather than functions. 
  // The output box is a verbose version of what's happening in the stack.
  // The user can click "Next" to go to the next step in the animation.
  // The user can click "Previous" to go to the previous step in the animation.

  class Friend {
    constructor(minutes, name, left = null, right = null) {
      this.minutes = minutes;
      this.name = name;
      this.left = left;
      this.right = right;
    }
  }

  // ${Friend.name} is on call with ${Friend.left.name} and ${Friend.right.name} for ${Friend.minutes} minutes.
}

export default DiningUnderstand;

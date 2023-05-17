import React, { useState } from 'react';
import Jane from "../../assets/dining_guests/Jane.png";
import Sam from "../../assets/dining_guests/Sam.png";
import May from "../../assets/dining_guests/May.png";
import Ryan from "../../assets/dining_guests/Ryan.png";
import Lea from "../../assets/dining_guests/Lea.png";
import "../../pages/Problem2.scss"

function DiningUnderstand(): JSX.Element {
  // An step-through animation that allows the user to visualize what exactly the code is doing at every step.
  // It's the same idea of a function call stack but putting "Friends"/nodes onto the stack rather than functions.
  // The output box is a verbose version of what's happening in the stack.
  // The user can click "Next" to go to the next step in the animation.
  // The user can click "Previous" to go to the previous step in the animation.

//   interface Item {
//     name: string;
//     imageUrl: string;
//     message: string;
//   }

//   const items: Item[] = [
//     { name: 'Lea', imageUrl: Lea, message: "Sam just called on May's phone" },
//     { name: 'May', imageUrl: May, message: "May is on call with Lea"},
//     { name: 'Jane', imageUrl: Jane, message: "Jane is on call with Ryan" },
//     { name: 'Ryan', imageUrl: Ryan, message: "Ryan is on call with Jane" },
//     { name: 'Sam', imageUrl: Sam, message: "Sam is on call with Lea"},
//   ];
//   const [currentIndex, setCurrentIndex] = useState(items.length - 1);
//   const [renderedItems, setRenderedItems] = useState<Item[]>([items[items.length - 1]]);

//   const handleNext = () => {
//     if (currentIndex > 0) {
//       const nextIndex = currentIndex - 1;
//       setRenderedItems(prevItems => [...prevItems, items[nextIndex]]);
//       setCurrentIndex(nextIndex);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex < items.length - 1) {
//       const prevIndex = currentIndex + 1;
//       setRenderedItems(prevItems => prevItems.slice(0, prevItems.length - 1));
//       setCurrentIndex(prevIndex);
//     }
//   };

//   return (
//     <div>
//       {renderedItems.map((item, index) => (
//         <div key={index}>
//           <p>{item.name}</p>
//           <img src={item.imageUrl} alt={`Image ${index + 1}`} />
//         </div>
//       ))}

//       {currentIndex < items.length - 1 && (
//         <button onClick={handlePrevious}>Previous</button>
//       )}

//       {currentIndex > 0 && (
//         <button onClick={handleNext}>Next</button>
//       )}
//     </div>
//   );
// }


  class Friend {
    minutes: number;
    name: string;
    imageUrl: string;
    left: Friend | null;
    right: Friend | null;

    constructor(minutes: number, name: string, imageUrl: string, left: Friend | null = null, right: Friend | null = null) {
      this.minutes = minutes;
      this.name = name;
      this.imageUrl = imageUrl;
      this.left = left;
      this.right = right;
    }
    callDescription(): string {
      let description = `${this.name} is on a call with `;
      if (this.left && this.right) {
        description += `${this.left.name}`;
      } else if (this.left) {
        description += `${this.left.name}.`;
      } else if (this.right) {
        description += `${this.right.name}.`;
      } else {
        description += `nobody!`;
      }
      description += ` This call takes ${this.minutes} minutes.`;
      return description;
    }
  }

  const friends: Friend[] = [
    new Friend(10, 'Lea', Lea),
    new Friend(20, 'May', May),
    new Friend(30, 'Jane', Jane),
    new Friend(40, 'Ryan', Ryan),
    new Friend(50, 'Sam', Sam),
  ];

  // Set relationships
  friends[0].left = null;
  friends[0].right = friends[1];
  friends[1].left = friends[0];
  friends[1].right = friends[2];
  friends[2].left = friends[1];
  friends[2].right = friends[3];
  friends[3].left = friends[2];
  friends[3].right = friends[4];
  friends[4].left = friends[3];
  friends[4].right = null;


  // const [currentIndex, setCurrentIndex] = useState(friends.length - 1);
  // const [renderedItems, setRenderedItems] = useState<Friend[]>([friends[friends.length - 1]]);
  // const [totalMinutes, setTotalMinutes] = useState(renderedItems.reduce((total, friend) => total + friend.minutes, 0));

  const [currentIndex, setCurrentIndex] = useState(friends.length - 1);
  const [renderedItems, setRenderedItems] = useState<Friend[]>([friends[friends.length - 1]]);
  const [totalMinutes, setTotalMinutes] = useState(renderedItems.reduce((total, friend) => total + friend.minutes, 0));
  
  const handleNext = () => {
    if (currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      const nextFriend = friends[nextIndex];
      setTotalMinutes(prevTotal => prevTotal + nextFriend.minutes); // Update total minutes
      setRenderedItems(prevItems => [...prevItems, nextFriend]);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex < friends.length - 1) {
      const prevIndex = currentIndex + 1;
      const prevFriend = renderedItems[renderedItems.length - 2];
      setTotalMinutes(prevTotal => prevTotal - prevFriend.minutes); // Update total minutes
      setRenderedItems(prevItems => prevItems.slice(0, prevItems.length - 1));
      setCurrentIndex(prevIndex);
    }
  };

  return (
      <div>
        <p>The call stack starts at Sam. As each person calls the next person following, 
          the total number of minutes increases. The result represents how much time will 
          have passed until your call with Lea is over</p>
        {currentIndex < friends.length - 1 && (
          <button onClick={handlePrevious}>Previous</button>
        )}

        {currentIndex > 0 && (
          <button onClick={handleNext}>Next</button>
        )}
        <div className="Stack-Output">
          <div className="Output-Container">
            {renderedItems.slice().reverse().map((friend, index) => (
            <div className="Output-Divider">
              <div key={index} className="Profile-Container">
                <div>
                  <div>{friend.minutes} minutes</div>
                  <div>{friend.callDescription()}</div> 
                  {index === renderedItems.length - 1 && <div>Total Minutes: {totalMinutes}</div>}
                </div>
                <div className="Photo-Name">
                  <div>{friend.name}</div>
                  <img src={friend.imageUrl} alt={friend.name} />
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="Output-Box">
              <div></div>
          </div>
        </div>
      </div>

  );
}



export default DiningUnderstand;

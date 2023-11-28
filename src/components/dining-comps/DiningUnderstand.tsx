import { useState } from 'react';
import DiningTree from './DiningTree';
import Jane from '../../assets/dining_guests/Jane.png';
import Lea from '../../assets/dining_guests/Lea.png';
import May from '../../assets/dining_guests/May.png';
import Ryan from '../../assets/dining_guests/Ryan.png';
import Sam from '../../assets/dining_guests/Sam.png';
import '../../pages/Problem2.scss';

function DiningUnderstand(): JSX.Element {
  // An step-through animation that allows the user to
  //visualize what exactly the code is doing at every step.
  // It's the same idea of a function call stack
  // but putting "Friends"/nodes onto the stack rather than functions.
  // The output box is a verbose version of what's happening in the stack.
  // The user can click "Next" to go to the next step in the animation.
  // The user can click "Previous" to go to the previous step in the animation.

  class Friend {
    minutes: number;
    name: string;
    imageUrl: string;
    left: Friend | null;
    right: Friend | null;
    totalCallTime: number;

    constructor(
      minutes: number,
      name: string,
      imageUrl: string,
      left: Friend | null = null,
      right: Friend | null = null
    ) {
      this.minutes = minutes;
      this.name = name;
      this.imageUrl = imageUrl;
      this.left = left;
      this.right = right;
      this.totalCallTime = minutes;
    }
    callDescription(): string {
      let description = `${this.name} is on a call with `;
      if (this.left && this.right) {
        description += `${this.left.name}`;
      } else if (this.left) {
        description += `${this.left.name}.`;
      } else if (this.right) {
        if (this.name === 'Lea') {
          description += 'nobody!';
          return description;
        } else {
          description += `${this.right.name}.`;
        }
      } else {
        description += 'nobody!';
      }
      description += ` This call takes ${this.minutes} minutes.`;
      return description;
    }
  }

  const friends: Friend[] = [
    new Friend(0, 'Lea', Lea),
    new Friend(10, 'May', May),
    new Friend(20, 'Jane', Jane),
    new Friend(30, 'Ryan', Ryan),
    new Friend(40, 'Sam', Sam),
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
  // Set relationships

  // const [currentIndex, setCurrentIndex] = useState(friends.length - 1);
  // const [renderedItems, setRenderedItems] = useState<Friend[]>([friends[friends.length - 1]]);
  // const [totalMinutes, setTotalMinutes] = useState(renderedItems.reduce((total, friend) => total +
  // friend.minutes, 0));
  const [callSummary, setCallSummary] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(friends.length - 1);
  const [renderedItems, setRenderedItems] = useState<Friend[]>([
    friends[friends.length - 1],
  ]);
  const [totalMinutes, setTotalMinutes] = useState(
    renderedItems.reduce((total, friend) => total + friend.minutes, 0)
  );

  // const handleNext = () => {
  //   if (currentIndex > 0) {
  //     const nextIndex = currentIndex - 1;
  //     const nextFriend = friends[nextIndex];
  //     setTotalMinutes((prevTotal) => prevTotal + nextFriend.minutes); // Update total minutes
  //     setRenderedItems((prevItems) => [...prevItems, nextFriend]);
  //     setCurrentIndex(nextIndex);

  //     if (nextIndex === 0) {
  //       let totalCallTimeSoFar = nextFriend.minutes;
  //       let summary = '';
  //       for (let i = nextIndex + 1; i < friends.length; i++) {
  //         totalCallTimeSoFar += friends[i].minutes;
  //         friends[i].totalCallTime = totalCallTimeSoFar;
  //         summary += `${friends[i].name}’s call took ${friends[i].minutes} + `;
  //       }
  //       summary += `0 minutes.\nZ = ${totalCallTimeSoFar}\nTherefore,
  //       ${friends[friends.length - 1].name}’s call took Z minutes!`;
  //       setCallSummary(summary);
  //     }
  //   }
  // };
  const handleNext = () => {
    if (currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      const nextFriend = friends[nextIndex];
      setTotalMinutes((prevTotal) => prevTotal + nextFriend.minutes);
      setRenderedItems((prevItems) => [...prevItems, nextFriend]);
      setCurrentIndex(nextIndex);

      // if (nextIndex === 3) {
      //   const finalLine = `${friends[0].name}’s call took 0 minutes!`;
      //   setCallSummary((prevSummary) => [...prevSummary, finalLine]);
      // }
      let totalCallTimeSoFar = nextFriend.minutes;
      let summary = `${
        friends[friends.length - 2 - nextIndex].name
      }’s call took `;
      for (let i = friends.length - 1; i > nextIndex; i--) {
        totalCallTimeSoFar += friends[i].minutes;
        summary += `${friends[friends.length - i].minutes} + `;
      }
      summary += '0 minutes.';
      setCallSummary((prevSummary) => [...prevSummary, summary]);

      if (nextIndex === 0) {
        const finalLine = `Therefore, ${
          friends[friends.length - 1].name
        }’s call took ${totalCallTimeSoFar} minutes!`;
        setCallSummary((prevSummary) => [...prevSummary, finalLine]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex < friends.length - 1) {
      const prevIndex = currentIndex + 1;
      const prevFriend = renderedItems[renderedItems.length - 1];
      setTotalMinutes((prevTotal) => prevTotal - prevFriend.minutes); // Update total minutes
      setRenderedItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
      setCurrentIndex(prevIndex);

      const summaryLength = friends.length - prevIndex - 1;
      setCallSummary((prevSummary) => prevSummary.slice(0, summaryLength));
    }
  };

  return (
    <div>
      <DiningTree />
      <p>
        The call stack starts at Sam. As each person calls the next person
        following, the total number of minutes increases. The result represents
        how much time will have passed until your call with Lea is over, etc.{' '}
        <strong>
          Now, with the new feature, you can see the total call time for each
          friend, which represents the total time it will take for their call
          and all subsequent calls to finish.
        </strong>
      </p>

      <div className="button-container">
        <div className="stack-output">
          <div className="output-container">
            <div className="output-container-2">
              {/* {renderedItems
                .slice()
                .reverse()
                .map((friend, index) => (
                  <div key={index} className="output-divider output-divider-2">
                    <div className="profile-container">
                      <div>
                        <div className="friend-name">{friend.name}</div>
                        <div>{friend.minutes} min</div>
                      </div>
                      <div className="photo-name">
                        <img src={friend.imageUrl} alt={friend.name} />
                      </div>
                    </div>
                  </div>
                ))} */}
              {renderedItems
                .slice()
                .reverse()
                .map((friend, index) => (
                  <div key={index} className="output-divider output-divider-2">
                    <div className="profile-container">
                      <div>
                        <div className="friend-name">{friend.name}</div>
                        <div>{friend.minutes} min</div>
                      </div>
                      <div className="photo-name">
                        <img src={friend.imageUrl} alt={friend.name} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="output-box">
            {renderedItems
              .slice()
              .reverse()
              .map((friend, index) => (
                <div key={index}>
                  <div>{friend.callDescription()}</div>
                  {index === renderedItems.length - 1 && (
                    <div>Total Minutes: {totalMinutes}</div>
                  )}
                </div>
              ))}
            {callSummary.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
        {currentIndex < friends.length - 1 && (
          <button className="buttons" onClick={handlePrevious}>
            Previous
          </button>
        )}

        {currentIndex > 0 && (
          <button className="buttons" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default DiningUnderstand;
/*
So Lea’s call took 0 minutes.
May’s call took {friend[0].right.minutes} + 0 minutes.
Jane’s call took {friend[1].right.minutes} + {friend[0].right.minutes} + 0 minutes.
Ryan’s call took {friend[2].right.minutes} + {friend[1].right.minutes} + {friend[0].right.minutes} + 0 minutes.
Sam’s call took {friend[3].right.minutes} +
{friend[2].right.minutes} + {friend[1].right.minutes} + {friend[0].right.minutes} + 0 minutes.
Z = {friend[3].right.minutes} + {friend[2].right.minutes} + {friend[1].right.minutes} + {friend[0].right.minutes} + 0
Therefore, Sam’s call took Z minutes!
*/

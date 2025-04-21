import React, { useEffect, useRef, useState } from "react";

import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";
import person7 from "../assets/person7.jpg";

const BOX_WIDTH = 600;
const BOX_HEIGHT = 200;

const imageList = [person1, person2, person3, person4, person5, person6, person7,person1, person2, person3, person4,person5, person6, person7,];
const BALL_COUNT = imageList.length;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const generateBalls = () => {
  return imageList.map((imgurl, i) => ({
    id: i,
    imgurl,
    x: getRandom(40, BOX_WIDTH - 40),
    y: getRandom(40, BOX_HEIGHT - 40),
    vx: getRandom(-0.2, 0.2),
    vy: getRandom(-0.2, 0.2),
    radius: getRandom(25, 35),
  }));
};

const CollageBouncingBalls = () => {
  const [balls, setBalls] = useState(generateBalls);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      setBalls(prevBalls =>
        prevBalls.map(ball => {
          let { x, y, vx, vy, radius } = ball;

          x += vx;
          y += vy;

          // Wall collision
          if (x - radius < 0 || x + radius > BOX_WIDTH) vx *= -1;
          if (y - radius < 0 || y + radius > BOX_HEIGHT) vy *= -1;

          return { ...ball, x, y, vx, vy };
        })
      );

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="border border-white rounded-2xl bg-black relative overflow-hidden mx-auto"
      style={{ width: `${BOX_WIDTH}px`, height: `${BOX_HEIGHT}px` }}
    >
      {balls.map(ball => (
        <img
          key={ball.id}
          src={ball.imgurl}
          className="absolute rounded-full border-2 border-white object-cover"
          style={{
            width: `${ball.radius * 2}px`,
            height: `${ball.radius * 2}px`,
            left: `${ball.x - ball.radius}px`,
            top: `${ball.y - ball.radius}px`,
          }}
        />
      ))}
    </div>
  );
};

export default CollageBouncingBalls;

import React, { useState } from 'react';
import { tw, css } from 'twind/css';
import { useTrail, a, useSpring } from '@react-spring/web';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const trailsText = css`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: black;
  font-size: 6em;
  font-weight: 800;
  letter-spacing: -0.05em;
  will-change: transform, opacity;
  overflow: hidden;
`;

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <a.div key={index} className={tw(trailsText)} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const MainHeader = () => {
  const open = true;

  return (
    <Trail open={open}>
      <span>Your website,</span>
      <span>beyond </span>
      <span> expectations</span>
    </Trail>
  );
};

export default MainHeader;

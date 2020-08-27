import React from 'react';

const Topic = ({ topic, activeTopic, handleTopicChange }) => (
  <li>
    <button
      className={topic === activeTopic ? 'active' : 'not-active'}
      onClick={() => handleTopicChange(topic)}
    >
      {topic}
    </button>
  </li>
);

export default Topic;

import React from 'react';

const PageLayout = (props) => {
  return (
    <div>
      <h1 id="page-title">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default PageLayout;

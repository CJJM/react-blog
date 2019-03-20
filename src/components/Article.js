import React, { Component } from 'react';
import Paragraph from './Paragraph';

const Article = props => {
  return (
    <div class="article">
      <h2>Article Title</h2>

      <ul>
        {props.text.map(a => <Paragraph key={a.id} link={a.text} />)}
      </ul>
    </div>
  );
}

export default Article;

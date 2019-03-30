import React, { Fragment } from 'react';
import Paragraph from './Paragraph';

const Article = props => {
  return (
    <Fragment>
      <h2>Article Title</h2>

      <ul>
        {props.text.map(a => <Paragraph key={a.id} link={a.text} />)}
      </ul>
    </Fragment>
  );
}

export default Article;

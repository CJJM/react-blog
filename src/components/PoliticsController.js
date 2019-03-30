import React, { Component } from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

const paragraphs = [
  {title: "Article 1", id: 2001, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisi risus.  Proin sit amet quam lacinia, ultricies mi volutpat, tempus turpis. Cras pretium tellus" +
  "vel tellus pellentesque lobortis vitae vitae leo. Curabitur consequat pharetra neque, vitae faucibus diam rutrum vel. Aenean faucibus sed enim id facilisis. Ut sagittis mauris aliquam," +
  "egestas sem ac, tempus nulla. Vivamus tincidunt porta hendrerit. Aliquam dictum mollis sapien, vitae ultrices leo consectetur eu. Cras luctus ex vitae erat semper, at vehicula tellus iaculis." +
  "Nullam sollicitudin mi lobortis mauris facilisis feugiat. Duis tincidunt libero ut convallis tristique. Morbi suscipit rutrum blandit. Vestibulum vitae tortor magna. Nulla facilisi. Mauris malesuada," +
  "odio non facilisis dapibus, metus orci efficitur lectus, vel consectetur orci eros sed ligula. Integer et hendrerit magna."},
  {title: "Article 1", id: 2002, text: "In ac nunc mi. Donec convallis lacus vitae neque tincidunt commodo. Mauris et elit ligula. Curabitur sed auctor ligula. Donec mollis sollicitudin faucibus. Curabitur eget eros ipsum. Integer eu ultrices tortor."},
  {title: "Article 1", id: 2003, text: "Donec cursus dignissim turpis ac malesuada. Praesent sit amet elementum ex. Aenean eu leo mollis, feugiat ipsum vel, consequat enim. Aliquam in ultrices est, vel scelerisque dui." +
  "Cras quis consectetur urna. Sed elementum id risus sed interdum. Ut a metus at enim mattis euismod. Nunc tincidunt metus metus, vitae aliquam tellus venenatis consequat. Nulla sed aliquam libero." +
  "Maecenas urna nisi, tempor et congue nec, vulputate sed nunc. Donec condimentum enim lectus, et congue justo luctus non. Nulla tempor risus at aliquam mollis. Etiam ut consequat ligula."}
]

const linkNames = [
  {id: 1001, name: "The Decline of Shrek in the Age of Trump"},
  {id: 1002, name: "Millenials are the Root of All Evil"},
  {id: 1003, name: "How Now Brown Cow? The Movement"}
];

class PoliticsController extends Component {
  render () {
    return (
      <div class="articleController">

        <article>
          <Article text={paragraphs} />
        </article>

        <sidebar>
          <Sidebar linkNames={linkNames} />
        </sidebar>

      </div>
    )
  };
}

export default PoliticsController;

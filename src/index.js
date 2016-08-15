import React from 'react';
import ReactDom from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import styles from './app.css';
import CommentBox from './components/CommentBox.jsx';

const App = () => (
  <MuiThemeProvider MuiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBar title="coool stuff"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <CommentBox />
    </div>
  </MuiThemeProvider>
);
ReactDom.render(<App url="https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699" pollInterval={2000} />, document.getElementById('app'));

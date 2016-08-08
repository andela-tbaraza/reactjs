import React from 'react';
import ReactDom from 'react-dom';

import CommentBox from './components/CommentBox.jsx';

ReactDom.render(<CommentBox url="https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699" pollInterval={2000} />, document.getElementById('app'));

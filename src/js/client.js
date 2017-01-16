import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout'
import './vendor/vendor'
import '../css/client.css'

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);
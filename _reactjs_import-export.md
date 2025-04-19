

//-------------------------------------------------------//

—— include arbitrary code ——

import './bootstrap';

Includes a file without importing anything.

This will execute the target module without affecting the scope of the active module.

But it may have side-effects such as declaring globals or modifying existing globals.

https://stackoverflow.com/a/42252008/759452

//-------------------------------------------------------//

—— import/export for utility functions ——

// in utilities.js
export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}
export function generateId() {
  return 13423;
}

// in other file
import { getNewExpirationTime, generateId } from './utilities';

export default function App() {
	const expTime = getNewExpirationTime();
	const genId = getArbitratyId()
}

//-------------------------------------------------------//

—— import/export for utility functions——

// in CommentsData.js
export const commentsProduct = [
  {
    prodname: 'bike',
    comment: 'My favorite bike!'
  },
  {
    prodname: 'washing liquid',
    comment: 'Clean it up'
  },
  {
    username: 'BuryHeadInSand',
    comment: 'Wild ostriches make the best pets.'
  }
]
export const commentsProfile = [
  {
    profileImg: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    username: 'ChewToy',
    comment: 'I don\'t like cats at all.'
  },
  {
    profileImg: 'https://images.unsplash.com/photo-1563482776068-4dac10f9373d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    username: 'BuryHeadInSand',
    comment: 'Wild ostriches make the best pets.'
  }
]

// in other file
import {commentsProfile} from './CommentsData';

export default function App() {
	const firstProfile = commentsProfile[0];
}

//-------------------------------------------------------//

—— import/export for CSS——

// in TitleScreen.module.css
.btn {
  height: 45px;
  width: 110px;
}
.btn:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

// in App.js
import titlescreen from './styles/TitleScreen.module.css'

<button className={titlescreen.btn}>Play</button>

//-------------------------------------------------------//

—— default vs named exports ——

You can export a function component from a file using either default or named exports.

Import must then be done using the relevant technique — different whether default or named exports.

// default export
export default function Gallery() {}
// must use import syntax:
import Gallery from './Gallery';

// named export
export function Profile() {}
// must use import syntax:
import { Profile } from './Gallery';




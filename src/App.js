import React from 'react';
import logo from './logo.svg';
import './App.css';

import md5 from 'md5';

const SYMBOLS = 'qwertyuiopasdfghjklzxcvbnm1234567890';
const ELEMENTS = '■□▢▣▤▥▦▧▨▩■□▢▣▤▥▦▧▨▩■□▢▣▤▥▦▧▨▩▤▥▦▧▨▩';

interface IState {
  value: string;
  valueMD5: string;
  valueMD5: string;
}

class App extends React.Component<any, IState> {
  state = {
    value: '',
    valueMD5: '',
  };

  generateAvatar = (valueMD5 = '') => {
    const stringHash = md5(valueMD5);
    const hashIndex = 0;
    const avatar = '';
    const width = 8;
    // const height=6;
    const middleMode = Boolean(width % 2);
    const limit = Math.ceil(width / 2);

    this.setState(() => ({
      valueMD5: stringHash,
    }));

    console.log('middleMode=', middleMode);
    console.log('limit=', limit);
    // console.log(SYMBOLS);
    // console.log(ELEMENTS);
    // console.log(md5('textmessage'));
  };

  handleChange = (e: any) => {
    const { value } = e.target;

    this.setState(() => ({
      value,
    }));

    this.generateAvatar(value);
  };

  render() {
    const { value, valueMD5 } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{valueMD5}</p>
          <div>
            <input value={value} onChange={this.handleChange}></input>
          </div>

          <div />
        </header>
      </div>
    );
  }     
}

export default App;

// import hashlib
// import math
// SYMBOLS = 'qwertyuiopasdfghjklzxcvbnm1234567890'
// ELEMENTS = '■□▢▣▤▥▦▧▨▩■□▢▣▤▥▦▧▨▩■□▢▣▤▥▦▧▨▩▤▥▦▧▨▩'

// def genegate_avatar(source: str, width: int=3, height: int=3) -> str:
//     m = hashlib.md5()
//     m.update(str.encode(source))
//     s_hash = m.hexdigest()
//     hashIndex = 0
//     avatar = ''
//     middle_mode = bool(width % 2)
//     limit = math.ceil(width/2)

//     for indexH in range(height):
//         line = ''
//         for i in range(limit):
//             line += ELEMENTS[SYMBOLS.index(s_hash[hashIndex])]
//             hashIndex += 1
//             hashIndex = hashIndex if hashIndex < len(s_hash) else 0
//         cut_len = len(line)-1 if middle_mode else len(line)
//         line += line[:cut_len][::-1]
//         avatar += line + '\n'
//     return avatar

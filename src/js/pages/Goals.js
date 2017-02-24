import React from 'react';

import MenuAccordion from '../components/MenuAccordion';
import MenuItem from '../components/MenuItem';

export default class Goals extends React.Component {
  render() {
    const listStyle = {
      width: '100%',
      padding: '18px'
    }

    const itemStyle = {
      padding: 0
    }

    const divStyle = {
      padding: 0
    }

    return(
      <div>
        <div class="card-panel" style={divStyle}>
          <ul style={listStyle}>
            <li>
              <form>
                <input type="checkbox" value="test" />
              </form>
              <strong>Test Heading</strong>

            </li>
          </ul>
        </div>
      </div>
    );
  }
}

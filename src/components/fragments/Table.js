import React from 'react'
import Columns from './Columns';

function Table() {
  return (
    <div className="App">
      <table>
          <tbody>
              <tr>
                  <Columns/>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Table

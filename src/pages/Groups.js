import React from 'react';

const Groups = () => {
  return (
    <div className="Groups">
      < div >

        <div className="header_main">
          <div className="Desplit">DSplit</div>
        </div>
        <div className="bodygroup" >

          <div className="firstheadergroup" >
            Group 1
          </div>
          <br />
          <div className="firstheadergroup" >
            Group 2
          </div>
          <br />

          <div className="firstheadergroup" >
            Group 3
          </div>
          <br />

          <a className='button' href='/groups/create/'>Add a new group</a>

        </div>

      </div>
    </div >
  );
};


export default Groups;
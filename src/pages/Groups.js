import React from 'react';

const Groups = () => {
  return (
    <div className="Groups">
      < div >

        <div className="header_main">
          <div className="Desplit">DSplit</div>
        </div>
        <div className="bodygroup" >

          <h3 className="firstheadergroup" >
            Group 1
          </h3>
          <br />
          <h3 className="firstheadergroup" >
            Group 2
          </h3>
          <br />

          <h3 className="firstheadergroup" >
            Group 3
          </h3>
          <br />

          <a className='button' href='/groups/create/'>Add a new group</a>

        </div>

      </div>
    </div >
  );
};


export default Groups;
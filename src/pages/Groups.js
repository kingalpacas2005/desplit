import React from 'react';

const Groups = () => {
  return (
    <div className="Groups">
      < div >

        <div className="header_main">
          <div className="Desplit">DSplit</div>
        </div>
        <div className="bodygroup" >

          <details>
            <summary>
              <div className="firstheadergroup" >
                <p className="fhg" > Group 1</p>

              </div>
            </summary>


          </details>


          <details>
            <summary>
              <div className="firstheadergroup" >
                <p className="fhg" > Group 2</p>

              </div>
            </summary>


          </details>
          <a className='button' href='/groups/create/'>Add a new group</a>

        </div>





      </div>
    </div >
  );
};


export default Groups;
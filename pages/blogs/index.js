import React from 'react'

function index() {
  return (
    <div>
      <style jsx>
        {`
        h1{  
          text-align: center;
        }
        .blogs{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .blogItem{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px;
          margin: 10px;
          border: 5px solid;
        }
        
        `}
      </style>
      <h1>Blog Lists</h1>
      <br /><hr />
      <div className="blogs">
        <div className="blogItem">
          <h3>blog title</h3>
          <hr /> <br />
          <p>blog details</p>
        </div>

        <div className="blogItem">
          <h3>blog title</h3>
          <hr /><br />
          <p>blog details</p>
        </div>
      </div>
    </div>
  )
}

export default index
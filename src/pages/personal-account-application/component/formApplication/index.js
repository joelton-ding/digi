import React from 'react'

const FormApplicationPage = () => { 
  return (
    <div>
      <div>
        <input
          color="primary"
          accept="image/*"
          type="file"
   
          id="icon-button-file"
          style={{ display: 'none', }}
        />
        <label htmlFor="icon-button-file">
          <button
            variant="contained"
            component="span"
       
            size="large"
            color="primary"
          >
            <div  />
          </button>
        </label>
      </div>
    </div>
  )
} 

export default FormApplicationPage
import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [err, setErr] = useState(false);


  const onSubmit = evt => {
      evt.preventDefault();
      if (val) {
        if (err) {
          setErr(false);
        }
        return handleAdd(val);
      } else {
        setErr(true);
      }

  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit">Submit</button>
      {err && <h1>cannot be blank!</h1>}
    </form>
  
  );
}

export default Form;
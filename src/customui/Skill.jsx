import React from 'react'

const Skill = ({data}) => {
  return (
    <div>
        <style>
            {`
            
.skillbutton {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  position: relative;
  font-size: 17px;
  background: #333;
  border: none;
  color: #eb1607;
}

.skillbutton:hover {
  letter-spacing: 0.25em;
  background: #eb1607;
  color: #ede7e6;
  box-shadow: 0 0 45px #eb1607;
}

.skillbutton::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: #222222;
}

.skillbutton span {
  position: relative;
  z-index: 1;
}

.skillbutton i {
  position: absolute;
  inset: 0;
  display: block;
}

.skillbutton i::before {
  content: '';
  position: absolute;
  border: 2px solid #eb1607;
  width: 7px;
  height: 4px;
  top: -3.5px;
  left: 80%;
  background: #222222;
  transform: translateX(-50%);
  transition: 0.5s;
}

.skillbutton:hover i::before {
  width: 20px;
  left: 20%;
}

.skillbutton i::after {
  content: '';
  position: absolute;
  border: 2px solid #eb1607;
  width: 7px;
  height: 4px;
  bottom: -3.5px;
  left: 20%;
  background: #222222;
  transform: translateX(-50%);
  transition: 0.5s;
}

.skillbutton:hover i::after {
  width: 20px;
  left: 80%;
}`}
        </style>

       
<button className='skillbutton'>
    <span>{data}</span><i></i>
</button>

    </div>
  )
}

export default Skill
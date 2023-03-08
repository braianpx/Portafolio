import React from "react";
import Image from 'react-bootstrap/Image';

function SkillsBar({ skill, img }) {
  return (
    <div 
    className="mb-4"
    style={{ width: "95%", display:'flex', justifyContent:'center', alignItems:'center'}}>
      <p className="lead mb-1 mt-2 me-3 text-center text">{skill}</p>
          {img && 
          <div style={{width:'20%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Image
          height={'100%'}
          width={'100%'}
          style={{filter:'brightness(1.1)',mixBlendMode:'multiply'}}
          src={img}
          />      
          </div>
          }
    </div>
  );
}

export default SkillsBar;

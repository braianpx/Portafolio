import React from "react";
import Image from 'react-bootstrap/Image';

function SkillsBar({ skill, img }) {
  return (
    <div 
    className="mb-4"
    style={{ width: "95%", height:'15%', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <p className="lead mb-1 mt-2 me-3">{skill}</p>
          {img && 
          <div style={{width:'25%', height:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Image
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

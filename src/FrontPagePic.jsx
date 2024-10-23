import React from "react";
import styled from "styled-components";
import hannanImage from "./hannan.jpg";
const FrontPagePic = () => {
  return (
    <StyledWrapper>
      <div className="card md:w-[410px] w-[350px] ">
          <img
            className="md:w-[410px] w-[350px] p-2 z-10   object-cover"
            src={hannanImage}
            alt="404"
          />
        
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {

  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  
}



.card::before {
  content: '';
  position: absolute;
  width: 150px;
  background-image: linear-gradient(180deg, rgb(255, 0, 0), rgb(0, 0, 0));
  height: 130%;
  animation: rotBGimg 2s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #918989;
  ;
  inset: 5px;
  
}  


`;

export default FrontPagePic;;

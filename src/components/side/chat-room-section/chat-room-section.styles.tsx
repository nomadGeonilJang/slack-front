import styled from "styled-components";
import color from 'utils/style/color';
import { Modal } from 'react-bootstrap';

export const ChatRoomSectionContainer = styled.section`
header{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  text-transform:uppercase; 
}

.plus{
  cursor: pointer;
}

.rooms{
  font-size:1.1rem;
  padding-left:10px;
  li{
    border-radius:5px;
    padding:5px;
    cursor: pointer;
    &:hover{
      opacity:0.8;
    }
  }
  li.active{
    
    font-weight:bold;
    background-color:${color.yellow};
    color:${color.brown};
  }
  
  
}
`;

export const CreateModal = styled( Modal )`
label{
  margin-bottom:5px;
}
.cancel-btn{
  background:${color.pink};
  color:white;
}
.create-btn{
  background:${color.green};
  color:white;
}
`;
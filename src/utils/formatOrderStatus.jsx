import { IoEllipse } from "react-icons/io5"

function formatOrderStatus(status){
  let color = "";

  if (status === "Pendente") {
    color = "#AB222E";

  } else if (status === "Preparando") {
    color = "#FBA94C";
    
  } else {
    color = "#04D361";
  
  }

  return <IoEllipse style={{ color }} />

};

export default formatOrderStatus;
import React from "react";

const Attachment = ({type}:{type:string}) => {
  return (
    <div>
      <span className="bg-[#E8EDFF] w-16 h-16 rounded-md flex items-center justify-center text-primary">
        {type}
      </span>
    </div>
  );
};

export default Attachment;

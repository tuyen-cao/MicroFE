import React from "react";
import { mountRemoteComponent } from "@/utils/loadComponent";
import { useNavigate } from "react-router-dom";

const FromTheBlog = ({ eventBus }: any) => {
  const navigate = useNavigate();
  return (
    <div>
      {mountRemoteComponent({
        module: "blog",
        component: "PostList",
        props: {
          navigate,
          eventBus,
        },
      })}
    </div>
  );
};

export default FromTheBlog;

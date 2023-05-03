import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

export default function Modal(props: Props) {
  return (
    <>
      {props.isOpen && (
        <div
          className="absolute w-auto h-auto z-50  flex justify-center items-center"
          onClick={props.toggle}
        >
          <div
            className="block w-auto h-auto p-4 bg-slate-500 bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

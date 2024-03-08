type TButtonA = {
  onClick: () => void
};

export const ButtonA = ({ onClick }: TButtonA) => 
  <button onClick={onClick}>
    Click
  </button>
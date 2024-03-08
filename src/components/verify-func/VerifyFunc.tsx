type TVerifyFunc = {
  onClick1?: () => void
  onClick2?: (num: number) => void
};

export const VerifyFunc = ({ onClick1, onClick2 }: TVerifyFunc) => {
  return(
    <div>
      <button onClick={onClick1}>Click</button>
      <br />
      <button onClick={() => onClick2 ? onClick2 : () => null}>Click 2</button>
    </div>
  );
};
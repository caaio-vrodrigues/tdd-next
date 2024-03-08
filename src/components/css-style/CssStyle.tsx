
type TCssStyle = {
  bgColor: string
};

export const CssStyle = ({ bgColor }: TCssStyle) => 
  <main style={{ backgroundColor: `${bgColor}`}}>
    <h1>Hello World!</h1>
  </main>
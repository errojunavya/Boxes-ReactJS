const Box = (props) => {
  //  Write your code here.
  const { lassName, content } = props;
  return <p className={className}>{content}</p>;
};

const element = (
  //  Write your code here.
  <div>
    <div>
      <h1 className="heading"> Boxes </h1>
    </div>
    <div className="box-container">
      <Box className="box1" content="Small" />
      <Box className="box2" content="Medium" />
      <Box className="box3" content="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

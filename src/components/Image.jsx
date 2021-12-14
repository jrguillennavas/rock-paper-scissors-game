import "./Image.scss";
const Image = ({ className, click, id }) => {
  return (
    <div className="Container-hand" onClick={click}>
      <i className={className} id={id}></i>
      <p>{id}</p>
    </div>
  );
};
export default Image;

import "./PointBar.scss";
const PointBar = ({ name, points, className }) => {
  return (
    <p className={`Point__text`}>
      {name}: <span className={className}>{points}</span>
    </p>
  );
};
export default PointBar;

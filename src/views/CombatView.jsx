const CombatView = ({ selectPlayer, children }) => {
  if (selectPlayer) {
    return <>{children}</>;
  } else {
    return false;
  }
};
export default CombatView;

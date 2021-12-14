const SelectView = ({ isSelect, children }) => {
  if (!isSelect) {
    return <>{children}</>;
  } else {
    return false;
  }
};
export default SelectView;

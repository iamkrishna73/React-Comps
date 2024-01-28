import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  console.log(navigate);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return <a onClick={handleClick}> {children}</a>;
}

export default Link;

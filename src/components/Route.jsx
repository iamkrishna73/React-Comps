import useNavigaton from '../hooks/use-navigation';

function Route({ path, children }) {
  const { currentPath } = useNavigaton();
  console.log(children);
  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;

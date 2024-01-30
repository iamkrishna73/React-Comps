import useNavigaton from '../hooks/use-navigation';

function Route({ path, children }) {
  const { currentPath } = useNavigaton();
  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;

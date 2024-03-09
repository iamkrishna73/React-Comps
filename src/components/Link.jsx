import classNames from 'classnames';
import useNavigaton from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigaton();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metakey || event.ctrlkey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;

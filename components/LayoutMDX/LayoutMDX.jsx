import Nav from '../navbar/Nav';
import style from './Layout.module.css';

function LayoutMDX({ children }) {
  return (
    <div>
      <Nav />
      <div className={style.container} suppressHydrationWarning={true}>
        {children}
      </div>
    </div>
  );
}

export default LayoutMDX;

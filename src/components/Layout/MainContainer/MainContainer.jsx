import { classNames } from '../../../utils/helpers/classNames';
import { RoutePageHistory } from '../../UI/routePageHistory/RoutePageHistory';

export const MainContainer = ({ routes, children, ...props }) => {
  return (
    <main className={classNames('container', 'main', props.className ? props.className : '')}>
      <RoutePageHistory routes={routes} />
      {children}
    </main>
  );
};

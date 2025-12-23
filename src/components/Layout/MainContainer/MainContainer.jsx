import { RoutePageHistory } from '../../UI/routePageHistory/RoutePageHistory';

export const MainContainer = ({ routes, children }) => {
  return (
    <main className='container main'>
      <RoutePageHistory routes={routes} />
      {children}
    </main>
  );
};

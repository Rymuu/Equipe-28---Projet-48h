import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const Index = () => {

  return (
    <div className="page__admin">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: 'Dashboard',
            itemId: '/dashboard',
            // you can use your own custom Icon component as well
            // icon is optional,
          },
          {
            title: 'Management',
            itemId: '/management',
            subNav: [
              {
                title: 'Projects',
                itemId: '/management/projects',
              },
              {
                title: 'Members',
                itemId: '/management/members',
              },
            ],
          },
          {
            title: 'Another Item',
            itemId: '/another',
            subNav: [
              {
                title: 'Teams',
                itemId: '/management/teams',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Index;
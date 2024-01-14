import {Button} from '@/components/ui/button';
import {Tabs, TabsContent} from '@/components/ui/tabs';
import AnimatedTabList, {ITab} from './animated-tab-list';

interface ITabWithComponent extends ITab {
  component: React.ReactNode;
}

const tabs: ITabWithComponent[] = [
  {
    name: 'Overview',
    value: 'overview',
    component: <Button>Overview</Button>
  },
  {
    name: 'Account',
    value: 'account',
    component: <Button>Account</Button>
  }
];
export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px] space-y-4">
      <AnimatedTabList tabs={tabs} />
      <div className="border rounded p-8 w-full min-h-[300px] flex items-center justify-center">
        {' '}
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.component}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

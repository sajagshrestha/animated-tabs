import {TabsList, TabsTrigger} from '@/components/ui/tabs';

export interface ITab {
  name: string;
  value: string;
}

interface IProps {
  tabs: ITab[];
}
const AnimatedTabList: React.FC<IProps> = ({tabs}) => {
  return (
    <TabsList className="py-2 border-b w-full relative">
      {tabs.map((tab) => (
        <TabsTrigger key={tab.value} value={tab.value}>
          {tab.name}
        </TabsTrigger>
      ))}
      <span className='w-[95px] h-[3px] rounded-lg bg-slate-100 absolute bottom-0 left-0'></span>
    </TabsList>
  );
};

export default AnimatedTabList;

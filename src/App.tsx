import {ThemeProvider} from '@/components/theme-provider';
import Navbar from '@/components/app/navbar';
import { TabsDemo } from '@/components/app/tabs-demo';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="container flex items-center justify-center min-h-[80vh]">
        <TabsDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;

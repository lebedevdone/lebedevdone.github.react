import MainLayout from './components/layout/Main';
import Banner from './screens/banner';
import Production from './screens/production';
function App() {
  return (
    <MainLayout>
      <Banner/>
      <Production/>
    </MainLayout>
  );
}

export default App;

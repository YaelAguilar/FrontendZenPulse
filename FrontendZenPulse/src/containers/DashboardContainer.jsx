// containers/DashboardContainer.jsx
import Sidebar from '../Components/molecules/Sidebar';
import Header from '../Components/atoms/Header';
import ChartsViewer from '../Components/molecules/ChartsViewer';

function DashboardContainer() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="basis-[100%] ">
        <div>
          <Header />
        </div>
        <div>
          <ChartsViewer />
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;

import './App.css';
// import { FileStructure, LogMouse } from './components/practice/logmouseposition/LogMouse';
// import TitleUpdate from './components/customHooks/hook1/titleUpdate';
// import Counter from './components/customHooks/hook2/Counter';
// import UseApiData from './components/customHooks/hook4/index';
// import UserForm from './components/HOC/userForm';
// import UserForm from "./components/customHooks/hook3/userForm";
// import Counter from "./components/Counter";
// import ParentComp from "./components/useCallBack/ParentComp";
// import Counter from "./components/useMemo/Counter";
// import FocusInput from './components/useRef/FocusInput';
// import Timer from './components/useRef/Timer';
// import CreateFoldersAndFileStructure from './components/Problems/CreateFolderStructure';
// import folderDataJson from './components/Problems/CreateFolderStructure/data.json';
import Comp1 from './components/practice/logmouseposition/Comp1';

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      {/* <ParentComp /> */}
      {/* <FocusInput /> */}
      {/* <Timer /> */}
      {/* <TitleUpdate /> */}
      {/* <Counter /> */}
      {/* <UserForm /> */}
      {/* <UserForm initialValue="lav" /> */}
      {/* <UseApiData /> */}
      {/* <CreateFoldersAndFileStructure folderData={folderDataJson} /> */}
      {/* <LogMouse initialX={100} initialY={-100} /> */}
      {/* <FileStructure folderData={folderDataJson} /> */}
      <Comp1 initialValue="FuckOff" />
    </div>
  );
}

export default App;

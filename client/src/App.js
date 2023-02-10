import { Routes, Route } from 'react-router-dom'
import DashBoard from './DashBoard';
import EditArticle from './KnowledgeBase/EditArticle';
import Inventory from './Inventory';
import KnowlageBase from './KnowledgeBase/KnowlageBase';
import Navbar from './Navbar';
import NewKnowlageBase from './KnowledgeBase/NewKnowlageBase';
import OneArticle from './KnowledgeBase/OneArticle';

//Knowledge Base

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/KnowledgeBase' element={<KnowlageBase />} />
          <Route path='/KnowledgeBase/new' element={<NewKnowlageBase />} />
          <Route path='/KnowledgeBase/:id' element={<OneArticle />} />
          <Route path='/KnowledgeBase/:id/edit' element={<EditArticle />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

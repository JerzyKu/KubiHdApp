import { Routes, Route, Navigate } from 'react-router-dom'
import DashBoard from './DashBoard';
import EditArticle from './KnowledgeBase/EditArticle';
import Inventory from './Inventory/Inventory';
import KnowlageBase from './KnowledgeBase/KnowlageBase';
import Navbar from './Navbar';
import NewKnowlageBase from './KnowledgeBase/NewKnowlageBase';
import OneArticle from './KnowledgeBase/OneArticle';
import NewItem from './Inventory/NewItem';
import OneInventory from './Inventory/OneInventory';
import AllUsers from './users/AllUsers';
import CreateUser from './users/CreateUser';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import EditPostForm from './features/posts/EditPostForm';

//Knowledge Base

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/inventory/new' element={<NewItem/>} />
          <Route path='/inventory/:id' element={<OneInventory/>} />
          <Route path='/users' element={<AllUsers/>} />
          <Route path='/users/new' element={<CreateUser/>} />
          <Route path='/KnowledgeBase' element={<KnowlageBase />} />
          <Route path='/KnowledgeBase/new' element={<NewKnowlageBase />} />
          <Route path='/KnowledgeBase/:id' element={<OneArticle />} />
          <Route path='/KnowledgeBase/:id/edit' element={<EditArticle />} />

          <Route path='Blog' element={<Layout/>}>
            <Route index element={<PostsList />} />
            <Route path='post' >
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>
          </Route>

          {/* Catch all */}
          <Route path='*' element={<Navigate to='/' replace/>} />

        </Routes>
      </main>
    </>
  );
}

export default App;

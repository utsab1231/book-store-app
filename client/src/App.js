import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import AddBook from "./pages/AddBook";
import DeleteBook from "./pages/Delete";
import UpdateBook from "./pages/Update";
import Description from "./pages/Description";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/books" element={<Book />}></Route>
        <Route exact path="/description/:id" element={<Description />}></Route>
        <Route exact path="/addbooks" element={<AddBook />}></Route>
        <Route exact path="/updatebook/:id" element={<UpdateBook />}></Route>
        <Route exact path="/deletebook/:id" element={<DeleteBook />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

export default App;

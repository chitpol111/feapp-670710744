import { MemoryRouter, Routes, Route, useInRouterContext, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Home from './page/Home';
import Movies from './page/Movies';
import MovieDetail from './page/MovieDetail';

function About() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 text-center">
        <h1 className="text-3xl font-bold text-slate-800">เกี่ยวกับเรา</h1>
        <p className="mt-4 text-slate-600">
          MovieHub เป็นเว็บไซต์เพื่อรวบรวมหนังที่น่าสนใจและเป็นแหล่งเรียนรู้ด้านการพัฒนา Front-End
          สำหรับนักศึกษาคณะเทคโนโลยีสารสนเทศและการสื่อสาร
        </p>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const content = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      {/* :id คือตัวแปร — /movies/1, /movies/2, /movies/999 เข้า Route นี้หมด */}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  if (!useInRouterContext()) {
    return <MemoryRouter>{content}</MemoryRouter>;
  }

  return content;
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-6 py-10 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">404</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-800">ไม่พบหน้า</h1>
          <p className="mt-4 text-slate-600">URL ที่คุณเรียกเข้ามาไม่มีในระบบ</p>
          <Link to="/" className="mt-6 inline-block rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white">
            กลับหน้าแรก
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
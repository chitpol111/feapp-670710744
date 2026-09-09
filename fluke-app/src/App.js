import { MemoryRouter, Routes, Route, useInRouterContext, Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
  { id: 2, title: 'Your Name', genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite', genre: 'Thriller', year: 2019 },
];

const teamMembers = [
  { name: 'อชิตพล หวานจะโปะ', major: 'IT' },
  { name: 'สุจิรา พลอยสำลี', major: 'IT' },
  { name: 'วรเมธ บุญใหญ่', major: 'IT' },
];

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((item) => String(item.id) === String(id));

  if (!movie) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Navbar />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800">ไม่พบหนังเรื่องนี้</h1>
          <p className="mt-4 text-slate-600">ID ที่คุณเรียกคือ: {id}</p>
          <Link to="/movies" className="mt-6 inline-block rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white">
            กลับไปหน้า Movies
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <Link to="/movies" className="mb-6 inline-block text-sm font-medium text-cyan-600">
          ← กลับไปหนังทั้งหมด
        </Link>
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Movie ID: {movie.id}</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-800">{movie.title}</h1>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{movie.genre}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">ปี {movie.year}</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            หนังเรื่องนี้เป็นตัวอย่างการใช้ dynamic route ใน React Router โดยค่า {id} จะถูกจับจาก URL
            และแสดงผลในหน้า MovieDetail ได้แบบอัตโนมัติ
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          ดูหนังดี ๆ ไปด้วยกัน
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
        </p>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-slate-800">{movie.title}</h3>
              <p className="mt-1 text-sm text-slate-500">ปี {movie.year}</p>
              <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                {movie.genre}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">สมาชิกกลุ่มของเรา</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                <p className="mt-2 text-sm text-slate-600">สาขา: {member.major}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 p-6">
          <Button>บันทึก</Button>
          <Button variant="danger">ลบ</Button>
          <Button variant="ghost">ยกเลิก</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Movies() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">หนังทั้งหมด</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`} className="block rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h2 className="text-lg font-bold text-slate-800">{movie.title}</h2>
              <p className="mt-2 text-sm text-slate-500">ประเภท: {movie.genre}</p>
              <p className="mt-1 text-sm text-slate-500">ปี: {movie.year}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
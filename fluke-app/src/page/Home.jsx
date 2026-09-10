import { movies } from '../data/data';
import MovieCard from '../components/MovieCard';
import MovieGallery from '../components/MovieGallery';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 p-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
        <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

        <h2 className="mt-8 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="grid grid-cols-1 gap-6">
            {movies.slice(0, 3).map((movie) => (
              <MovieCard key={movie.id} title={movie.title} year={movie.year} />
            ))}
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
        <div className="mx-auto mt-8 max-w-5xl">
          <MovieGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

import { Link } from 'react-router-dom';
import { movies } from '../data/data';
import SearchBox from '../components/SearchBox';
import Navbar from '../components/Navbar';
import Footer from '../Footer';
import { useState } from 'react';
import GenreBox from '../components/GenreBox';


const GENRES = [...new Set(movies.map(m => m.genre))];  // สร้าง array ของ genre ที่ไม่ซ้ำกัน
function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  const q = query.trim().toLowerCase();
  const shown = movies.filter(m =>
    m.title.toLowerCase().split(' ').some(word => word.startsWith(q)) && (genre === 'all' || m.genre === genre)
  )

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">หนังทั้งหมด</h1>
        <SearchBox query={query} onQueryChange={setQuery} />
        <GenreBox genre={genre} onGenreChange={setGenre} genres = {GENRES}/>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((movie) => (
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

export default Movies;
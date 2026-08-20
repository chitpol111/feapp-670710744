import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <MovieList />

      <Card title="ประกาศ">
        <p>
          สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b>
        </p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>

      <Footer />
    </div>
  );
}

export default App;
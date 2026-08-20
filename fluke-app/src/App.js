import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  {
    id: 1,
    name: 'อชิตพล หวานจะโปะ',
    nickname: 'ฟลุ๊ค',
    major: 'IT',
    favorites: ['เล่นเกม', 'ดูหนัง'],
  },
  {
    id: 2,
    name: 'สุจิรา พลอยสำลี',
    nickname: 'เฟิร์ส',
    major: 'IT',
    favorites: [ 'ฟังเพลง', 'ทานชา'],
  },
  {
    id: 3,
    name: 'วรเมธ บุญใหญ่',
    nickname: 'แทน',
    major: 'IT',
    favorites: ['เล่นเกม', 'อาหารอร่อย'],
  },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
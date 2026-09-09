const teamMembers = [
  { name: 'อชิตพล หวานจะโปะ', major: 'IT' },
  { name: 'สุจิรา พลอยสำลี', major: 'IT' },
  { name: 'วรเมธ บุญใหญ่', major: 'IT' },
];

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">สมาชิกกลุ่มของเรา</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-bold text-slate-800">{member.name}</h2>
            <p className="mt-2 text-sm text-slate-600">สาขา: {member.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
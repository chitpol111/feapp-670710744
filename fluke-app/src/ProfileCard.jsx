function ProfileCard({ member }) {
  if (!member) return <div>ไม่มีข้อมูล</div>;

  const { name, nickname, major = 'ยังไม่ระบุสาขา', favorites = [] } = member;

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h3 className="font-bold text-slate-800">
        {name} ({nickname})
      </h3>
      <p className="text-sm text-slate-600">สาขา: {major}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {favorites.map((item, index) => (
          <li key={index} className="inline-block rounded-full bg-cyan-100 px-2 py-1 text-xs text-cyan-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
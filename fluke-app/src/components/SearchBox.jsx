function SearchBox({ query, onQueryChange }) {
  return (
    <div className="space-y-2 p-4">
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="ค้นหาหนัง..."
        className="rounded-lg border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <p className="text-sm text-slate-500">กำลังค้นหา: <strong>{query || '...'}</strong></p>
    </div>
  );
}

export default SearchBox;
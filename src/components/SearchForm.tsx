interface SearchFormProps {
  searchTerm: string;
  handleSearchTermChange: (arg: string) => void;
  filterBy: string;
  handleFilterByChange: (arg: string) => void;
}

export function SearchForm({
  searchTerm,
  filterBy,
  handleSearchTermChange,
  handleFilterByChange,
}: SearchFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <h3 className="font-medium mb-4">Find My Media</h3>
      <form
        className="flex gap-4 justify-between items-center"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-800 group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="shadow-xs focus:outline-hidden w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(event) => handleSearchTermChange(event.target.value)}
          />
        </div>
        <div>
          <label>
            Filter by:{" "}
            <select
              value={filterBy}
              onChange={(event) => handleFilterByChange(event.target.value)}
            >
              <option value="all">All</option>
              <option value="movie">Movie</option>
              <option value="book">Book</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

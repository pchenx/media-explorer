import { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { Provider } from "./context/media";
import { MediaSection } from "./components/MediaSection";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <main className="flex flex-col mx-4 border rounded-2xl items-stretch justify-items-start ">
      <h1 className="p-4 border-b-1">Media Explorer</h1>
      <div className="p-4 border-b-1">
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTermChange={setSearchTerm}
          filterBy={filterBy}
          handleFilterByChange={setFilterBy}
        />
      </div>
      <div className="p-4">
        <Provider>
          <MediaSection searchTerm={searchTerm} filterBy={filterBy} />
        </Provider>
      </div>
    </main>
  );
}

export default App;

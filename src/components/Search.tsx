import search from "../assets/search.svg";

export function Search({ setValue }: { setValue: (term: string) => void }) {
  return (
    <div className="w-[17.5rem] flex items-center rounded-xl my-3 mx4 px-4 py-2 bg-secondary">
      <img src={search} alt="Search Icon" className="w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Search for products"
        className="flex-grow outline-none text-primary"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

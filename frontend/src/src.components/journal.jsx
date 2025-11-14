import { useState } from "react";


export default function Journal() {
const [entry, setEntry] = useState("");


return (
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-2xl font-semibold mb-4">Micro Journal</h2>


<textarea
className="w-full p-3 border rounded-xl"
placeholder="Write your thoughts..."
value={entry}
onChange={(e) => setEntry(e.target.value)}
/>


<button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl">
Save Entry
</button>
</div>
);
}
export default function MindfulnessModules() {
const modules = [
{ id: 1, title: "Breathing Reset", duration: "2 min" },
{ id: 2, title: "Grounding Exercise", duration: "3 min" },
{ id: 3, title: "Body Scan", duration: "5 min" },
];


return (
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-2xl font-semibold mb-4">Mindfulness Modules</h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{modules.map((m) => (
<div key={m.id} className="p-4 bg-indigo-50 rounded-xl">
<h3 className="text-lg font-bold">{m.title}</h3>
<p className="text-sm text-gray-600">{m.duration}</p>
<button className="mt-3 px-3 py-1 bg-indigo-600 text-white rounded-lg">
Play
</button>
</div>
))}
</div>
</div>
);
}
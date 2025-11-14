export default function SafetyPanel() {
return (
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-2xl font-semibold mb-4">Safety & Support</h2>


<button className="px-4 py-2 bg-red-500 text-white rounded-xl mr-4">
Report User
</button>


<button className="px-4 py-2 bg-green-600 text-white rounded-xl">
Request Human Mentor
</button>
</div>
);
}
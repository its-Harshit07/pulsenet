import { useState } from "react";


export default function SupportCircles() {
const [circles] = useState([
{ id: 1, name: "Stress Relief Room" },
{ id: 2, name: "Anxiety Support" },
{ id: 3, name: "Motivation Circle" },
]);


const joinCircle = (name) => {
alert(`Joining ${name}...`);
// TODO: Add socket.io or WebRTC later
};


return (
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-2xl font-semibold mb-4">Virtual Support Circles</h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{circles.map((c) => (
<div key={c.id} className="p-4 bg-indigo-50 rounded-xl">
<h3 className="text-lg font-semibold">{c.name}</h3>
<button
onClick={() => joinCircle(c.name)}
className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded-lg"
>
Join
</button>
</div>
))}
</div>
</div>
);
}
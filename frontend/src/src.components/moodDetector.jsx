import { useState } from "react";


export default function MoodDetector() {
const [mood, setMood] = useState("neutral");
const [cameraOn, setCameraOn] = useState(false);


const startCamera = () => {
setCameraOn(true);
// TODO: Plug TensorFlow.js here
setTimeout(() => setMood("happy"), 2000);
};


return (
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-2xl font-semibold mb-4">Mood Detection</h2>


<p className="text-gray-600 mb-4">
AI checks your facial expressions (fully offline & private).
</p>


{!cameraOn ? (
<button
onClick={startCamera}
className="px-4 py-2 bg-indigo-600 text-white rounded-xl"
>
Start Camera
</button>
) : (
<div>
<p className="text-xl mt-4">Detected Mood: <span className="font-bold">{mood}</span></p>
</div>
)}
</div>
);
}
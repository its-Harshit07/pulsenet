import MoodDetector from "./components/MoodDetector";
import MindfulnessModules from "./components/MindfulnessModules";
import SupportCircles from "./components/SupportCircles";
import SafetyPanel from "./components/SafetyPanel";
import Journal from "./components/Journal";


export default function App() {
return (
<div className="w-full min-h-screen p-6 space-y-10">
<h1 className="text-4xl font-bold text-center text-indigo-600">PulseNet — Mental Resilience Hub</h1>


<MoodDetector />
<MindfulnessModules />
<Journal />
<SupportCircles />
<SafetyPanel />
</div>
);
}
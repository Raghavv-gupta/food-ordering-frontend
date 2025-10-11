import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-white text-center p-6">
      <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">
        Welcome to Your Project 🚀
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Build and customize your next amazing idea with React, Tailwind, and ShadCN UI. 
        Start coding your dream project now!
      </p>

      <div className="flex gap-4">
        <Button onClick={() => alert("Let's Build!")}>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};

export default Index;

import { Suspense } from "react";
export default function HomePage() {
  return (
    <div className="container">
      <div className="bg-white shadow p-3 h-20 flex-row-center ">Header</div>
        <Suspense fallback={<p>Loading posts...</p>}>

        </Suspense>
    </div>
  );
}


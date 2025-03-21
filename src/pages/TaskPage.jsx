import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)} //retorna pra página anterior
            className="text-white absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Details
          </h1>
        </div>
        <div className="space-y-4 p-6 bg-violet-500 rounded-md shadow flex flex-col">
          <h2 className="text-3xl text-white text-center font-bold">{title}</h2>
          <p className="text-white bg-violet-400 rounded-md shadow flex justify-center text-center py-[25px] px-[50px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

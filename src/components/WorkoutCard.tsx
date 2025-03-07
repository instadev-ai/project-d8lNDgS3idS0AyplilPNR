
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell } from "lucide-react";

interface WorkoutCardProps {
  date: string;
  name: string;
  duration: string;
  exercises?: string;
}

const WorkoutCard = ({ date, name, duration, exercises }: WorkoutCardProps) => {
  return (
    <div className="p-4 bg-gray-50 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-purple-600" />
          <h4 className="font-medium">{name}</h4>
        </div>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      {exercises && <p className="text-sm">{exercises}</p>}
    </div>
  );
};

export default WorkoutCard;

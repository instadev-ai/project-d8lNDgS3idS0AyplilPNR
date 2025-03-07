
import { Trophy } from "lucide-react";

interface PersonalRecordProps {
  exercise: string;
  weight: string;
  date: string;
  previous?: string;
  improvement?: string;
}

const PersonalRecordCard = ({ exercise, weight, date, previous, improvement }: PersonalRecordProps) => {
  return (
    <div className="p-3 bg-gray-50 rounded-md">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-medium">{exercise}</h4>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <div className="flex items-center justify-between">
        {previous ? (
          <p className="text-sm text-gray-500">{previous} → {weight}</p>
        ) : (
          <p className="text-sm text-gray-500">Current best</p>
        )}
        <div className="flex items-center gap-1">
          <Trophy className="h-4 w-4 text-yellow-500" />
          {improvement ? (
            <span className="text-sm font-medium text-green-600">{improvement}</span>
          ) : (
            <span className="font-medium">{weight}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalRecordCard;

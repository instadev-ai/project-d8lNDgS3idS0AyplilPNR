
import { LineChart } from "lucide-react";

interface ChartPlaceholderProps {
  height?: string;
  message?: string;
}

const ChartPlaceholder = ({ 
  height = "h-80", 
  message = "Chart will appear here" 
}: ChartPlaceholderProps) => {
  return (
    <div className={`${height} flex items-center justify-center bg-gray-50 rounded-md border border-dashed border-gray-300`}>
      <div className="text-center">
        <LineChart className="h-12 w-12 mx-auto text-gray-400 mb-2" />
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default ChartPlaceholder;

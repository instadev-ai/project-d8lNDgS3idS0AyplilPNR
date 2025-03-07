
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const StatsCard = ({ title, value, icon: Icon, color }: StatsCardProps) => {
  return (
    <Card>
      <CardContent className="p-6 flex items-center gap-4">
        <div className={`h-12 w-12 rounded-full bg-${color}-100 flex items-center justify-center`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;

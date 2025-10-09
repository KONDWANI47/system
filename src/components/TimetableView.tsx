import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimeSlot } from "@/data/schoolData";

interface TimetableViewProps {
  timetable: TimeSlot[];
}

const TimetableView = ({ timetable }: TimetableViewProps) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Timetable</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left text-sm font-semibold">Time</th>
                {days.map((day) => (
                  <th key={day} className="p-3 text-left text-sm font-semibold">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((slot, index) => (
                <tr key={index} className="border-b transition-colors hover:bg-muted/30">
                  <td className="p-3 text-sm font-medium text-muted-foreground">
                    {slot.time}
                  </td>
                  <td className="p-3">
                    <span className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
                      slot.monday === "Break" 
                        ? "bg-warning/10 text-warning" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {slot.monday}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
                      slot.tuesday === "Break" 
                        ? "bg-warning/10 text-warning" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {slot.tuesday}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
                      slot.wednesday === "Break" 
                        ? "bg-warning/10 text-warning" 
                        : "bg-success/10 text-success"
                    }`}>
                      {slot.wednesday}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
                      slot.thursday === "Break" 
                        ? "bg-warning/10 text-warning" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {slot.thursday}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
                      slot.friday === "Break" 
                        ? "bg-warning/10 text-warning" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {slot.friday}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimetableView;

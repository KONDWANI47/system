import { useParams, Navigate } from "react-router-dom";
import { Users, UserCheck, BookOpen, User } from "lucide-react";
import StatCard from "@/components/StatCard";
import TimetableView from "@/components/TimetableView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { schoolData } from "@/data/schoolData";

const ClassDetail = () => {
  const { classId } = useParams();
  const classData = schoolData.find((c) => c.id === classId);

  if (!classData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{classData.name}</h1>
        <p className="mt-2 text-muted-foreground">Complete class information and timetable</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={classData.totalStudents}
          icon={Users}
          color="primary"
        />
        <StatCard
          title="Male Students"
          value={classData.maleStudents}
          icon={User}
          color="accent"
        />
        <StatCard
          title="Female Students"
          value={classData.femaleStudents}
          icon={User}
          color="success"
        />
        <StatCard
          title="Teachers"
          value={classData.teachers.length}
          icon={UserCheck}
          color="warning"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Teaching Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classData.teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{teacher.name}</h4>
                    <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {classData.subjects.map((subject) => (
                <div
                  key={subject.code}
                  className="flex items-center gap-2 rounded-lg border bg-card p-3 transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">{subject.name}</span>
                    <Badge variant="secondary" className="mt-1 w-fit text-xs">
                      {subject.code}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <TimetableView timetable={classData.timetable} />
    </div>
  );
};

export default ClassDetail;

import { Users, GraduationCap, BookOpen, UserCheck } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { schoolData } from "@/data/schoolData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const totalStudents = schoolData.reduce((sum, cls) => sum + cls.totalStudents, 0);
  const totalMale = schoolData.reduce((sum, cls) => sum + cls.maleStudents, 0);
  const totalFemale = schoolData.reduce((sum, cls) => sum + cls.femaleStudents, 0);
  const totalTeachers = schoolData.reduce((sum, cls) => sum + cls.teachers.length, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">UCD School Management System</h1>
        <p className="mt-2 text-muted-foreground">Standards 1-4 Overview</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          color="primary"
        />
        <StatCard
          title="Male Students"
          value={totalMale}
          icon={Users}
          color="accent"
        />
        <StatCard
          title="Female Students"
          value={totalFemale}
          icon={Users}
          color="success"
        />
        <StatCard
          title="Total Teachers"
          value={totalTeachers}
          icon={UserCheck}
          color="warning"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {schoolData.map((classData) => (
          <Card key={classData.id} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{classData.name}</CardTitle>
                </div>
                <Link to={`/class/${classData.id}`}>
                  <Button variant="outline" size="sm">View Details</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{classData.totalStudents}</p>
                    <p className="text-xs text-muted-foreground">Total Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{classData.maleStudents}</p>
                    <p className="text-xs text-muted-foreground">Male</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-success">{classData.femaleStudents}</p>
                    <p className="text-xs text-muted-foreground">Female</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserCheck className="h-4 w-4" />
                    <span>{classData.teachers.length} Teachers</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{classData.subjects.length} Subjects</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

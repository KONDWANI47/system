import { UserCheck, Users, GraduationCap, Mail, Phone } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { schoolData } from "@/data/schoolData";

const Teachers = () => {
  // Aggregate all teachers with their class information
  const allTeachers = schoolData.flatMap((classData) =>
    classData.teachers.map((teacher) => ({
      ...teacher,
      className: classData.name,
      classId: classData.id,
      standard: classData.standard,
    }))
  );

  const totalTeachers = allTeachers.length;
  const uniqueTeachers = new Set(allTeachers.map(t => t.id)).size;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Teachers & Staff</h1>
        <p className="mt-2 text-muted-foreground">Complete teaching staff directory</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Staff"
          value={totalTeachers}
          icon={UserCheck}
          color="primary"
        />
        <StatCard
          title="Unique Teachers"
          value={uniqueTeachers}
          icon={Users}
          color="accent"
        />
        <StatCard
          title="Classes Covered"
          value={schoolData.length}
          icon={GraduationCap}
          color="success"
        />
        <StatCard
          title="Avg per Class"
          value={(totalTeachers / schoolData.length).toFixed(1)}
          icon={UserCheck}
          color="warning"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Teaching Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allTeachers.map((teacher, index) => (
              <Card key={`${teacher.id}-${index}`} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserCheck className="h-7 w-7" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{teacher.name}</h3>
                        <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <GraduationCap className="h-3 w-3" />
                          {teacher.className}
                        </Badge>
                      </div>

                      <div className="space-y-2 border-t pt-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          <span>{teacher.name.toLowerCase().replace(/\s+/g, '.')}@ucd.edu</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          <span>+1 (555) {Math.floor(Math.random() * 900 + 100)}-{Math.floor(Math.random() * 9000 + 1000)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Staff by Class Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Staff Distribution by Class</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {schoolData.map((classData) => (
              <div
                key={classData.id}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{classData.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {classData.teachers.length} Teaching Staff
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {classData.teachers.map((teacher) => (
                    <div
                      key={teacher.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-medium">{teacher.name}</span>
                      <span className="text-muted-foreground">- {teacher.subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Teachers;

export interface Subject {
  name: string;
  code: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  photo?: string;
}

export interface TimeSlot {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export interface ClassData {
  id: string;
  name: string;
  standard: number;
  totalStudents: number;
  maleStudents: number;
  femaleStudents: number;
  teachers: Teacher[];
  subjects: Subject[];
  timetable: TimeSlot[];
}

export const schoolData: ClassData[] = [
  {
    id: "std-1",
    name: "Standard 1",
    standard: 1,
    totalStudents: 45,
    maleStudents: 23,
    femaleStudents: 22,
    teachers: [
      { id: "t1", name: "Mrs. Sarah Johnson", subject: "Class Teacher & English" },
      { id: "t2", name: "Mr. David Chen", subject: "Mathematics" },
      { id: "t3", name: "Ms. Priya Patel", subject: "Science" },
    ],
    subjects: [
      { name: "English", code: "ENG101" },
      { name: "Mathematics", code: "MTH101" },
      { name: "Science", code: "SCI101" },
      { name: "Social Studies", code: "SOC101" },
      { name: "Art & Craft", code: "ART101" },
      { name: "Physical Education", code: "PE101" },
    ],
    timetable: [
      { time: "08:00 - 09:00", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "English", friday: "Mathematics" },
      { time: "09:00 - 10:00", monday: "Mathematics", tuesday: "English", wednesday: "Social Studies", thursday: "Science", friday: "English" },
      { time: "10:00 - 10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "10:30 - 11:30", monday: "Science", tuesday: "Social Studies", wednesday: "English", thursday: "Mathematics", friday: "Art & Craft" },
      { time: "11:30 - 12:30", monday: "Social Studies", tuesday: "Science", wednesday: "Mathematics", thursday: "Art & Craft", friday: "PE" },
    ],
  },
  {
    id: "std-2",
    name: "Standard 2",
    standard: 2,
    totalStudents: 48,
    maleStudents: 25,
    femaleStudents: 23,
    teachers: [
      { id: "t4", name: "Mrs. Emily Brown", subject: "Class Teacher & English" },
      { id: "t5", name: "Mr. Robert Taylor", subject: "Mathematics" },
      { id: "t6", name: "Ms. Lisa Anderson", subject: "Science" },
    ],
    subjects: [
      { name: "English", code: "ENG201" },
      { name: "Mathematics", code: "MTH201" },
      { name: "Science", code: "SCI201" },
      { name: "Social Studies", code: "SOC201" },
      { name: "Computer Basics", code: "COM201" },
      { name: "Physical Education", code: "PE201" },
    ],
    timetable: [
      { time: "08:00 - 09:00", monday: "Mathematics", tuesday: "English", wednesday: "Science", thursday: "Mathematics", friday: "English" },
      { time: "09:00 - 10:00", monday: "English", tuesday: "Mathematics", wednesday: "Social Studies", thursday: "Computer", friday: "Science" },
      { time: "10:00 - 10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "10:30 - 11:30", monday: "Science", tuesday: "Social Studies", wednesday: "English", thursday: "Science", friday: "Mathematics" },
      { time: "11:30 - 12:30", monday: "Social Studies", tuesday: "Science", wednesday: "Mathematics", thursday: "English", friday: "PE" },
    ],
  },
  {
    id: "std-3",
    name: "Standard 3",
    standard: 3,
    totalStudents: 42,
    maleStudents: 21,
    femaleStudents: 21,
    teachers: [
      { id: "t7", name: "Mr. James Wilson", subject: "Class Teacher & Mathematics" },
      { id: "t8", name: "Ms. Maria Garcia", subject: "English" },
      { id: "t9", name: "Dr. Kumar Singh", subject: "Science" },
    ],
    subjects: [
      { name: "English", code: "ENG301" },
      { name: "Mathematics", code: "MTH301" },
      { name: "Science", code: "SCI301" },
      { name: "Social Studies", code: "SOC301" },
      { name: "Computer Science", code: "COM301" },
      { name: "Environmental Studies", code: "ENV301" },
    ],
    timetable: [
      { time: "08:00 - 09:00", monday: "Mathematics", tuesday: "Science", wednesday: "English", thursday: "Mathematics", friday: "Science" },
      { time: "09:00 - 10:00", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "English", friday: "Social Studies" },
      { time: "10:00 - 10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "10:30 - 11:30", monday: "Science", tuesday: "English", wednesday: "Mathematics", thursday: "Computer", friday: "English" },
      { time: "11:30 - 12:30", monday: "Social Studies", tuesday: "Social Studies", wednesday: "Environmental", thursday: "Science", friday: "Mathematics" },
    ],
  },
  {
    id: "std-4",
    name: "Standard 4",
    standard: 4,
    totalStudents: 40,
    maleStudents: 20,
    femaleStudents: 20,
    teachers: [
      { id: "t10", name: "Mrs. Jennifer White", subject: "Class Teacher & English" },
      { id: "t11", name: "Mr. Michael Lee", subject: "Mathematics" },
      { id: "t12", name: "Ms. Rachel Green", subject: "Science" },
    ],
    subjects: [
      { name: "English", code: "ENG401" },
      { name: "Mathematics", code: "MTH401" },
      { name: "Science", code: "SCI401" },
      { name: "Social Studies", code: "SOC401" },
      { name: "Computer Science", code: "COM401" },
      { name: "General Knowledge", code: "GK401" },
    ],
    timetable: [
      { time: "08:00 - 09:00", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "English", friday: "Mathematics" },
      { time: "09:00 - 10:00", monday: "Mathematics", tuesday: "English", wednesday: "Social Studies", thursday: "Science", friday: "Computer" },
      { time: "10:00 - 10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "10:30 - 11:30", monday: "Science", tuesday: "Social Studies", wednesday: "Mathematics", thursday: "Mathematics", friday: "English" },
      { time: "11:30 - 12:30", monday: "Computer", tuesday: "Science", wednesday: "English", thursday: "GK", friday: "Science" },
    ],
  },
];

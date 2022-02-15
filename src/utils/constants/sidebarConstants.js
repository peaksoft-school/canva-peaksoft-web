import { ReactComponent as CoursesIcon } from '../../assets/icons/courses.svg'
import { ReactComponent as GroupsIcon } from '../../assets/icons/groups.svg'
import { ReactComponent as StudentsIcon } from '../../assets/icons/students.svg'
import { ReactComponent as TeachersIcon } from '../../assets/icons/teachers.svg'
import { ReactComponent as MyCoursesIcon } from '../../assets/icons/mycoursesIcon.svg'

export const ADMIN_PAGE_SIDEBAR = [
   { title: 'Группы', route: 'groups', icon: <GroupsIcon /> },
   { title: 'Курсы', route: 'courses', icon: <CoursesIcon /> },
   { title: 'Учителя', route: 'teachers', icon: <TeachersIcon /> },
   { title: 'Студенты', route: 'students', icon: <StudentsIcon /> },
]

export const INSTRUCTOR_PAGE_SIDEBAR = [
   { title: 'Мои курсы', route: 'my-courses', icon: <MyCoursesIcon /> },
]

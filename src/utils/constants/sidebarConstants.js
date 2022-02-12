import { ReactComponent as Courses } from '../../assets/icons/courses.svg'
import { ReactComponent as Groups } from '../../assets/icons/groups.svg'
import { ReactComponent as Students } from '../../assets/icons/students.svg'
import { ReactComponent as Teachers } from '../../assets/icons/teachers.svg'
import { ReactComponent as MyCoursesIcon } from '../../assets/icons/mycoursesIcon.svg'

export const ADMIN_PAGE_SIDEBAR = [
   { title: 'Группы', route: 'groups', icon: <Groups /> },
   { title: 'Курсы', route: 'courses', icon: <Courses /> },
   { title: 'Учителя', route: 'teachers', icon: <Teachers /> },
   { title: 'Студенты', route: 'students', icon: <Students /> },
]

export const INSTRUCTOR_PAGE_SIDEBAR = [
   { title: 'Мои курсы', route: 'my-courses', icon: <MyCoursesIcon /> },
]

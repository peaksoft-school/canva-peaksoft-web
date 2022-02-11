import courses from '../../assets/icons/courses.svg'
import groups from '../../assets/icons/groups.svg'
import students from '../../assets/icons/students.svg'
import teachers from '../../assets/icons/teachers.svg'
import myCoursesIcon from '../../assets/icons/mycoursesIcon.svg'

export const ADMIN_PAGE_SIDEBAR = [
   { title: 'Группы', route: 'groups', icon: groups },
   { title: 'Курсы', route: 'courses', icon: courses },
   { title: 'Учителя', route: 'teachers', icon: teachers },
   { title: 'Студенты', route: 'students', icon: students },
]

export const INSTRUCTOR_PAGE_SIDEBAR = [
   { title: 'Мои курсы', route: 'my-courses', icon: myCoursesIcon },
]

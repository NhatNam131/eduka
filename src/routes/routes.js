import HomePage from '~/pages/Home';
import AboutPage from '~/pages/About';
import BlogPage from '~/pages/Blog';
import BlogDetailPage from '~/pages/BlogDetail';
import ContactPage from '~/pages/Contact';
import CoursesPage from '~/pages/Courses';
import CourseDetailPage from '~/pages/CourseDetail';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import { HeroLayout } from '~/layouts';

// Public routes
const publicRoutes = [
    { path: '/', component: HomePage, layout: HeroLayout },
    { path: '/about', component: AboutPage },
    { path: '/blog', component: BlogPage },
    { path: '/blog-detail', component: BlogDetailPage },
    { path: '/contact', component: ContactPage },
    { path: '/courses', component: CoursesPage },
    { path: '/courses-detail', component: CourseDetailPage },
    { path: '/signin', component: SignIn, layout: null },
    { path: '/signup', component: SignUp, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

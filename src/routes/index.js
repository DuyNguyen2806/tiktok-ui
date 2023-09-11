import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profie from '~/Pages/Profie';
import Upload from '~/Pages/Upload';

const publicRoutes = [
    { path: '/', componet: Home },
    { path: '/following', componet: Following },
    { path: '/profie', componet: Profie },
    { path: '/upload', componet: Upload, layout: null },
];
export { publicRoutes };

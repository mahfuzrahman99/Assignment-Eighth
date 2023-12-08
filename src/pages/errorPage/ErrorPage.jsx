
import ErrorIcon from '../../assets/404.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-8 md:mt-24'>
            <div className='w-2/3 md:w-1/4 text-center space-y-3'>
            <img src={ErrorIcon} alt="" />
            <p className='text-2xl font-semibold'>Page Is Not Found</p>
            <Link to={'/'}>
                <button className='md:btn rounded-md btn-sm mt-1 md:mt-4 bg-gray-500'>Back To Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
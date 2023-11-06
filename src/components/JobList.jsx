import PropTypes from 'prop-types';

const JobList = ({ jobData }) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'></div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Title
            </th>
            <th scope='col' className='px-6 py-3'>
              Country
            </th>
            <th scope='col' className='px-6 py-3'>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job) => (
            <tr
              key={job.link}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
            >
              <td className='w-4 p-4'>
                <div className='flex items-center'></div>
              </td>
              <th
                scope='row'
                className='flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white'
              >
                {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                <div className='pl-3'>
                  <div className='text-base font-semibold'>{job.title}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{job.country}</td>

              <td className='px-6 py-4'>
                <a
                  href={job.link}
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Browse Job
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

JobList.propTypes = {
  jobData: PropTypes.any,
};
export default JobList;

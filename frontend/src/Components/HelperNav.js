import React from 'react';
import CustomBreadcrumbs from './Breadcrumbs';
import Help from './Help';

const HelperNav = ({ links, current, helpPath }) => {
    return (
        <div className='helper-nav'>
            <CustomBreadcrumbs links={links} current={current} />
            {helpPath ? <Help to={helpPath} /> : null}
        </div>
    );
};

export default HelperNav;
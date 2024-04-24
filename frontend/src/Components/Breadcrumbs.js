import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


const StyledBreadcrumb = styled(Breadcrumbs)(() => ({
  textDecoration: 'none',
  color: 'var(--text-color)',
}));

function CustomBreadcrumbs({ links, current }) {

  return (
    <StyledBreadcrumb aria-label="breadcrumb">
      {links.map((link) => (
        <Link key={link.href} to={link.href}>
          <Typography color="var(--text-color-dark)">{link.text}</Typography>
        </Link>
      ))}
      <Typography>{current}</Typography>
    </StyledBreadcrumb>
  );
}

export default CustomBreadcrumbs;
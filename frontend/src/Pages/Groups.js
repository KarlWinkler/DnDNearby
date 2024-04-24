import * as React from 'react';
import Frost from '../Art/Frost.jpeg';
import Hero from '../Art/Hero.jpeg';
import angels from '../Art/angels.jpeg';
import cool from '../Art/cool.jpeg';
import Archer from '../Art/Archer.jpeg';
import magic from '../Art/magic.jpeg';
import Woodland from '../Art/Woodland.jpeg';
import Fantasy from '../Art/Fantasy.jpeg';
import Filter from '../Art/Filter.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import downchevron from '../Art/down-chevron.png';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OptionsSelectSection from '../Components/OptionsSelectSection';
import CustomBreadcrumbs from '../Components/Breadcrumbs';
import { CardActionArea} from '@mui/material';
import { Collapse } from '@mui/material';
import { useState } from 'react'; 
import { Link } from "react-router-dom";
import HelperNav from '../Components/HelperNav';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';


const Badge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#262D34', 
  borderRadius: '10px', 
  padding: theme.spacing(0.5, 1),
  color: 'white',
  fontWeight: 'bold',
  marginRight: theme.spacing(1),
}));




const GroupCard = ({ group, onToggleExpand, isExpanded,  }) => {
  const [joinStatus, setJoinStatus] = useState('default');


  const handleJoinClick = () => {
    setJoinStatus(joinStatus === 'default' ? 'pending' : 'default');
  };
  
  const handleClick = () => {
    onToggleExpand(group.id);
  };

  const determineStatus = (size) => {
    const [current, total] = size.split('/').map(Number);
    return current === total ? 'Full' : 'Join';
};
  const status = determineStatus(group.size);
  const isFull = status === 'Full';



  return (
    <Card sx={{
      marginBottom: 2,
      overflow: 'hidden',
      transition: '0.3s',
      '&:hover': { boxShadow: '0 6px 12px rgba(0,0,0,0.3)' }
    }}>
      <CardActionArea onClick={handleClick} sx={{ 
      position: 'relative', 
      height: 200, 
      backgroundImage: `url(${group.backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
    }}>
      <Box sx={{
        position: 'absolute', 
        top: 16, 
        right: 16, 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center', 
      }}>
        <Badge>
          Ex LVL: {group.experienceLevel}
        </Badge>
        <Badge>
          Size: {group.size}
        </Badge>
        <Badge>
          Status: {status}
        </Badge>
        <Badge>
          Edition: {group.edition}
        </Badge>
        <Badge>
          Type: {group.campaignType}
        </Badge>
      </Box>
      <CardContent sx={{
        width: '100%', 
        color: 'white', 
        padding: 2, 
        ml: '30px',
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {group.groupName}
        </Typography>
      </CardContent>
      <img src={downchevron} alt="Expand" style={{
         position: 'absolute',
         bottom: 'var(--spacing-2)', 
         right: 'var(--spacing-2)', 
         width: '30px', 
         height: '30px', 
         filter: 'invert(100%)' 
        }} />
      </CardActionArea>
      <Collapse in={isExpanded === group.id} timeout="auto" unmountOnExit>
        <CardContent sx={{ bgcolor: 'var(--primary-color)', '&:last-child': { paddingBottom: '16px' }}}> 
          <Typography color="var(--text-color)">Owner: {group.owner}</Typography>
          <Typography color="var(--text-color)" mb={3}>Created: {group.created}</Typography>
          <Typography color="var(--text-color)" mb={2}>Description: {group.description}</Typography>
          <Link
            className={`button ${joinStatus === 'pending' ? 'button-pending' : ''} ${isFull || joinStatus === 'joined' ? 'button-disabled' : 'button-join '}`}
            onClick={handleJoinClick}
            disabled={isFull || joinStatus === 'pending'}
          >
            {isFull ? 'Full' : joinStatus === 'pending' ? 'Pending Approval' : 'Join'}
          </Link>
        </CardContent>
      </Collapse>
    </Card>
  );
};



export default function Groups() {
  const [rows, setRows] = useState([

      { 
        id: 1, 
        groupName: "We the North", 
        owner: 'Karl Winkler', 
        created: 'December 11th 2024', 
        size: '5 / 6', 
        edition: '3.5e', 
        group_Size: "medium",
        backgroundImage: Frost,
        description: 'Hailing from the frostbitten realms of the Icewind Dale, this band of adventurers prides itself on braving the harshest climates to uncover ancient secrets frozen in time.', 
        experienceLevel: "Intermediate", 
        campaignType: "Combat" ,
      },
    
      { 
        id: 2, 
        groupName: "Goats Are Us",
        owner: 'Victor Campos', 
        created: 'Ocotber 10th 2010', 
        size: '6 / 7', 
        group_Size: "medium",
        edition: '5e',
        backgroundImage: Hero, 
        description: "A quirky crew known for their mountainous exploits and affinity for caprine companions, they navigate treacherous peaks with the surefootedness of the goats they befriend.", 
        experienceLevel: "Intermediate", 
        campaignType: "Mixed" ,    
      },
    
      { 
        id: 3, 
        groupName: "Group 3 the Best Team", 
        owner: 'Braden Benner', 
        created: 'September 9th 2009', 
        size: '8 / 8', 
        group_Size: "large",
        edition: '3.5e',
        backgroundImage: angels,
        description: "With a camaraderie as legendary as their collective skill, this elite assembly of heroes is renowned across lands for completing quests with unparalleled teamwork and strategy.", 
        experienceLevel: "Beginner", 
        campaignType: "Mixed" ,    
      },
    
      { 
        id: 4, 
        groupName: "Victors People", 
        owner: 'Thamanina Chowdury', 
        created: 'April 3rd 2004', 
        size: '6 / 10', 
        group_Size: "large",
        edition: '5e',
        backgroundImage: cool,
        description: " Bound by the leadership of the charismatic Victor, this diverse group unites under one cause—victory over darkness and a steadfast pursuit of justice in a world rife with chaos.", 
        experienceLevel: "Expert", 
        campaignType: "Combat" ,
    
     
      },
    
      { 
        id: 5, 
        groupName: "DM the only role", 
        owner: 'Lebron James', 
        created: 'January 2nd 2009', 
        size: '4 / 4', 
        group_Size: "small",
        edition: '1e',
        backgroundImage: Fantasy, 
        description: "This circle of dedicated Dungeon Masters specializes in crafting the most intricate and immersive campaigns, where every twist of fate is more unpredictable than the last.", 
        experienceLevel: "Beginner", 
        campaignType: "Roleplay" ,    
      },
    
      { 
        id: 6, 
        groupName: "United Druids", 
        owner: 'Cristiano Ronaldo', 
        created: 'June 6th 2001', 
        size: '2 / 3', 
        group_Size: "small",
        edition: '1e',
        backgroundImage: Woodland,
        description: "As protectors of the natural order, the United Druids convene from various groves to channel their ancient magics and preserve the balance of the wilds.",  
        experienceLevel: "Expert", 
        campaignType: "Roleplay" ,    
      },
    
      { 
        id: 7, 
        groupName: "Spell Casters", 
        owner: 'Todd Howard', 
        created: 'May 18th 2013', 
        size: '11 / 11', 
        group_Size: "large",
        edition: '5e',
        backgroundImage: magic,
        description: "Masters of the arcane, this society of mages and sorcerers delves into the fabric of magic to wield spells capable of bending reality to their collective will.", 
        experienceLevel: "Beginner", 
        campaignType: "Mixed" ,
      },
    
      { 
        id: 8, 
        groupName: "Hell-Divers", 
        owner: 'Elon Musk', 
        created: 'August 209th 2029', 
        size: '3 / 7', 
        group_Size: "medium",
        edition: '3.5e',
        backgroundImage: Archer,
        description: "Fearless to a fault, the Hell-Divers descend into the deepest abysses to confront demonic forces, often returning with tales that tread the line between epic and infernal.",  
        experienceLevel: "Intermediate", 
        campaignType: "Combat" ,
      }
    ]
  );

  const [expandedId, setExpandedId] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    edition: '',
    experienceLevel: '',
    size: '',
    campaignType: '',
    status: ''
  });

  const handleFindFilters = (newFilters) => {
    if (Object.values(newFilters).every(value => value === '')) {
      setAppliedFilters({});
    } else {
      setAppliedFilters(newFilters);
    }
    console.log("filters", newFilters);
  };


  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
      setRows(savedGroups);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);


  const addNewGroup = (newGroup) => {
    const updatedRows = [...rows, newGroup];
    setRows(updatedRows);
    localStorage.setItem('groups', JSON.stringify(updatedRows));
  };


  const [appliedFilters, setAppliedFilters] = useState(filters);
  const filteredRows = rows.filter(row => {
    const matchesEdition = !appliedFilters.edition || row.edition === appliedFilters.edition;
    const matchesExperienceLevel = !appliedFilters.experienceLevel || row.experienceLevel.toLowerCase() === appliedFilters.experienceLevel.toLowerCase();
    const matchesSize = !appliedFilters.size || row.group_Size === appliedFilters.size;
    const matchesCampaignType = !appliedFilters.campaignType || row.campaignType.toLowerCase() === appliedFilters.campaignType.toLowerCase();
    const matchesStatus = !appliedFilters.status || (row.size.split('/')[0] === row.size.split('/')[1]) === (appliedFilters.status === 'full');
  
    return matchesEdition && matchesExperienceLevel && matchesSize && matchesCampaignType && matchesStatus;
  });


  return (
    <div>
      <HelperNav links={[{href: '/', text: 'Home'}]} current='Groups' helpPath='/learn/finding-a-group' />
      <Typography component="h1" variant="h4" gutterBottom>
        Find A Group
      </Typography>  
      {filterVisible && (<OptionsSelectSection onFilterChange={handleFindFilters} />)}   
      <Box className='links' sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 2 }}>
        <Link className='button button-filter' onClick={toggleFilterVisibility}>
          <img src={Filter} alt="Filter" style={{ marginRight: 8, width: 20, height: 20, filter: 'invert(100%)' }} />
          Filter
        </Link>
        <Link className='button button-add' to="/create-group">+ Create Group</Link>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2} direction="column">
        {filteredRows.map((row) => (
            <Grid item key={row.id} xs={12}>
              <GroupCard
                group={row}
                onToggleExpand={handleToggleExpand}
                isExpanded={expandedId}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
    
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        textAlign: 'center',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        // transition: theme.transitions.create('width'),
        width: '100%',
        // ? Template code for stretch animation to left - Potential use for smaller SearchBox
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //     width: '20ch',
        //     },
        // },
        // ? -------->
    },
}));

function SearchBar ({ search, setSearch }) {

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                fullWidth
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                type="text"
                name="search-bar"
                value={search}
                onChange={handleChange}
            />
        </Search>
    )
}

export default SearchBar;
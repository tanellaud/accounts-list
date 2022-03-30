import './account.styles.scss';
import Header from '../../components/header/header.component';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';

interface AccountPageProps {
    users: any;
}


export const AccountPage = ({ users }: AccountPageProps) => {
    return(
        <div className='account-container'>
            <Header />
            <div className='account-box'>
                <div className='account-box__tools'>
                    <div className='selected-users__nr'>
                        0 users selected
                    </div>
                    <div className='buttons-container'>
                        <Button variant="outlined" startIcon={<EditIcon />}>
                            Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </div>
                </div>
                <div className='account__users-list'>
                {
                   (users && users.length) ? 
                   users.map((user:any) => (
                        
                    <div className='users-list__item' key={user.id}>
                        <div className='users-list__checkbox-container'>
                            <FormGroup>
                                <Checkbox />
                            </FormGroup>
                        </div>
                        <div className='users-list__avatar-container'>
                            <img className="users-list__avatar-image" src={user.avatar} alt={user.name} />
                        </div>
                        <div className='users-list__name-container'>
                            <div className='users-list__name'>{user.name}</div>
                            <div className='users-list__email'>{user.email}</div>
                        </div>
                        <div className="users-list__role-container">
                            <span className={`users-list__role users-list__role--${user.role.toLowerCase()}`}>{user.role}</span>
                        </div>
                        <div className='users-list__buttons-container'>
                            <Button variant="outlined" startIcon={<EditIcon />}>
                                Edit
                            </Button>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>    
                
                )) : null
                }
                </div>
            </div>
        </div>
    )
}


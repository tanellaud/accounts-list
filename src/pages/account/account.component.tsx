import './account.styles.scss';
import Header from '../../components/header/header.component';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../../components/custom-button/custom-button.component';

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
                        <CustomButton variant="edit" buttonLabel="Edit" />
                        <CustomButton variant='delete' buttonLabel="Delete" />
                    </div>
                </div>
                <div className='account__users-list'>
                {
                   (users && users.length) ? 
                   users.map((user:any) => (
                        
                    <div className='users-list__item' key={user.id}>
                        <div className='users-list__checkbox-container'>
                            <Checkbox id={user.id} />
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
                            <CustomButton variant="edit" buttonLabel="Edit" />
                            <CustomButton variant='delete-icon-only' />
                        </div>
                    </div>    
                
                )) : null
                }
                </div>
            </div>
        </div>
    )
}


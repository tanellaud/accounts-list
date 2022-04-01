import { useState, useEffect, ChangeEvent } from 'react';
import LazyLoad from 'react-lazyload';
import './account.styles.scss';
import Header from '../../components/header/header.component';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../../components/custom-button/custom-button.component';

interface AccountPageProps {
    
}

export const AccountPage = () => {
    const [users, setUsers] = useState(null || []);
    const [searchField, setSearchField] = useState('');
    const [filteredUsers, setFilterUsers] = useState(users);

    useEffect(()=>{
        const getData = async () => {
            await fetch('./users.json'
            ,{
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((usersJson) => {
               const modifiedUsersData = Object.values(usersJson.users).map((user:any) => ({...user, selected: false }));
                setUsers(modifiedUsersData)
            });
        };

         getData()
    },[]);

    useEffect(() => {
        const newFilteredUsers = users.filter((user:any) => {
          return user.name.toLocaleLowerCase().includes(searchField);
        });
        console.log(newFilteredUsers)
        setFilterUsers(newFilteredUsers);
      }, [users, searchField]);
    
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();

        setSearchField(searchFieldString);
    };

    return(
        <div className='account-container'>
            <Header onChangeHandler={onSearchChange} />
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
                   (filteredUsers && filteredUsers.length) ? 
                   filteredUsers.map((user, index: number ) => (
                    <LazyLoad>
                    <div className="users-list__item" key={index}>
                        <div className='users-list__checkbox-container'>
                            <Checkbox value={user.id} onChange={(e, user) => (
                                console.log(e, user)
                                //!user.selected ? true : false
                        )} />
                            
                        </div>
                        <div className='users-list__avatar-container'>
                            <img className="users-list__avatar-image" src={user.avatar} alt={user.name} />
                        </div>
                        <div className='users-list__name-container'>
                            <div className='users-list__name'>{user.name}</div>
                            <div className='users-list__email'>{user.email}</div>
                        </div>
                        <div className="users-list__role-container">
                            <span className={`users-list__role users-list__role--${user.role.toLocaleLowerCase()}`}>{user.role}</span>
                        </div>
                        <div className='users-list__buttons-container'>
                            <CustomButton variant="edit" buttonLabel="Edit" />
                            <CustomButton variant='delete-icon-only' />
                        </div>
                    </div>  
                    </LazyLoad>  
                
                )) : null
                }
                </div>
            </div>
        </div>
    )
}


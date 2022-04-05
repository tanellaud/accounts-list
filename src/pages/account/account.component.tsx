import { useState, useEffect, ChangeEvent } from 'react';
import './account.styles.scss';
import Header from '../../components/header/header.component';
import ListComp from '../../components/list/list.component';
import CustomButton from '../../components/custom-button/custom-button.component';

export const AccountPage = () => {
    const [users, setUsers] = useState(null || []);
    const [searchField, setSearchField] = useState('');
    const [filteredUsers, setFilterUsers] = useState(users);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedUserCount, setselectedUserCount] = useState(0);

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

    useEffect(() => {
         getData()
    },[]);

    useEffect(() => {
        const newFilteredUsers = users.filter((user:any) => {
          return user.name.toLocaleLowerCase().includes(searchField);
        });

        setFilterUsers(newFilteredUsers);
      }, [users, searchField]);
    
     
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();

        setSearchField(searchFieldString);
    };
    
    const handleChange = (id: any, event:ChangeEvent<HTMLInputElement>): void => {
        const user = users.find(user => user.id === id);
        
        user.selected = !user.selected ? true : false;

        countSelectedUsers()
        setSelectedUsers(user)
    };
    
    const handleSelectAll = (e:ChangeEvent<HTMLInputElement>) => {
        const allSelectedUsers = users.map((user) => {
            user.selected = !e.target.checked ? false : true;
        });

        countSelectedUsers()
        setSelectedUsers(allSelectedUsers)
    };

    const sortByPermission = (): void => {
        const sortedUsers = users.sort((a:any, b:any) => a.role.toLowerCase().localeCompare(b.role.toLowerCase()));

        setFilterUsers(sortedUsers);
    }
    
    const countSelectedUsers = () => {
        const itemCount = users.filter((user:any) => {
            return user.selected
        })

        setselectedUserCount(itemCount.length)
    };
    return(
        <div className='account-container'>
            <Header onChangeHandler={onSearchChange} />

            <div className='account-box'>
                <div className='account-box__tools'>
                    <div className='selected-users__nr'>
                        {selectedUserCount} users selected
                    </div>
                    <div className='buttons-container'>
                        <CustomButton variant="edit" buttonLabel="Edit" />
                        <CustomButton variant='delete' buttonLabel="Delete" />
                    </div>
                </div>
                
                <ListComp users={filteredUsers} 
                    handleChange={handleChange}
                    handleSelectAll={handleSelectAll}
                    sortByPermission={() => sortByPermission()} />
            </div>
        </div>
    )
}


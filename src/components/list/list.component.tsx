import { FixedSizeList as List } from 'react-window';
import ListItem from '../list-item/list-item.component';
import Checkbox from '@mui/material/Checkbox';
import './list.styles.scss';

type ListCompProps = {
    users: any,
    style?: any,
    handleChange: Function,
    handleSelectAll: Function,
    sortByPermission: Function
};

const ListComp = ({ users, style, handleChange, handleSelectAll, sortByPermission }: ListCompProps) => {
   return (
    <div className='account__users-list'>
            <div className='account__users-list-tools'>
                <div className='users-list__checkbox-container'>
                    <Checkbox value="all" onChange={(e) => handleSelectAll(e)} />
                </div>
                <div className='users-list__name-container'>
                    User
                </div>
                <div className='users-list__sort' onClick={() => sortByPermission()}>
                    Permissions
                </div>
            </div>
            <List
                itemData={users}
                itemCount={users.length}
                itemSize={64}
                height={700}
                width={790}
                style={style}
            >
                {({data, index, style }) => {
                    return (
                        <ListItem style={style} key={index} handleChange={handleChange} {...data[index]} />
                    );
                }}
            </List>
      </div>
    )
}

export default ListComp;
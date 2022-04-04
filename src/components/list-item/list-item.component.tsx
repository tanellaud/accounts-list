import Checkbox from '@mui/material/Checkbox';
import './list-item.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

type ListItemProps = {
    id?: number,
    name?: string,
    email?: string,
    avatar?: string,
    role?: string,
    style?: any,
    selected: boolean,
    handleChange: Function,
    index?: number,
};

const ListItem = ({ id, name, email, avatar, role, style, selected, handleChange, index }: ListItemProps) => {

    return(
        <div className={`${selected ? 'users-list__item--selected' : ''} users-list__item`} key={id} style={style}>
            <div className='users-list__checkbox-container'>
                <Checkbox value={selected} checked={selected ? true : false} onChange={(e) => handleChange(id, e)} />
            </div>

            <div className='users-list__avatar-container'>
                <img className="users-list__avatar-image" src={avatar} alt={name} />
            </div>
            <div className='users-list__name-container'>
                <div className='users-list__name'>{name}</div>
                <div className='users-list__email'>{email}</div>
            </div>
            <div className="users-list__role-container">
                <span className={`users-list__role users-list__role--${role.toLocaleLowerCase()}`}>{role}</span>
            </div>
            <div className='users-list__buttons-container'>
                <CustomButton variant="edit" buttonLabel="Edit" />
                <CustomButton variant='delete-icon-only' />
            </div>
        </div>
    )
}

export default ListItem;
// src/components/UserCard.tsx
import React from 'react';
import './card.css'; // Importamos los estilos específicos del componente

interface UserCardProps {
    name: string;
    email: string;
    avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, avatarUrl }) => {
    return (
        <div className="user-card">
            <img src={avatarUrl} alt={`${name}'s avatar`} className="user-card__avatar" />
            <div className="user-card__info">
                <h2 className="user-card__name">{name}</h2>
                <p className="user-card__email">{email}</p>
            </div>
        </div>
    );
};

export default UserCard;

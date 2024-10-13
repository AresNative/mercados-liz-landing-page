import './card.css';

interface UserCardProps {
    name: string;
    email: string;
    avatarUrl: string;
}
export function UserCard({ name, email, avatarUrl }: UserCardProps) {
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

export function OffertCard({ avatarUrl }: UserCardProps) {
    return (
        <div className="offert-card">
            <img src={avatarUrl}  className="offert-card__avatar" />
            
        </div>


    );
};
export function HistoryCard({ avatarUrl }: UserCardProps) {
    return (
        <div className="histo-card">
            <img src={avatarUrl} className="histo-card__avatar" />

        </div>


    );
};
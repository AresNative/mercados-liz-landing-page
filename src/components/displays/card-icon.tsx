import style from './card-icon.module.css';
interface UserCardProps {
    children?: React.ReactNode;
    text: string;
    title: string;
}
export function IconCard({ children, text, title }: UserCardProps) {
    return (
        <div className={style["icon-card"]}>
            {children}
            <div className={style["icon-card__info"]}>
                <h2 className={style["icon-card__title"]}>{title}</h2>
                <p className={style["icon-card__text"]}>{text}</p>
            </div>
        </div>
    );
};
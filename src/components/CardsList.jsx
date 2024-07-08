import TeamCard from "./TeamCard";
import styles from '../styles/CardsList.module.css'
function CardsList({ teams }) {
    return (
        <div className={styles.list}>
            {teams.map((team, index) => (
                <TeamCard key={index} name={team.name} members={team.members} />
            ))}
        </div>
    );
}

export default CardsList;

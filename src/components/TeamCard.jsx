import '../styles/TeamCard.css';

function TeamCard({ name, members }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
}

export default TeamCard;

export default function TaskComponent({ task, onRemove, index }) {
    const colors = ["red", "yellow", "green"];
    const textColor = colors[task.priority || 0];
    return <div style={{ color: textColor }}>
        <li>{task.name}</li>
        <button onClick={() => onRemove(index)}>X</button>
    </div>;
}
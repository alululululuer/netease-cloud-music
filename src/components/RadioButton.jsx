const RadioButton = ({ name, id, value, label, onSelect, defaultChecked }) => {
  return (
    <div className="border-r last:border-none">
      {defaultChecked ? (
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="hidden peer"
          defaultChecked
        />
      ) : (
        <input type="radio" id={id} name={name} value={value} className="hidden peer" />
      )}
      <label
        htmlFor={id}
        className="radio peer-checked:radio--active"
        onClick={() => onSelect(value)}
      >
        {label}
      </label>
    </div>
  );
};
export default RadioButton;
